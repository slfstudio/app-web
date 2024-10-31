import { TouchableOpacityProps } from 'react-native';

export default interface CardIconCustomProps extends TouchableOpacityProps {
  iconName: string | any;
  text: string | any;
  onPress?: () => void;
}
