import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgCheckmark({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M22.725 5.025a.838.838 0 00-1.2 0L8.775 17.4l-6.3-6.187c-.338-.338-.863-.3-1.2 0-.338.337-.3.862 0 1.2l6.637 6.45c.225.224.525.337.863.337.337 0 .6-.113.862-.337L22.725 6.15c.337-.263.337-.788 0-1.125z"
        fill={props.fill || '#111928'}
      />
    </Svg>
  );
}
export default React.memo(SvgCheckmark);
