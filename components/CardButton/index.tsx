import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import { CardButtonCustomProps } from './types';
import { scaleWidth } from '@/utils/scaleSizes';
import Spacing from '../Spacing';

function CardButton({ variant, image, label, onPress }: CardButtonCustomProps) {
  const containerStyle = {
    primary: 'border-primary',
    white: 'border-white',
    'white-small': 'border-white w-[110] h-[84]',
    'primary-large': 'border-primary w-[155] h-[100]',
  };
  const textStyle = {
    primary: 'text-dark1',
    white: 'text-white',
    'white-small': 'text-white',
    'primary-large': 'text-dark1',
  };
  const getTextVariant = () => {
    if (variant && variant.includes('primary')) {
      return 'Body-Small-Regular';
    }
    return 'Body-Extra-Small-Regular';
  };

  const getSizeTextVariant = () => {
    if (variant && variant.includes('primary')) {
      return scaleWidth(110);
    }
    return scaleWidth(85);
  };

  return (
    <View className="flex-1 py-xs">
      <TouchableOpacity className="w-[340] h-[160] border rounded-xl justify-between" onPress={onPress}>
        <Image className="w-full rounded-t-xl" source={image} />
        <Text variant={getTextVariant()} className={` ${textStyle[variant ?? 'primary']} text-center text-dark`}>
          {label}
        </Text>
        <Spacing size="XS" />
      </TouchableOpacity>
    </View>
  );
}

export default CardButton;
