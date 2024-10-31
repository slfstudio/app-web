import { ImageBackground, Touchable } from 'react-native';
import buttonImage from '@/assets/images/header/header.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '@/components/Text';
import { ButtonCustomProps } from './types';

export default function ImageButton({ text, onPress }: ButtonCustomProps) {
  return (
    <TouchableOpacity onPress={onPress} className={`h-14 rounded-full items-center justify-center `}>
      <ImageBackground
        source={buttonImage}
        imageStyle={{ borderRadius: 35 }}
        resizeMode=""
        className="w-[100%] h-[100%] items-center justify-center "
      >
        <Text className="text-white" variant="Body-Medium-Medium">
          {text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
