import { TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import { Icon } from '../Icon';
import Modal from 'react-native-modal';
import { ErrorModalProps } from './types';
import Spacing from '../Spacing';

export default function ErrorModal({ isVisible, onClose, onCancel, onOk, ...props }: ErrorModalProps) {
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
      <View className="bg-white min-h-[206] rounded-2xl justify-between p-md">
        {/* header moda */}
        <View className="flex-row justify-between">
          <View />
          <View>
            <TouchableOpacity onPress={() => onClose?.()}>
              <Icon name="Close" size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <Spacing size="S" />
        {/* message section  */}
        <View>
          {/* icono */}
          <View className="items-center">
            {props.icon && (
              <>
                <Icon name={props.icon} size={props.iconSize ?? 49} />
                <Spacing size="S" />
              </>
            )}
          </View>

          {/*title*/}
          {props.title && (
            <>
              <Text variant="Body-Large-Bold" className="text-black">
                {props.title}
              </Text>
              <Spacing size="S" />
            </>
          )}
          {/*subtitle*/}
          {props.subtitle && (
            <>
              <Text variant="Body-Medium-Bold">{props.subtitle}</Text>
            </>
          )}
          {/*text*/}
          {props.text && (
            <>
              <Text variant="Body-Medium-Regular">{props.text}</Text>
              <Spacing size="XL" />
            </>
          )}
          {/*subtitle2*/}
          {props.subtitleTwo && (
            <>
              <Text variant="Body-Medium-Bold">{props.subtitleTwo}</Text>
            </>
          )}
          {/*text2*/}
          {props.textTwo && (
            <>
              <Text variant="Body-Medium-Regular">{props.textTwo}</Text>
              <Spacing size="XL" />
            </>
          )}
          {/*subtitle3*/}
          {props.subtitleThree && (
            <>
              <Text variant="Body-Medium-Bold">{props.subtitleThree}</Text>
            </>
          )}
          {/*text3*/}
          {props.textThree && (
            <>
              <Text variant="Body-Medium-Regular">{props.textThree}</Text>
              <Spacing size="XL" />
            </>
          )}
        </View>

        {onCancel && (
          <>
            <Button variant="border" text={props.textButtonCancel ?? t('button.cancel')} onPress={() => onCancel?.()} />
            <Spacing size="S" />
          </>
        )}
        <Button
          variant={onCancel ? 'black' : 'border'}
          text={props.textButtonOk ?? t('button.ok')}
          onPress={() => (onOk ? onOk?.() : onClose?.())}
        />
      </View>
    </Modal>
  );
}
