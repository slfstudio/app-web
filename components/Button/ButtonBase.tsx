import { TouchableOpacity } from 'react-native';
import { ButtonCustomProps } from './types';
import Text from '@/components/Text';

function ButtonBase({ variant, text, onPress, ...props }: ButtonCustomProps) {
  const containerStyle = {
    image: 'bg-primary',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    facebook: 'bg-facebook',
    google: 'bg-google ',
    black: 'bg-black ',
    border: ' border border-black',
    disabled: 'bg-gray3',
  };

  const getClassName = (key: string) => {
    switch (key) {
      case 'disabled':
        return 'text-dark4';
      case 'border':
        return 'text-black';
      default:
        return 'text-white';
    }
  };
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={onPress}
      className={`${containerStyle[variant ?? 'primary']} h-14 rounded-full items-center justify-center `}
    >
      <Text className={getClassName(variant ?? 'default')} variant="Body-Medium-Medium">
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonBase;
