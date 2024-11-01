import { useTranslation } from 'react-i18next';
import { headerCustom } from '@/components/navigation/HeaderCustom';
import { Stack } from 'expo-router';


//
const InsuranceCarStack = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoaderScreen" options={{ headerShown: false }} />

      <Stack.Screen
        name="YourQuoteScreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};
export default InsuranceCarStack;
