import Modal from 'react-native-modal';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../Icon';
import Spacing from '../Spacing';
import Text from '../Text';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import { PhotoModalProps } from './types';
import { useState, useEffect } from 'react';

export default function PhotoModal({ isVisible, onClose, text, variantImage }: PhotoModalProps) {
  const { t } = useTranslation();
  const [backdropOpacity, setBackdropOpacity] = useState<number>(0);
  useEffect(() => {
    if (isVisible) {
      setBackdropOpacity(0.4);
    } else {
      setBackdropOpacity(0);
    }
  }, [isVisible]);

  const getClassName = (key: string) => {
    if (key === 'rectangle') {
      return 'bg-dark8 h-[400] w-[330]';
    }
    return 'bg-dark8 rounded-full h-[200] w-[200]';
  };

  return (
    <Modal isVisible={isVisible} hasBackdrop backdropOpacity={backdropOpacity}>
      <View className="bg-white min-h-[206] rounded-2xl justify-between p-md">
        <View className="items-end">
          <TouchableOpacity onPress={() => onClose?.()}>
            <Icon name="Close" size={16} />
          </TouchableOpacity>
        </View>
        <Spacing />
        <View className="items-center">
          <View className={getClassName(variantImage)} />
        </View>
        <Spacing />
        <View>{text && <Text>{text}</Text>}</View>
        <Spacing size="XL" />
        <Button text={t('button.ok')} variant="border" onPress={() => onClose?.()} />
      </View>
    </Modal>
  );
}
