import Text from '@/components/Text';
import { View, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';

interface LoadingProps {
  isQuote?: boolean;
  withText?: boolean;
}

export default function Loading({ isQuote = false, withText = true }: LoadingProps) {
  const { t } = useTranslation();
  const animation = useRef<LottieView>(null);

  return (
    <View className="flex-1 justify-center items-center">
      {isQuote && (
        <>
          <Text variant="Heading-H6">{t('text.your_quote_is_on_its_way')}</Text>
          <Spacing />
        </>
      )}
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 120,
          height: 120,
        }}
        source={require('@/assets/animation/expat_loader.json')}
      />
      <Spacing />
      {withText && <Text>{t('text.were_working_on_it')}</Text>}{' '}
    </View>
  );
}
