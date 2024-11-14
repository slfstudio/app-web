import { ImageBackground, TouchableOpacity } from 'react-native';
import buttonImage from '@/assets/images/header/header.png';
import Text from '@/components/Text';
import { ButtonCustomProps } from './types';

export default function ImageButton({ text, onPress }: ButtonCustomProps) {
  return (
    <TouchableOpacity onPress={onPress} className={`h-14 rounded-full items-center justify-center`}>
      <ImageBackground
        source={buttonImage}
        imageStyle={{ borderRadius: 35 }}
        resizeMode=""
        className="items-center justify-center "
        style={{width:"100%",height:'100%'}}
      >
       <Text className="text-white" variant="Body-Medium-Medium">
          {text}
        </Text>
      </ImageBackground>
       
    </TouchableOpacity>
  );
}
