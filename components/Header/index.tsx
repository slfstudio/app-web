import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import headerImg from '@/assets/images/header/header.png';
import Spacing from '../Spacing';
import { Icon } from '../Icon';
import { headerProps } from './types';

export default function Header({ header }: headerProps) {
  return (
    <View className="flex-1 h-[100]  ">
      <ImageBackground source={headerImg} imageStyle={{ borderBottomRightRadius: 35 }} className="flex-1 p-md">
        <View className="flex-1 flex-row items-end ">
          <TouchableOpacity>
            <Icon name="ChevronLeft" size={25} fill="white" />
          </TouchableOpacity>
          <Spacing horizontal />
          <Text variant="Heading-H6" className="text-white">
            {header}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
