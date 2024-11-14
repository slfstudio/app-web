import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgPlay({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M3.031 19.468a1.23 1.23 0 01-.656-.187c-.438-.25-.688-.656-.688-1.156V1.875c0-.469.25-.906.688-1.156.438-.25.938-.22 1.375.03l14 8.157c.406.25.625.656.625 1.125 0 .438-.219.875-.625 1.094L3.719 19.25c-.219.125-.469.218-.688.218zM3.062 2v16l13.75-8-13.75-8z"
        fill={props.fill || '#0051A7'}
      />
    </Svg>
  );
}
export default React.memo(SvgPlay);
