import React from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';
function SvgBoxClose({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 39 38" fill="none" {...props}>
      <G fill="#637381">
        <Path d="M25.938 12.563a1.396 1.396 0 00-2 0L19.5 17l-4.438-4.438a1.396 1.396 0 00-2 0 1.396 1.396 0 000 2L17.5 19l-4.438 4.438a1.396 1.396 0 000 2c.25.25.626.437 1 .437.376 0 .75-.125 1-.438L19.5 21l4.438 4.438c.25.25.625.437 1 .437s.75-.125 1-.438a1.396 1.396 0 000-2L21.5 19l4.438-4.438c.562-.562.562-1.5 0-2z" />
        <Path d="M34.5.125h-30C2.375.125.625 1.875.625 4v30c0 2.125 1.75 3.938 3.938 3.938h30c2.124 0 3.937-1.75 3.937-3.938V4c-.063-2.125-1.875-3.875-4-3.875zM35.625 34c0 .625-.5 1.125-1.125 1.125h-30A1.12 1.12 0 013.375 34V4c.063-.625.5-1.063 1.125-1.063h30c.625 0 1.125.5 1.125 1.126V34z" />
      </G>
    </Svg>
  );
}
export default React.memo(SvgBoxClose);
