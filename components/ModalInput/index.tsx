import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import Modal from 'react-native-modal';
import { ModalInputProps } from './types';
import { Icon } from '../Icon';
import Spacing from '../Spacing';
import Button from '../Button';
import Input from '../Input';

export default function ModalInput({ isVisible, onClose, onCancel, onOk, title, ...props }: ModalInputProps) {
  const { t } = useTranslation();
  const [backdropOpacity, setBackdropOpacity] = useState<Number>(0);

  useEffect(() => {
    if (isVisible) {
      setBackdropOpacity(0.4);
    } else {
      setBackdropOpacity(0);
    }
  }, [isVisible]);

  return (
    <Modal isVisible={isVisible} hasBackdrop backdropOpacity={backdropOpacity}>
      <View className="bg-white min-h-[300] rounded-2xl p-xl">
        <View className="flex-row justify-between">
          <View />
          <TouchableOpacity onPress={() => onClose?.()}>
            <Icon name="Close" size={16} />
          </TouchableOpacity>
        </View>
        <Text variant="Body-Medium-Bold" className="text-black">
          {title}
        </Text>
        <Spacing size="S" />
        <View className="flex-1">
          <Input label={props.inputLabel} placeholder={props.inputPHolder} />
        </View>
        <Button
          variant={onCancel ? 'black' : 'border'}
          text={props.textButtonOk ?? t('button.ok')}
          onPress={() => (onOk ? onOk?.() : onClose?.())}
        />
      </View>
    </Modal>
  );
}

<Modal />;
