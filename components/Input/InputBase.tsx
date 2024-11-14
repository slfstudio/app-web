import React, { useCallback, useState } from 'react';
import { View, TextInput, Pressable, StyleProp, ViewStyle } from 'react-native';
import Text from '@/components/Text';
import { TextInputCustomProps } from './types';
import { Icon } from '../Icon';
import { colors } from '@/config';
import { useTranslation } from 'react-i18next';

function InputBase({ label = ' ', ...props }: TextInputCustomProps) {
  const { t } = useTranslation();
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(props.variant === 'password' ? true : false);
  const handlePress = useCallback(() => {
    setIsSecureTextEntry((current) => !current);
  }, []);

  const getSizeTextInput = () => {
    if (props.variant === 'password' || props.variant === 'date' || props.variant === 'calendar') {
      return { width: '90%' };
    } else if (props.variant === 'text-area') {
      return { height: 200, width: '100%' };
    }
    return { width: '100%' };
  };

  const getBorderColor = () => {
    if (props.error) {
      return { borderColor: colors.red };
    }
    return { borderColor: colors.stroke };
  };
  return (
    <View>
      {label && (
        <Text variant="Body-Small-Regular" className="text-dark">
          {label}
        </Text>
      )}
      <View
        className={`flex-row items-center justify-between px-md bg-white ${props.variant === 'text-area' ? 'h-[200]' : 'h-14'} border rounded-md mt-xs`}
        style={getBorderColor() as StyleProp<ViewStyle>}
      >
        <TextInput
          style={getSizeTextInput() as StyleProp<ViewStyle>}
          autoCapitalize="none"
          placeholderTextColor="gray"
          secureTextEntry={isSecureTextEntry}
          {...props}
        />
        {props.variant === 'password' && (
          <Pressable onPress={handlePress}>
            <Icon name={isSecureTextEntry ? 'Eye' : 'EyeSlash'} />
          </Pressable>
        )}
        {(props.variant === 'date' || props.variant === 'calendar') && (
          <View>
            <Icon name="Calendar" size={20} />
          </View>
        )}
      </View>
      {props.error && <Text className="text-red">{t(props.error)}</Text>}
    </View>
  );
}

export default InputBase;
