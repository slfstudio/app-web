import Text from '@/components/Text';
import { View, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';

export default function Loading() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={'large'} />
      <Spacing />
      <Text>{t('loading')}</Text>
    </View>
  );
}
