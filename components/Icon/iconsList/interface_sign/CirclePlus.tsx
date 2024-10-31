import React from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';
function SvgCirclePlus({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G fill="#111928">
        <Path d="M15.825 11.138h-3V8.175c0-.45-.375-.825-.862-.825-.45 0-.825.375-.825.863v2.962H8.175c-.45 0-.825.375-.825.863 0 .45.375.825.863.825h2.962v2.962c0 .45.375.825.863.825.45 0 .825-.375.825-.862v-2.963h2.962c.45 0 .825-.375.825-.862a.832.832 0 00-.825-.825z" />
        <Path d="M12 .675A11.315 11.315 0 00.675 12c0 6.263 5.1 11.363 11.362 11.363C18.3 23.363 23.4 18.263 23.4 12 23.363 5.738 18.263.675 12 .675zm0 21c-5.325 0-9.637-4.35-9.637-9.675A9.634 9.634 0 0112 2.363c5.325 0 9.675 4.312 9.675 9.637s-4.35 9.675-9.675 9.675z" />
      </G>
    </Svg>
  );
}
export default React.memo(SvgCirclePlus);
