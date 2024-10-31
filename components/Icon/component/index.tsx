import React from 'react';

import { IconProps } from './types';
import * as icons from '../iconsList';

function Icon({ color = '#3D4754', name, size, ...svgProps }: IconProps) {
  const SelectedIcon = icons[name];
  const measures = size ? { width: size, height: size } : {};

  return <SelectedIcon color={color} {...measures} {...svgProps} />;
}

export default React.memo(Icon);
