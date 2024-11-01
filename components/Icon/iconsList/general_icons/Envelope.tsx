import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgEnvelope({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 3.6H3A2.377 2.377 0 00.636 5.962v12.15a2.377 2.377 0 002.362 2.363h18a2.377 2.377 0 002.363-2.363V5.925c0-1.275-1.088-2.325-2.363-2.325zm0 1.687h.112l-9.113 5.85-9.112-5.85h18.112zm0 13.425H3a.672.672 0 01-.676-.675v-11.1l8.775 5.625c.263.188.563.263.863.263.3 0 .6-.075.862-.263L21.6 6.937v11.138c.075.375-.225.637-.6.637z"
        fill="#F57D92"
      />
    </Svg>
  );
}
export default React.memo(SvgEnvelope);
