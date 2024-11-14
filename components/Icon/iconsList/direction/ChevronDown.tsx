import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgChevronDown({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 17.1a.92.92 0 01-.6-.225L2.775 8.4a.838.838 0 010-1.2.838.838 0 011.2 0L12 15.037l8.025-7.912a.838.838 0 011.2 0 .838.838 0 010 1.2L12.6 16.8c-.187.188-.375.3-.6.3z"
        fill="#111928"
      />
    </Svg>
  );
}
export default React.memo(SvgChevronDown);
