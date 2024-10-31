import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import RadioButton from '../RadioButton';
import { useState } from 'react';
import { Icon } from '../Icon';
import { RateExpandableCustomProps } from './types';
import Spacing from '../Spacing';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '@/utils/genericFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
  addAllPlanOption,
  addPlanOptionId,
  removeAllPlanOptionId,
  removePlanOptionId,
} from '@/store/reducer/majorHealthReducer';

export default function RateExpandable({
  variant,
  title,
  amount,
  amountSingle,
  planItem,
  planOptions,
}: RateExpandableCustomProps) {
  const { t } = useTranslation();
  const { planOptionId } = useSelector((state: RootState) => state.majorHealthReducer);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const addPlanValue = (isSelected: boolean) => {
    if (variant === 'main' && planOptions) {
      console.log(
        'planItem',
        planOptions.map((item) => item.id),
      );
      if (planOptionId.length === planOptions.length) {
        dispatch(removeAllPlanOptionId());
      } else {
        dispatch(addAllPlanOption(planOptions.map((item) => item.id)));
      }

      return;
    }

    if (!planItem?.id) return;

    if (planOptionId.includes(planItem.id)) {
      dispatch(removePlanOptionId(planItem.id));
    } else if (!planOptionId.includes(planItem.id)) {
      dispatch(addPlanOptionId(planItem.id));
    }
  };

  return (
    <View className="rounded border border-dark6">
      <View className="flex-row rounded-t bg-dark3 h-[42] p-[8] items-center justify-between">
        <Text variant="Body-Small-Medium" className="text-white">
          {title}
        </Text>
        <RadioButton
          variant="square"
          value={
            variant === 'main' && planOptions && planOptionId.length === planOptions.length
              ? true
              : planOptionId.includes(planItem?.id)
          }
          onValueChange={(isSelected) => addPlanValue(isSelected)}
        />
      </View>

      {/*main*/}
      {variant === 'main' && (
        <>
          <View className="p-[8] items-center">
            <Text variant="Body-Small-Regular">{formatCurrency(amount)}</Text>
          </View>
        </>
      )}

      {/*inOut*/}
      {variant === 'inOut' && (
        <>
          <View className="flex-row border-b border-dark6">
            {planItem.deductibles
              // .sort((a, b) => a.coverageZoneTypeId - b.coverageZoneTypeId)
              .map((deductible, index) => (
                <View key={index} className="p-[8] items-center w-[50%] border-r border-dark6">
                  <Text variant="Body-Small-Regular">
                    {t(deductible.coverageZoneTypeId === 1 ? 'label.in' : 'label.out')}{' '}
                    {formatCurrency(deductible.amount)}
                  </Text>
                </View>
              ))}
          </View>
          {/* collapsable section starts*/}
          {expanded && <Payments quotes={planItem.quotes} />}
          <TouchableOpacity className="items-center justify-center h-[28]" onPress={toggleExpand}>
            <View>{expanded ? <Icon name="ChevronUp" size={20} /> : <Icon name="ChevronDown" size={20} />}</View>
          </TouchableOpacity>
        </>
      )}

      {/*single*/}
      {variant === 'single' && (
        <>
          <View className="border-b border-dark6">
            <View className="p-[8] items-center  ">
              <Text variant="Body-Small-Regular">${amountSingle}</Text>
            </View>
          </View>
          {/* collapsable section starts*/}
          {expanded && <Payments quotes={planItem.quotes} />}
          <TouchableOpacity className="items-center justify-center h-[28]" onPress={toggleExpand}>
            <View>{expanded ? <Icon name="ChevronUp" size={20} /> : <Icon name="ChevronDown" size={20} />}</View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export function Payments({ quotes }: RateExpandableCustomProps) {
  const { t } = useTranslation();

  // Find the corresponding quote for each payment frequency
  const monthlyQuote = quotes.find((q) => q.paymentFrequencyId === 1);
  const biannualQuote = quotes.find((q) => q.paymentFrequencyId === 2);
  const quarterlyQuote = quotes.find((q) => q.paymentFrequencyId === 3);
  const annualQuote = quotes.find((q) => q.paymentFrequencyId === 4);

  return (
    <View>
      <View className="flex-row h-[35] border-b border-dark6">
        <View className="p-[8] items-center w-[50%] border-r border-dark6 ">
          <Text variant="Body-Small-Regular">{t('label.annual')}</Text>
        </View>
        <View className="p-[8] w-[50%] items-center">
          <Text variant="Body-Small-Regular">{formatCurrency(annualQuote?.amount || 0)}</Text>
        </View>
      </View>

      <View className="flex-row border-b h-[35] border-dark6">
        <View className="p-[8] items-center w-[50%] border-r border-dark6 ">
          <Text variant="Body-Small-Regular">{t('label.biannual')}</Text>
        </View>
        <View className="p-[8] w-[50%] items-center">
          <Text variant="Body-Small-Regular">{formatCurrency(biannualQuote?.amount || 0)}</Text>
        </View>
      </View>

      <View className="flex-row border-b h-[35] border-dark6">
        <View className="p-[8] items-center w-[50%] border-r border-dark6 ">
          <Text variant="Body-Small-Regular">{t('label.quarterly')}</Text>
        </View>
        <View className="p-[8] w-[50%] items-center">
          <Text variant="Body-Small-Regular">{formatCurrency(quarterlyQuote?.amount || 0)}</Text>
        </View>
      </View>

      <View className="flex-row h-[35] border-b border-dark6">
        <View className="p-[8] items-center w-[50%] border-r border-dark6 ">
          <Text variant="Body-Small-Regular">{t('label.monthly')}</Text>
        </View>
        <View className="p-[8] w-[50%] items-center">
          <Text variant="Body-Small-Regular">{formatCurrency(monthlyQuote?.amount || 0)}</Text>
        </View>
      </View>
    </View>
  );
}
