import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View, Dimensions } from 'react-native';
import { Icon } from '../Icon';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { DropdownProps } from './types';
import { Image } from 'expo-image';

const DropdownBase: FC<DropdownProps> = ({ label, placeholder, data, onSelect, optionalText, error }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    setVisible(false);
    setSelected(undefined);
  }, [data]);
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect?.(item);
    setVisible(false);
  };
  const renderIcon = (icon: string) => {
    if (icon) {
      const countryFlagCdn = `https://flagsapi.com/${icon}/flat/64.png`;
      return (
        <View className="w-[20] h-[20] rounded-full bg-white border" style={{ overflow: 'hidden' }}>
          <Image
            source={countryFlagCdn}
            className="w-[100%] h-[100%] rounded-full"
            onError={(e) => console.log('error=========>', e)}
          />
        </View>
      );
    }
    return null;
  };
  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity className="p-sm flex-row" onPress={() => onItemPress(item)}>
      {renderIcon(item.icon)}
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const { t } = useTranslation();

  return (
    <View>
      {label && (
        <Text variant="Body-Small-Regular" className="text-dark">
          {label}
          {optionalText && (
            <Text variant="Body-Extra-Small-Regular" className="text-pink-light">
              {' '}
              {optionalText}
            </Text>
          )}
        </Text>
      )}

      <TouchableOpacity
        className="flex-row items-center justify-between px-md bg-white h-14 border-stroke border rounded-md mt-xs"
        onPress={toggleDropdown}
      >
        <Text>{(selected && selected?.label) || placeholder}</Text>
        <Icon name={visible ? 'ChevronUp' : 'ChevronDown'} size={20} />
      </TouchableOpacity>

      {visible && (
        <View className="bg-white shadow rounded-md mt-xs max-h-[200]">
          <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
        </View>
      )}

      {error && <Text className="text-red">{t(error)}</Text>}
    </View>
  );
};

export default DropdownBase;
