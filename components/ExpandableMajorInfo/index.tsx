import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Icon } from '../Icon';
import ExpandableMajorInfoProps from './types';
import { formatCurrency, getPaymentFrequencyName } from '@/utils/genericFunctions';

export default function ExpandableMajorInfo({ policyQuoteOption }: ExpandableMajorInfoProps) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text variant="Body-Medium-Medium" className="text-dark">
        {t('label.option', { name: policyQuoteOption.planOption.name })}
      </Text>
      <Spacing size="S" />
      <View className="bg-white p-[16]">
        {policyQuoteOption.planOption?.plan && (
          <>
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.plan')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              {policyQuoteOption.planOption?.plan?.name}
            </Text>
            <Spacing />
          </>
        )}

        <View className="flex-row">
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.maximum_benefit')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              {formatCurrency(10)}
            </Text>
          </View>

          <View>
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.deductible')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'deductible'}
            </Text>
          </View>
        </View>
        <Spacing />
        <Text variant="Body-Small-Medium" className="text-dark">
          {t('label.payment_frequency')}
        </Text>
        <Spacing size="XS" />
        <Text variant="Body-Medium-Regular" className="text-dark">
          {t(getPaymentFrequencyName(policyQuoteOption?.paymentFrequencyId))}
        </Text>
        <Spacing />
        <Text variant="Body-Small-Medium" className="text-dark">
          {t('label.optional_befenifts')}
        </Text>
        <Spacing size="XS" />
        <Text variant="Body-Medium-Regular" className="text-dark">
          {t('label.policy')}
          {'optionaBenefits'}
        </Text>
        {/* collapsable section: */}
        {expanded && (
          <>
            <Spacing />
            <View className="border-y border-y-2 border-y-pink-light">
              <Spacing size="S" />
              <Text variant="Body-Medium-Medium" className="text-dark">
                {t('label.premium_summary')}
              </Text>
              <Spacing />
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.total_annual_premium')}
              </Text>
              <Spacing size="XS" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                ${'totalAnnualPrem'}
              </Text>
              <Spacing />
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.first_modal_premium')}
              </Text>
              <Spacing size="XS" />
              <Text variant="Body-Medium-Regular" className="text-dark">
                ${'firstModalPrem'}
              </Text>
              <Spacing />
              <Text>{t('text.policy_fee_included_on_the_1st_modal_premium')}</Text>
              <Spacing />
            </View>
            <Spacing />
            <Text variant="Body-Medium-Medium" className="text-dark">
              {t('label.modal_itemized_premium')}
            </Text>
            <Spacing />
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.principal')}({'principalAge'})
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'principalItemized'}
            </Text>
            <Spacing />
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.dental_benefit_policy')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'dentaItemized'}
            </Text>
            <Spacing />
            {/* beneficiaries */}
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.spouse')}({'spouseAge'})
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'spouseItemized'}
            </Text>
            <Spacing />
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.child')}({'childAge'})
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'childItemized'}
            </Text>
            <Spacing />
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.policy_fee')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark">
              ${'policyFee'}
            </Text>
            <Spacing />
          </>
        )}
        <Spacing />
        <TouchableOpacity className="items-center" onPress={toggleExpand}>
          {!expanded && (
            <>
              <View className="items-center flex-row">
                <Icon name="ChevronDown" size={20} />
                <Spacing size="S" horizontal />
                <Text>{t('label.show_more')}</Text>
              </View>
            </>
          )}
          {expanded && (
            <>
              <View className="items-center flex-row">
                <Icon name="ChevronUp" size={20} />
                <Spacing size="S" horizontal />
                <Text>{t('label.show_less')}</Text>
              </View>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
