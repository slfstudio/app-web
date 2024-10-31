import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function ChevronLeft({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.237 21.488c-.225 0-.45-.075-.6-.263L7.162 12.6a.838.838 0 010-1.2l8.475-8.625a.838.838 0 011.2 0 .838.838 0 010 1.2L8.962 12l7.913 8.025a.838.838 0 010 1.2c-.225.15-.413.262-.638.262z"
        fill={props.fill ?? '#111928'}
      />
    </Svg>
  );
}
export default React.memo(ChevronLeft);
