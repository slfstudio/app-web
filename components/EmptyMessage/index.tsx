import { Icon } from '@/components/Icon';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { EmptyMessageProps } from './types';

export default function EmptyMessage({ label }: EmptyMessageProps) {
  return (
    <View>
      <View className="items-center">
        <Icon name={'BoxClose'} size={40} />
        <Spacing />
        <Text>{label}</Text>
      </View>
      <Spacing size="L" />
    </View>
  );
}
