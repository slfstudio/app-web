import React from 'react';
import { SvgProps, Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
function SvgNounSuitcase({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 70 61" fill="none" {...props}>
      <Path
        d="M66.156 15.057H51.318v-1.675a1.477 1.477 0 00-1.476-1.477h-.255V6.091A3.192 3.192 0 0046.4 2.902H23.718a3.192 3.192 0 00-3.189 3.189v5.814h-.373a1.476 1.476 0 00-1.477 1.477v1.675H3.842a3.3 3.3 0 00-3.296 3.297v7.376a15.593 15.593 0 003.465 9.813v18.56a3.988 3.988 0 003.984 3.983h54.008a3.988 3.988 0 003.984-3.984v-18.56a15.594 15.594 0 003.465-9.812v-7.376a3.3 3.3 0 00-3.296-3.297zm-15.931-1.675v1.675h-6.099v-1.675a.383.383 0 01.383-.383h5.333a.383.383 0 01.383.383zm-23.26 1.675v-1.675a1.477 1.477 0 00-1.476-1.477h-.228l-.017-4.504 19.61-.018v4.522h-.344a1.477 1.477 0 00-1.476 1.477v1.675H26.965zM21.623 6.09a2.097 2.097 0 012.095-2.095H46.4a2.097 2.097 0 012.094 2.095v5.814h-2.546V7.383a1.076 1.076 0 00-1.075-1.075h-19.63a1.077 1.077 0 00-1.072 1.075v4.522h-2.548V6.091zm-1.85 7.29a.383.383 0 01.383-.382h5.333a.383.383 0 01.383.383v1.675h-6.099v-1.675zm45.12 40.721a2.894 2.894 0 01-2.89 2.89H7.995a2.894 2.894 0 01-2.89-2.89V36.767A15.62 15.62 0 0016.217 41.4h1.051v3.51a1.236 1.236 0 001.235 1.234H23.5a1.235 1.235 0 001.235-1.234V41.4h20.53v3.51a1.236 1.236 0 001.235 1.234h4.996a1.235 1.235 0 001.235-1.235v-3.509h1.05a15.62 15.62 0 0011.113-4.633v17.334zM23.64 44.911a.142.142 0 01-.141.14h-4.996a.141.141 0 01-.141-.14v-8.113a.141.141 0 01.141-.14H23.5a.141.141 0 01.14.14v8.112zm22.718-8.113a.142.142 0 01.141-.14h4.996a.14.14 0 01.141.14v8.112a.14.14 0 01-.141.141h-4.996a.141.141 0 01-.14-.14v-8.113zm22-11.068a14.594 14.594 0 01-14.577 14.577H52.73v-3.509a1.236 1.236 0 00-1.235-1.233h-4.996a1.235 1.235 0 00-1.235 1.233v3.51h-20.53v-3.51a1.236 1.236 0 00-1.235-1.233h-4.996a1.236 1.236 0 00-1.235 1.233v3.51h-1.05A14.594 14.594 0 011.64 25.73v-7.376a2.205 2.205 0 012.202-2.204h62.314a2.205 2.205 0 012.202 2.204v7.376z"
        fill="url(#noun-suitcase-5365438_1_svg__paint0_linear_1_2185)"
        stroke="url(#noun-suitcase-5365438_1_svg__paint1_linear_1_2185)"
        strokeWidth={0.446}
      />
      <Defs>
        <LinearGradient
          id="noun-suitcase-5365438_1_svg__paint0_linear_1_2185"
          x1={34.999}
          y1={2.902}
          x2={34.999}
          y2={58.086}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0051A7" />
          <Stop offset={1} stopColor="#9ECE00" />
        </LinearGradient>
        <LinearGradient
          id="noun-suitcase-5365438_1_svg__paint1_linear_1_2185"
          x1={34.999}
          y1={2.902}
          x2={34.999}
          y2={58.086}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0051A7" />
          <Stop offset={1} stopColor="#9ECE00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export default React.memo(SvgNounSuitcase);