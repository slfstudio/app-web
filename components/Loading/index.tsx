import Text from '@/components/Text';
import { View, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';


interface LoadingProps {
  isQuote?: boolean;
  withText?: boolean;
}

export default function Loading({ isQuote = false, withText = true }: LoadingProps) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      {isQuote && (
        <>
          <Text variant="Heading-H6">{t('text.your_quote_is_on_its_way')}</Text>
          <Spacing />
        </>
      )}
            <ActivityIndicator size={'large'} />

      <Spacing />
      {withText && <Text>{t('text.were_working_on_it')}</Text>}{' '}
    </View>
  );
}
