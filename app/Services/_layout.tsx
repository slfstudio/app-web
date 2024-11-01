import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="insuranceCar" options={{ headerShown: false }} />
      <Stack.Screen name="travelAssist" options={{ headerShown: false }} />
      <Stack.Screen name="majorHealth" options={{ headerShown: false }} />
      <Stack.Screen name="insuranceHome" options={{ headerShown: false }} />
    </Stack>
  );
}
