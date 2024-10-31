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
        options={headerCustom({ primary: true, title: t('headers.quote_your_car_insurance') })}
      />
      <Stack.Screen name="LoaderScreen" options={{ headerShown: false }} />

      <Stack.Screen
        name="YourQuoteScreen"
        options={headerCustom({ primary: true, title: t('headers.your_quote') })}
      />
    </Stack>
  );
};
export default InsuranceCarStack;
