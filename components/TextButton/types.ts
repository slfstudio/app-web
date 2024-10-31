import { TouchableOpacityProps } from 'react-native';

export interface TextButtonCustomProps extends TouchableOpacityProps {
  title?: string | any;
  subtitle?: string | any;
  text?: string | any;
  onPress?: () => void;
}
