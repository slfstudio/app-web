import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgChevronRight({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 12 20" fill="none" {...props}>
      <Path
        d="M1.763 19.488a.92.92 0 01-.6-.226.838.838 0 010-1.2L9.038 10 1.163 1.975a.838.838 0 010-1.2.838.838 0 011.2 0L10.837 9.4a.838.838 0 010 1.2l-8.474 8.625a.885.885 0 01-.6.262z"
        fill="#111928"
      />
    </Svg>
  );
}
export default React.memo(SvgChevronRight);
