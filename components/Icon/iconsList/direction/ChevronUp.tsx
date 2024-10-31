import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgChevronUp({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8.234 5.738L8 5.508l-.234.23-5.35 5.25h0l-.002.002a.225.225 0 01-.328 0 .225.225 0 01-.001-.328l5.749-5.649h0l.002-.002a.225.225 0 01.328 0h0l.002.002 5.748 5.648h.001a.225.225 0 010 .329.26.26 0 01-.165.077.272.272 0 01-.18-.068L8.234 5.738z"
        fill="#6B7280"
        stroke="#6B7280"
        strokeWidth={0.667}
      />
    </Svg>
  );
}
export default React.memo(SvgChevronUp);
