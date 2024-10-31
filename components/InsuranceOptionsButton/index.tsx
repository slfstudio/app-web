import { TouchableOpacity, View } from 'react-native';
import Text from '../Text';
import { Icon } from '../Icon';
import { InsuranceOptionsButtonProps } from './types';

export default function InsuranceOptionsButton({ text, onPress }: InsuranceOptionsButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" p-[16] flex-row h-[56] bg-white border border-black rounded-md justify-between"
    >
      <Text>{text}</Text>
      <Icon name="CirclePlus" size={23} />
    </TouchableOpacity>
  );
}
