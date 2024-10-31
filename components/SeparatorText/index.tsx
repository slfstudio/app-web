import { View } from 'react-native';
import Text from '@/components/Text';

interface SeparatorTextProps {
  text: String;
}

function SeparatorText({ text }: SeparatorTextProps) {
  return (
    <View className="items-center">
      <Text variant="Body-Medium-SemiBold">{text}</Text>
    </View>
  );
}

export default SeparatorText;
