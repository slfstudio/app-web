import { TextStyle } from 'react-native';
import { string } from 'yup';

export interface CustomSwitchProps {
  buttonWidth?: number;
  buttonPadding?: number;
  buttonColor?: string;
  buttonBorderWidth?: number;
  buttonBorderColor?: string;
  buttonText?: string;
  buttonTextStyle?: TextStyle;
  switchWidth?: number;
  switchBackgroundColor?: string | object;
  switchBorderWidth?: number;
  switchBorderColor?: string;
  switchLeftText?: string;
  switchLeftTextStyle?: TextStyle;
  switchRightText?: string;
  switchRightTextStyle?: TextStyle;
  onSwitchButtonText?: string;
  onSwitchButtonTextStyle?: TextStyle;
  onSwitchBackgroundColor?: string | object;
  animationSpeed?: number;
  startOnLeft?: boolean;
  disabled?: boolean;
  text: string;
  onPress?: () => void;
  onPressDisabled?: boolean;
  onChangeValue?: (value: boolean) => void;
}
