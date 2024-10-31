import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import { Icon } from '../Icon';
import { TutorialsButtonProps } from './types';

export default function TutorialButton({ label, onPress }: TutorialsButtonProps) {
  return (
    <View className="bg-white border border-black rounded-lg overflow-hidden mb-[16]">
      <TouchableOpacity className="p-[20] h-[64] flex-row justify center justify-between ]" onPress={onPress}>
        <Text variant="Body-Medium-Regular" className="text-dark">
          {label}
        </Text>
        <View className="w-[24]">
          <Icon name="ChevronRight" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
