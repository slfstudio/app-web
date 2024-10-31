import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { Icon } from '../Icon';
import { colors } from '@/config';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RatesDropdownProps } from './types';
import RateExpandable from '../RateExpandable';
import ErrorModal from '../ErrorModal';

export default function RatesDropdown({ title, variant, rateItem }: RatesDropdownProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const [modalMessage, setModalMessage] = useState({ text: '', title: '', onClose: () => null });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const handleModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <View className="flex-1 bg-white rounded-xl p-[16]">
      <View className=" flex-row">
        <View className=" flex-1 flex-row">
          <Text variant="Body-Medium-Medium" className="text-dark w-[45%]">
            {title}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (variant === 'premium') {
                setIsVisibleModal(true);
                setModalMessage({
                  title: t('label.xpat_premium'),
                  text: t('text.coverage_1500000_usd_worldwide_coverage_up_to_your_sum_insured_limit'),
                  onClose: () => handleModal(),
                });
              }
              if (variant === 'solution') {
                setIsVisibleModal(true);
                setModalMessage({
                  title: t('label.xpat_solution'),
                  text: t('text.coverage_1500000_usd_worldwide_coverage_up_to_your_sum_insured_limit'),
                  onClose: () => handleModal(),
                });
              }
            }}
          >
            <Icon name="InfoCircle" size={24} fill={colors['pink-light']} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleExpand}>
          <View>{expanded ? <Icon name="ChevronUp" size={20} /> : <Icon name="ChevronDown" size={20} />}</View>
        </TouchableOpacity>
      </View>
      <View>
        {expanded && (
          <>
            <Spacing />
            <RateExpandable
              title={rateItem.name}
              variant="main"
              amount={rateItem.maxBenefit}
              planOptions={rateItem.planOptions}
            />
            <Spacing />
            {rateItem.planOptions.map((planOption, index) => (
              <>
                <RateExpandable
                  title={t('label.deductible_option', { name: planOption.name })}
                  planItem={planOption}
                  variant={planOption.deductibles.length >= 2 ? 'inOut' : 'single'}
                />
                <Spacing />
              </>
            ))}
          </>
        )}
      </View>
      <ErrorModal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
        textButtonOk={t('button.ok')}
        icon="InfoCircle"
        iconSize={40}
        text={modalMessage.text}
        title={modalMessage.title}
      />
    </View>
  );
}
