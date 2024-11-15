import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgNounHelpline({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M38.275 34.817H34.92V21.47h3.355a5.201 5.201 0 015.197 5.196v2.956a5.201 5.201 0 01-5.197 5.196zM36.01 33.73h2.266a4.112 4.112 0 004.108-4.108v-2.956a4.111 4.111 0 00-4.108-4.107H36.01v11.17zM15.24 34.8h-3.514a5.202 5.202 0 01-5.197-5.197v-2.674a5.202 5.202 0 015.197-5.197h3.514V34.8zM11.726 22.82a4.112 4.112 0 00-4.108 4.108v2.674a4.111 4.111 0 004.107 4.107h2.427V22.821h-2.426z"
        fill="#fff"
      />
      <Path
        d="M11.632 22.323h-1.089v-1.361a14.472 14.472 0 0128.943-.036v1.134h-1.089v-1.136a13.383 13.383 0 00-26.765.036v1.363zM34.84 40.788h-4.858V39.7h4.858a3.816 3.816 0 003.811-3.812v-1.706h1.089v1.706a4.906 4.906 0 01-4.9 4.9z"
        fill="#fff"
      />
      <Path
        d="M30.48 43.512h-5.438a3.267 3.267 0 110-6.534h5.438v6.534zm-5.438-5.445a2.178 2.178 0 100 4.356h4.35v-4.356h-4.35z"
        fill="#fff"
      />
    </Svg>
  );
}
export default React.memo(SvgNounHelpline);
