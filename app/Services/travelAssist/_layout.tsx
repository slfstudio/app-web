import { useTranslation } from 'react-i18next';
import { headerCustom } from '@/components/navigation/HeaderCustom';
import { Stack } from 'expo-router';

//
const TravelAssistStack = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Stack.Screen
        name="QuoteInfoTravel"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelTermsPolicy"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} />
    </Stack>
  );
};
export default TravelAssistStack;
