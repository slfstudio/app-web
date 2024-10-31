import { useTranslation } from 'react-i18next';
import { ModalTextButtonProps } from './types';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { Icon } from '../Icon';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import TextButton from '../TextButton';

export default function ModalTextButton({ isVisible, onClose, onPress }: ModalTextButtonProps) {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const [backdropOpacity, setBackdropOpacity] = useState<number>(0);
  useEffect(() => {
    if (isVisible) {
      setBackdropOpacity(0.4);
    } else {
      setBackdropOpacity(0);
    }
  }, [isVisible]);

  const handleMajorHealth = () => {
    navigate('MajorHealthStack', { screen: 'MajorHealthSteps' });
    onClose?.();
  };

  const handleTravelAssist = () => {
    navigate('TravelAssistStack', { screen: 'TravelSteps' });
    onClose?.();
  };

  return (
    <Modal isVisible={isVisible} hasBackdrop backdropOpacity={backdropOpacity}>
      <View className="bg-white min-h-[530] rounded-2xl p-4 ">
        <View className="flex-row justify-between mb-4">
          <Text variant="Body-Medium-Bold" className="text-black">
            {t('warnings.select_an_option')}
          </Text>
          <TouchableOpacity onPress={() => onClose?.()}>
            <Icon name="Close" size={16} />
          </TouchableOpacity>
        </View>
        <Spacing />
        <View className="flex-1 justify-center items-center">
          <TextButton
            title={t('text.major_health_insurance')}
            subtitle={t('text.a_coverage_ranging_from_500000_to_1500000_usd')}
            text={t('text.complete_worldwide_health_cover')}
            onPress={() => handleMajorHealth()}
          />
          <Spacing />
          <TextButton
            title={t('text.travel_assist')}
            subtitle={t('text.a_coverage_ranging_from_10000_to_500000_usd')}
            text={t('text.temporary_health_cover_for_travel')}
            onPress={() => handleTravelAssist()}
          />
        </View>
        <Spacing />
      </View>
    </Modal>
  );
}
