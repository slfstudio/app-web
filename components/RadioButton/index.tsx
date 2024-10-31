import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { RadioButtonProps } from './types';
import { Icon } from '../Icon';
import { colors } from '@/config';

export default function RadioButton({ value = false, text = '', onValueChange, variant }: RadioButtonProps) {
  const borderSize = {
    active: 'w-2 h-2',
    disabled: 'w-4 h-4',
  };

  const getStyle = (containeIcon?: boolean) => {
    if (variant === 'square') {
      if (containeIcon) return `items-center justify-center ${value ? 'bg-pink-light' : 'bg-white rounded'}`;
      return ` rounded-md ${value ? 'bg-pink-light' : 'bg-white'}`;
    } else if (variant === 'squareWhite') {
      if (containeIcon) return `items-center justify-center ${value ? 'bg-white' : 'bg-white rounded'}`;
      return ` rounded-md ${value ? 'bg-white' : 'bg-dark3'}`;
    }
    return 'rounded-full';
  };

  return (
    <TouchableOpacity className="flex-row items-center" onPress={() => onValueChange?.(false)}>
      <View className={`${getStyle()} h-[20] w-[20] items-center justify-center bg-pink-light`}>
        <View className={`${value ? borderSize.active : borderSize.disabled} bg-white ${getStyle(true)}`}>
          {variant === 'square' && <Icon name="Checkmark" fill="white" size={12} />}
          {variant === 'squareWhite' && <Icon name="Checkmark" fill={colors.dark3} size={12} />}
        </View>
      </View>
      <Spacing size="S" horizontal />
      <Text variant="Body-Extra-Small-Regular" className="text-dark">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
