import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router';

//
const InsuranceHomeStack = () => {
  const { t } = useTranslation();
  return (
    <Stack >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}      />
      
    </Stack>
  );
};
export default InsuranceHomeStack;
