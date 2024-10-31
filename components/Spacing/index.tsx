import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SpacingCustomProps } from './types';

const sizes = {
  XXL: 50,
  XL: 40,
  L: 30,
  M: 20,
  S: 10,
  XS: 5,
};

function Spacing({ size = 'M', horizontal }: SpacingCustomProps) {
  const styles = StyleSheet.create({
    horizontal: {
      width: sizes[size],
    },
    vertical: {
      height: sizes[size],
    },
  });

  return <View style={[horizontal ? styles.horizontal : styles.vertical]} />;
}

export default Spacing;
