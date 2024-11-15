import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { TextVariant } from './types';
import typography from '@/config/typography';

interface CustomTextProps {
  variant?: keyof typeof TextVariant;
}

type Props = TextProps & CustomTextProps;

const Text: React.FC<Props> = (props) => {
  return <RNText {...props}  style={[typography[props?.variant ?? 'default']]} />;
};

export default Text;


//className={`text-primary-text ${props.className}`} 