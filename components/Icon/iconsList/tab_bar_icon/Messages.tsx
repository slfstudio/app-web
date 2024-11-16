import React from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';
function SvgMessages({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 28 22" fill="none" {...props}>
      <G fill={props.fill ?? '#8899A8'}>
        <Path d="M24.588.194H3.413A2.633 2.633 0 00.788 2.819v12.206a2.633 2.633 0 002.625 2.625h6.3l3.5 3.85c.175.219.437.306.743.306.263 0 .525-.13.744-.306l3.588-3.894h6.343a2.633 2.633 0 002.625-2.625V2.82c0-1.444-1.225-2.625-2.668-2.625zm.7 14.787c0 .35-.307.657-.657.657h-6.825c-.262 0-.525.13-.743.306l-3.15 3.412-3.063-3.368c-.175-.22-.437-.307-.744-.307H3.413a.673.673 0 01-.657-.656V2.82c0-.35.307-.656.657-.656h21.175c.35 0 .656.306.656.656V14.98h.044z" />
        <Path d="M7.788 7.631c-.57 0-1.05.482-1.05 1.05 0 .57.48 1.05 1.05 1.05.568 0 1.05-.48 1.05-1.05 0-.568-.438-1.05-1.05-1.05zM14 7.631c-.569 0-1.05.482-1.05 1.05 0 .57.481 1.05 1.05 1.05.569 0 1.05-.48 1.05-1.05 0-.568-.481-1.05-1.05-1.05zM20.213 7.631c-.57 0-1.05.482-1.05 1.05 0 .57.48 1.05 1.05 1.05.568 0 1.05-.48 1.05-1.05 0-.568-.482-1.05-1.05-1.05z" />
      </G>
    </Svg>
  );
}
export default React.memo(SvgMessages);