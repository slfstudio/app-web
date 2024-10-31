import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="home" options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Services" options={{ headerShown: false }}
      />
    </Stack>
  );
}
