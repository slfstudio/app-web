import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router';
import Navbar from '@/components/navigation/NavBar';

const Auth = () => {
  const { t } = useTranslation();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <Navbar isWhite />,
        }}
      />
      <Stack.Screen
        name="Recovery"
        options={{
          header: () => <Navbar isWhite />,
        }}
      />
      <Stack.Screen
        name="Signup"
        options={{
          header: () => <Navbar isWhite />,
        }}
      />
    </Stack>
  );
};
export default Auth;
