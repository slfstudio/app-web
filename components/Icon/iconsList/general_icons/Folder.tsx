import React from 'react';
import { SvgProps, Svg, Path } from 'react-native-svg';
function SvgFolder({ ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M21.537 4.163h-8.662l-.788-1.5c-.412-.75-1.162-1.237-2.025-1.237h-6.6a2.273 2.273 0 00-2.287 2.287v16.575a2.273 2.273 0 002.287 2.288h18.113a2.273 2.273 0 002.287-2.288V6.451c0-1.275-1.05-2.288-2.325-2.288zM3.462 3.113h6.6c.225 0 .413.113.525.338l1.05 1.95a.9.9 0 00.75.45h9.188c.337 0 .6.262.6.6V7.5H2.862V3.713c0-.337.263-.6.6-.6zm18.075 17.775H3.462a.592.592 0 01-.6-.6v-11.1h19.313v11.1c0 .338-.3.6-.638.6z"
        fill="#F796BE"
      />
    </Svg>
  );
}
export default React.memo(SvgFolder);
