import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import { Icon } from '../Icon';
import { ButtonCustomProps } from './types';

function IconButton({ iconName, label, onPress }: ButtonCustomProps) {
  return (
    <TouchableOpacity className="w-[100] pb-xs" onPress={onPress}>
      <View className={`border bg-white rounded-lg items-center justify-center p-md`}>
        <Icon name={iconName} size={24} />
      </View>
      <View className="items-center justify-center p-xs">
        <Text variant="Body-Extra-Small-Regular" className="text-dark">
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default IconButton;
