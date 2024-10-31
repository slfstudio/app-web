import { TouchableOpacity, View } from 'react-native';
import { TextButtonCustomProps } from './types';
import Text from '@/components/Text';
import Spacing from '../Spacing';

export default function TextButton({ onPress, title, subtitle, text }: TextButtonCustomProps) {
  return (
    <TouchableOpacity className=" w-[100%]  bg-white border rounded-xl p-4 overflow-hidden" onPress={onPress}>
      <Text variant="Body-Large-Medium" className="text-dark">
        {title}
      </Text>
      <Spacing size="S" />
      <View className="">
        <Text variant="Body-Medium-Medium" className="leading-5">
          {subtitle}
        </Text>
        <Spacing size="S" />
        <Text className="leading-5">{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
