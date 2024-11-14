import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import { Icon } from '../Icon';
import { MyPolicyButtonProps } from './types';
import Spacing from '../Spacing';
import { useState } from 'react';

export default function MyPolicyButton({ title, name, policy, icon, variant, onPress }: MyPolicyButtonProps) {
  return (
    <View className="flex-1">
      <Text variant="Body-Medium-Bold" className="text-dark">
        {title}
      </Text>
      <Spacing size="XS" />
      <TouchableOpacity
        onPress={onPress}
        className="flex-1 flex-row bg-white border border-pink-light rounded-md p-[16]"
      >
        <Icon name={icon} size={48} />
        <Spacing size="M" horizontal />
        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text variant="Body-Medium-Bold" className="text-black">
              {name}
            </Text>
            {variant === 'editable' && <Icon name="Pencil" size={20} />}
          </View>
          <Spacing size="XS" />
          <Text variant="Body-Small-Regular" className="text-black">
            {policy}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
