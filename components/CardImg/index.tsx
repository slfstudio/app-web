import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import Text from '../Text';
import Spacing from '../Spacing';
import { Icon } from '../Icon';
import { CardImgProps } from './types';

export default function CardImg({ image, onPress, ...props }: CardImgProps) {
  return (
    <View className="bg-dark6 rounded-2xl w-[355px] h-[220px]" >
      <Image resizeMode="cover" className="w-[100%] h-[100%] rounded-xl" source={{uri:image.item}} />
    </View>
  );
}
