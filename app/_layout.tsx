import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useColorScheme } from '@/hooks/useColorScheme';
import '@/i18n';
import '../global.css';
import Navbar from '@/components/navigation/NavBar';
import Footer from '@/components/navigation/Footer';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Inter-Black': require('../assets/fonts/Inter/Inter-Black.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter/Inter-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>

          <Stack.Screen
            name="index"
            options={{
              header: () => <Navbar isWhite />,
            }}
          />
          <Stack.Screen name="Services"  options={{
              header: () => <Navbar isWhite />,
            }}/>
          <Stack.Screen name="About"  options={{
              header: () => <Navbar isWhite />,
            }} />
          <Stack.Screen name="Contact"  options={{
              header: () => <Navbar isWhite />,
            }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <Footer/>
      </PersistGate>
    </Provider>
  );
}
