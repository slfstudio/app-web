import { useTranslation } from 'react-i18next';
import { ModalCardButtonProps } from './types';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from '../Icon';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import CardButton from '../CardButton';
import lifeImage from '@images/quote/life.png';
import healthImage from '@images/quote/health.png';

export default function ModalCardButton({ isVisible, onClose, ...props }: ModalCardButtonProps) {
  const { t } = useTranslation();
  const [backdropOpacity, setBackdropOpacity] = useState<number>(0);
  useEffect(() => {
    if (isVisible) {
      setBackdropOpacity(0.4);
    } else {
      setBackdropOpacity(0);
    }
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} hasBackdrop backdropOpacity={backdropOpacity}>
      <View className="bg-white min-h-[500] rounded-2xl p-xl">
        <View className="flex-row justify-between">
          <Text variant="Body-Medium-Bold" className="text-black">
            {t('warnings.select_an_option')}
          </Text>
          <TouchableOpacity onPress={() => onClose?.()}>
            <Icon name="Close" size={16} />
          </TouchableOpacity>
        </View>
        <Spacing />
        <View className="flex-1 items-center justify-center items-center">
          <CardButton variant="primary" image={lifeImage} label={t('insurance.life')} />
          <CardButton variant="primary" image={healthImage} label={t('insurance.health')} />
        </View>
      </View>
    </Modal>
  );
}
