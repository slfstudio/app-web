import React from 'react';
import { SvgProps, Svg, G, Path, Defs, ClipPath } from 'react-native-svg';
function SvgNounCall({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G clipPath="url(#noun-call_svg__clip0_874_15221)" fill="#111928" stroke="#111928" strokeWidth={0.25}>
        <Path d="M20.078 25.404c-.408 0-.812-.083-1.188-.243A34.134 34.134 0 01.742 7.013a2.988 2.988 0 01.633-3.298L4.329.76a1.221 1.221 0 011.728 0l4.282 4.283a1.224 1.224 0 01.151 1.543l-2.352 3.518a29.139 29.139 0 007.661 7.662l3.518-2.353a1.224 1.224 0 011.543.152l4.283 4.282a1.222 1.222 0 010 1.728l-2.955 2.954a2.978 2.978 0 01-2.11.875zM5.192.793a.829.829 0 00-.587.243L1.65 3.99a2.6 2.6 0 00-.55 2.869 33.747 33.747 0 0017.942 17.942 2.6 2.6 0 002.869-.55l2.955-2.953a.832.832 0 000-1.175l-4.283-4.283a.834.834 0 00-1.05-.103l-3.627 2.425a.195.195 0 01-.218 0 29.55 29.55 0 01-7.948-7.948.195.195 0 010-.218l2.425-3.628a.833.833 0 00-.103-1.05L5.78 1.036a.829.829 0 00-.588-.243zM23.571 10.624a.196.196 0 01-.195-.195 7.912 7.912 0 00-7.903-7.904.196.196 0 010-.39 8.303 8.303 0 018.293 8.294.195.195 0 01-.195.195z" />
        <Path d="M21.103 10.802a.195.195 0 01-.195-.195 5.62 5.62 0 00-5.613-5.613.195.195 0 110-.39 6.01 6.01 0 016.004 6.003.195.195 0 01-.196.195zM18.402 10.625a.195.195 0 01-.195-.195 2.737 2.737 0 00-2.734-2.735.196.196 0 010-.39 3.128 3.128 0 013.125 3.125.195.195 0 01-.196.195zM24.194 22.444a.196.196 0 01-.138-.057l-5.91-5.91a.196.196 0 01.277-.276l5.91 5.91a.195.195 0 01-.139.333zM9.564 7.814a.195.195 0 01-.138-.058l-5.91-5.908a.195.195 0 11.277-.277l5.91 5.91a.195.195 0 01-.139.333z" />
      </G>
      <Defs>
        <ClipPath id="noun-call_svg__clip0_874_15221">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0h25v25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default React.memo(SvgNounCall);