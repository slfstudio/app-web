import { View } from 'react-native';
import { Icon } from '../Icon';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { NoHistoryProps } from './types';

export default function NoHistory({ text }: NoHistoryProps) {
  return (
    <View className="items-center h-[600]">
      <></>
      <Spacing />
      <Icon name="BoxClose" size={40} />
      <Spacing />
      <Text>{text}</Text>
    </View>
  );
}
