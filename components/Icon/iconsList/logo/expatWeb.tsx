import React from 'react';
import { SvgProps, Svg, Path, G } from 'react-native-svg';
function ExpatWeb({ ...props }: SvgProps) {
  return (
    <Svg  viewBox="0 0 700 700" {...props}>
      <Path  d="M12.3 56.7c.3.5-.1 4.6-.8 9.3-3.2 21.6-4 36.7-4 73.5.1 18.1.4 36.4.8 40.5.4 4.1 1 9.7 1.3 12.5 1.1 11.5 2.8 24.7 3.9 31.5 2.3 13.8 3.9 22.3 6.1 32.5 1.4 6.6 2.7 12.8 2.9 13.8.2 1 .7 2.7 1 3.7.3 1 .7 2.7.9 3.7.2 1.1 2.5 9.1 5.1 17.9 16 55.1 40.2 106.6 72.8 155.4 5 7.4 10.7 15.6 12.6 18.1 2 2.6 4.5 5.9 5.6 7.4 1.1 1.6 2.5 3.3 3 3.9.6.6 2.3 2.9 4 5.1 11.2 15.2 45.9 52.9 55.5 60.4l3.5 2.8 11.1-4.2c25.9-9.9 56.7-24.6 74.2-35.5l4.2-2.6-2.9-2.2c-6.9-5.1-26.5-22.6-37.7-33.7-18.1-18-34.9-37.6-48-56.1-2.6-3.8-5.1-7.1-5.4-7.4-2.2-1.8-23.9-37.4-30.3-49.8l-3.8-7.2h274.6l1.9-3.3c5.7-9.9 16-31 21.1-43.2 5.9-14.1 15.5-40.7 15.5-42.9 0-.9-41.9-1.2-173.9-1.1-173.4 0-174 0-174.4-2-.2-1.1-1.6-7.2-3.1-13.5s-2.8-12.4-3-13.5c-.2-1.1-1.1-5.8-2-10.5-1.3-7.2-3.3-22-5.1-37.5-.6-5.1-1.6-22.1-1.9-30l-.2-6.1 258.6.1h258.5V128c-.1-10.2-.5-23.2-.9-29-.5-5.8-1-12.5-1.1-14.9-.2-2.4-.6-6.7-1-9.5-.3-2.8-.8-6.9-1.1-9.1-.2-2.2-.7-5.2-1-6.8l-.6-2.7H310.4c-164.2 0-298.3.3-298.1.7z" />
      <Path  d="M539 208c-32.7 13-60.4 24.2-61.5 24.6-2.7 1.2-2.5 4.3.5 6.5 1.4 1.1 14 5.1 28 8.9 14 3.9 26.6 7.9 28 8.9 2.1 1.6 2.5 2.6 2.3 6.2-.6 12.6-24 69.5-40.3 97.9-10.9 19-33.3 52.5-38 57-.3.3-2.7 3.4-5.5 7-2.7 3.6-5.4 7-6 7.6-.6.6-3.1 3.6-5.6 6.5-4.9 5.9-36.8 38.2-43.9 44.5-2.5 2.2-7 6-10 8.4-3 2.5-5.7 4.8-6 5.1-1.3 1.4-19.5 15.2-28 21.1-25.8 17.9-56.9 35.1-84.5 46.8-4.6 1.9-9.3 3.9-13.5 5.8-2.5 1.1-9.4 3.7-15.5 5.7-6 2.1-11.2 4-11.5 4.2-.5.4 3.1 3.6 14 12.6 4.1 3.4 7.7 6.4 8 6.7 2.8 3.3 44.7 32.6 57.1 39.9 8.1 4.9 6.1 5.3 27.8-5.7 29.4-14.8 58.6-32.7 81-49.6 3-2.3 8.4-6.4 12-9.1 18.4-13.8 40.3-33.6 61.1-55.1 14.5-15 16.1-16.9 36.8-41.9 10.2-12.3 35.9-49.8 43.7-63.7 2.5-4.6 5.5-9.9 6.7-11.8 2.8-4.7 16.7-32.5 21.3-42.5 7.2-15.6 18.2-44.3 24.6-64 2.3-7.2 4.7-13.3 5.3-13.7 1.8-1.2 8-.9 13.2.7 17.9 5.5 42.6 11.8 46.1 11.9 5.3.1 7.1-1.5 5.4-4.6-.6-1.3-7.8-10.9-15.9-21.5-8.1-10.5-24.4-31.9-36.2-47.5-11.8-15.5-23.1-29.9-25-31.9-3.5-3.6-9.1-6-14-5.8-1.4 0-29.3 10.8-62 23.9z" />
    </Svg>
  );
}
export default React.memo(ExpatWeb);