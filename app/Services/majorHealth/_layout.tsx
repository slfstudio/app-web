import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router';

//
const MajorHealthStack = () => {
  const { t } = useTranslation();
  return (
    <Stack >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}      />
      <Stack.Screen
        name="QuoteMajorInfo"
        options={{ headerShown: false }}      />
      <Stack.Screen
        name="QuoteMajorInfoPdf"
        options={{ headerShown: false }}      />
      <Stack.Screen name="QuoteLoading"  options={{ headerShown: false }} />
    </Stack>
  );
};
export default MajorHealthStack;
