import React from 'react';
import { SvgProps, Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
function SvgNounHeartbeat({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 70 70" fill="none" {...props}>
      <Path
        d="M1.094 36.209h6.852c7.474 14.788 25.768 27.893 26.738 28.58a.547.547 0 00.632 0c.968-.685 19.192-13.74 26.694-28.492h6.896a.547.547 0 000-1.093h-6.36c1.644-3.504 2.65-7.088 2.65-10.61A19.485 19.485 0 0035 8.32 19.484 19.484 0 004.804 24.592a25.143 25.143 0 002.61 10.523h-6.32a.547.547 0 100 1.094zM35 63.668c-2.472-1.812-18.69-14.027-25.786-27.46H19.32a.547.547 0 00.5-.325l4.046-9.136 5.989 14.273a.547.547 0 00.495.336h.01a.546.546 0 00.496-.32l2.374-5.178h4.088a.547.547 0 00.505-.335l5.216-12.493 6.244 17.181a.549.549 0 00.979.101l2.48-4.016h7.997C53.62 49.694 37.468 61.859 35 63.668zM5.898 24.592A18.39 18.39 0 0134.69 9.43a.547.547 0 00.618 0 18.39 18.39 0 0128.794 15.162c0 3.495-1.07 7.086-2.802 10.609h-8.864a.546.546 0 00-.466.26l-2.046 3.313L43.59 21.34a.548.548 0 00-1.018-.024l-5.62 13.45h-4.075a.548.548 0 00-.497.32l-2 4.364-5.998-14.295a.548.548 0 00-.499-.335h-.005a.547.547 0 00-.5.325l-4.415 9.971H8.657c-1.706-3.496-2.76-7.057-2.76-10.523z"
        fill="url(#noun-heartbeat-5365395_1_svg__paint0_linear_1_2163)"
        stroke="url(#noun-heartbeat-5365395_1_svg__paint1_linear_1_2163)"
        strokeWidth={0.446}
      />
      <Defs>
        <LinearGradient
          id="noun-heartbeat-5365395_1_svg__paint0_linear_1_2163"
          x1={35}
          y1={5.111}
          x2={35}
          y2={64.89}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0051A7" />
          <Stop offset={1} stopColor="#9ECE00" />
        </LinearGradient>
        <LinearGradient
          id="noun-heartbeat-5365395_1_svg__paint1_linear_1_2163"
          x1={35}
          y1={5.111}
          x2={35}
          y2={64.89}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0051A7" />
          <Stop offset={1} stopColor="#9ECE00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export default React.memo(SvgNounHeartbeat);
