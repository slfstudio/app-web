import { TouchableOpacityProps } from 'react-native';

export default interface QuoteMajorInfoProps extends TouchableOpacityProps {
  onPress?: () => void;
  name?: string | any;
  age?: string | any;
  sex?: string | any;
  efectiveDate?: string | any;
  languaje?: string | any;
  country?: string | any;
}
