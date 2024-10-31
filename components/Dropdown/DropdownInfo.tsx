import { Pressable, View } from 'react-native';
import { DropdownProps } from './types';
import DropdownBase from './DropdownBase';
import Spacing from '../Spacing';
import { Icon } from '../Icon';

function DropdownInfo({ onPressInfo, ...props }: DropdownProps) {
  return (
    <View className={'flex-row items-center'}>
      <View className={'w-[60%]'}>
        <DropdownBase {...props} />
      </View>

      <Spacing horizontal size="S" />
      <Pressable onPress={onPressInfo}>
        <Icon name="InfoCircle" size={25} />
      </Pressable>
    </View>
  );
}

export default DropdownInfo;
