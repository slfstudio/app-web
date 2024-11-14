import { Pressable, View } from 'react-native';
import { Icon } from '../Icon';
import { useNavigation } from 'expo-router';

interface HeaderLeftProps {
  iconColor?: string;
  isMenu?: boolean;
  onPress?: () => void;
}

export default function HeaderLeft({ iconColor, isMenu, ...props }: HeaderLeftProps) {
  const { goBack, openDrawer, ...rest } = useNavigation<any>();
  return (
    <View className="flex-row justify-center pl-md">
      <Pressable onPress={() => (props.onPress ? props.onPress?.() : isMenu ? openDrawer() : goBack())}>
        <Icon name={isMenu ? 'Menu' : 'ChevronLeft'} size={24} fill={iconColor} />
      </Pressable>
    </View>
  );
}
