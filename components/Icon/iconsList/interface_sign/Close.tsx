import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgClose({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 16 17" fill="none" {...props}>
      <Path
        d="M8.8 8.5l6.1-6.1a.558.558 0 000-.8.558.558 0 00-.8 0L8 7.7 1.9 1.6a.558.558 0 00-.8 0 .558.558 0 000 .8l6.1 6.1-6.1 6.1a.558.558 0 000 .8c.1.1.25.175.4.175.15 0 .3-.05.4-.175L8 9.3l6.1 6.1c.1.1.25.175.4.175.15 0 .3-.05.4-.175a.558.558 0 000-.8L8.8 8.5z"
        fill={props.fill ?? '#111928'}
      />
    </Svg>
  );
}
export default React.memo(SvgClose);
