import type { SvgProps } from 'react-native-svg';
import { IconsType } from '../iconsList/types';

export type IconProps = SvgProps & {
  color?: string;
  name: keyof IconsType;
  size?: number;
};
