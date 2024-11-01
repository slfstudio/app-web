import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Icon } from '../Icon';
import Spacing from '../Spacing';
import { colors } from '@/config';

const Footer = () => {
  return (
    <View className="flex-row p-4 bg-dark border-t border-gray-300">
      <Link href="/">
        <View className="mr-5">
          <Icon name="ExpatWeb" size={30} fill={colors.stroke} />
        </View>
      </Link>
      <Link href="/terms">
        <Text className="text-white text-base">Terms and Conditions</Text>
      </Link>
      <Spacing horizontal/>
      <Link href="/policy">
        <Text className="text-white text-base">Privacy Policy</Text>
      </Link>
    </View>
  );
};

export default Footer;
