import { TouchableOpacity, View } from 'react-native';
import { Icon } from '../Icon';
import Spacing from '../Spacing';
import Text from '@/components/Text';
import CardIconCustomProps from './types';

export default function CardIcon({ iconName, text, onPress }: CardIconCustomProps) {
  return (
    <TouchableOpacity className="border rounded bg-white w-[170] items-center justify-center p-[12]" onPress={onPress}>
      <Icon name={iconName} size={80} />
      <Spacing size="S" />
      <Text variant="Body-Medium-Regular" className="text-dark">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
