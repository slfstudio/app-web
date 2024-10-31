import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgMenu({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 14" fill="none" {...props}>
      <Path
        d="M1.5 1.862h21c.45 0 .863-.375.863-.862A.849.849 0 0022.5.137h-21A.872.872 0 00.638 1c0 .487.412.862.862.862zM22.5 6.175h-21a.872.872 0 00-.862.862c0 .45.375.863.862.863h21c.45 0 .863-.375.863-.863a.872.872 0 00-.863-.862zM22.5 12.137h-21A.872.872 0 00.638 13c0 .488.375.863.862.863h21c.45 0 .863-.375.863-.863a.872.872 0 00-.863-.863z"
        fill={props.fill ?? '#111928'}
      />
    </Svg>
  );
}
export default React.memo(SvgMenu);
