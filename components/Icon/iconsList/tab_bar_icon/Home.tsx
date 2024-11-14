import React from 'react';
import { SvgProps, Svg, G, Path, Defs, ClipPath } from 'react-native-svg';
function SvgHome({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" fill="none" {...props}>
      <G clipPath="url(#home_svg__clip0_1_4203)">
        <Path
          d="M24.675 27.256h-5.731a2.586 2.586 0 01-2.582-2.581v-4.637a.598.598 0 00-.612-.613h-3.5a.598.598 0 00-.613.613v4.637a2.558 2.558 0 01-2.58 2.581H3.324a2.586 2.586 0 01-2.581-2.581V9.931c0-.743.35-1.4.962-1.793l11.156-7.044c.7-.438 1.575-.438 2.232 0L26.25 8.18a2.09 2.09 0 01.962 1.794v14.7c.044 1.4-1.137 2.581-2.537 2.581zm-12.425-9.8h3.5a2.558 2.558 0 012.581 2.582v4.637c0 .35.263.613.613.613h5.73c.35 0 .613-.263.613-.613V9.931c0-.043-.043-.087-.043-.131l-11.2-7.044c-.044-.043-.088-.043-.132 0L2.8 9.8c-.044.044-.088.087-.088.131v14.744c0 .35.263.613.613.613h5.731c.35 0 .613-.263.613-.613v-4.637c0-1.4 1.137-2.582 2.58-2.582z"
          fill={props.fill ?? '#8899A8'}
        />
      </G>
      <Defs>
        <ClipPath id="home_svg__clip0_1_4203">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default React.memo(SvgHome);
