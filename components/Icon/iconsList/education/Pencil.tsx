import React from 'react';
import { SvgProps, Svg, G, Path, Defs, ClipPath } from 'react-native-svg';
function SvgPencil({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#pencil_svg__clip0_1_4574)">
        <Path
          d="M19.125 4.063A99.044 99.044 0 0016 .905c-.219-.219-.469-.344-.75-.344s-.563.094-.75.313L2.719 12.563a1.954 1.954 0 00-.407.624l-1.718 5.25c-.094.25-.032.5.093.688a.83.83 0 00.657.313h.125l5.343-1.782c.25-.093.47-.218.625-.406l11.72-11.688c.187-.187.312-.468.312-.75 0-.28-.125-.53-.344-.75zM6.437 16.28c-.03.032-.062.032-.093.063l-4.032 1.343 1.344-4.03c0-.032.031-.063.063-.095L12.313 5l2.718 2.719-8.594 8.562zM16 6.72L13.281 4l1.906-1.906c.907.875 1.813 1.812 2.688 2.719L16 6.718z"
          fill="#F796BE"
        />
      </G>
      <Defs>
        <ClipPath id="pencil_svg__clip0_1_4574">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default React.memo(SvgPencil);
