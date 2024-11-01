import Background from '@/components/Background';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRootNavigationState } from 'expo-router';
import { View } from 'react-native';
import { useEffect, useState } from 'react';

export default function TravelTermsPolicy() {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const state = useRootNavigationState();
  const [isTab, setIsTab] = useState<boolean>(false);

  useEffect(() => {
    if (state.type === 'tab') {
      setIsTab(true);
    } else {
      setIsTab(false);
    }
  }, [state]);

  return (
    <Background className="p-[16]">
      <View className="justify-between">
        <View>
          <Text variant="Body-Medium-Bold">{t('text.cancellation_and_refound_policy')}</Text>
          <Spacing />
          <Text variant="Body-Medium-Regular">{t('text.information_requeriments_the_processing')}</Text>
          <Spacing />
          <Text variant="Body-Medium-Regular">{t('text.privacy_protection_at_the_time_of_purchase')}</Text>
          <Spacing />
          <Text variant="Body-Medium-Regular">{t('text.credit_card_confirmation_all')}</Text>
        </View>
        <Spacing />
        <View>
          <Button
            text={t('button.decline')}
            variant="border"
            onPress={() =>
              isTab
                ? null
                : navigate('TravelAssistStack', { screen: 'QuoteInfoTravel', params: { termsAccepted: false } })
            }
          />
          <Spacing size="S" />
          <Button
            text={t('button.accept_continue')}
            variant="black"
            onPress={() =>
              isTab
                ? null
                : navigate('TravelAssistStack', { screen: 'QuoteInfoTravel', params: { termsAccepted: true } })
            }
          />
        </View>
      </View>
      <Spacing size="XXL" />
    </Background>
  );
}
