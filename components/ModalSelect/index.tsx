import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from '../Icon';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { ModalSelectProps } from './types';
import Button from '../Button';
import DropdownInfo from '../Dropdown/DropdownInfo';
import DropdownBase from '../Dropdown/DropdownBase';

export default function ModalSelect({ isVisible, onClose, onOk, onCancel, ...props }: ModalSelectProps) {
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
      <View className="bg-white min-h-[400] rounded-2xl p-xl">
        <View className="flex-row justify-between">
          <View />
          <TouchableOpacity onPress={() => onClose?.()}>
            <Icon name="Close" size={16} />
          </TouchableOpacity>
        </View>
        <Text variant="Body-Medium-Bold" className="text-black">
          {t('warnings.adjust_your_quote')}
        </Text>
        <Spacing />
        <View className="flex-1">
          <DropdownInfo label={t('label.what_type_of_coverage')} placeholder={t('placeholders.select')} />
          <Spacing />
          <DropdownBase label={t('label.what_payment_method')} placeholder={t('placeholders.select')} />
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
