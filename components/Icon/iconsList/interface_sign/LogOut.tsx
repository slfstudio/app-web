import React from 'react';
import { SvgProps, Svg, G, Path } from 'react-native-svg';
function SvgLogOut({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 14 20" fill="none" {...props}>
      <G fill={props.fill || '#0051A7'}>
        <Path d="M11.125.563H7.594c-.813 0-1.5.687-1.5 1.5v2.156c0 .375.312.687.687.687.375 0 .719-.312.719-.687V2.03c0-.062.031-.094.094-.094h3.531c.75 0 1.344.594 1.344 1.344v13.406c0 .75-.594 1.344-1.344 1.344H7.594c-.063 0-.094-.031-.094-.093V15.78a.7.7 0 00-.719-.687.674.674 0 00-.687.687v2.156c0 .813.687 1.5 1.5 1.5h3.531c1.531 0 2.75-1.25 2.75-2.75V3.313c0-1.53-1.25-2.75-2.75-2.75z" />
        <Path d="M2.5 10.688h5.594A.694.694 0 008.78 10a.694.694 0 00-.687-.688H2.53L4.47 7.345a.698.698 0 000-1 .698.698 0 00-1 0L.344 9.53a.698.698 0 000 1l3.125 3.188a.737.737 0 00.5.219.766.766 0 00.5-.188.698.698 0 000-1L2.5 10.687z" />
      </G>
    </Svg>
  );
}
export default React.memo(SvgLogOut);