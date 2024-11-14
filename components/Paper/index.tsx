import { View, ViewProps } from 'react-native';
function Paper(props: ViewProps) {
  return <View className={`bg-white min-h-[520px] rounded-2xl p-10 items-center`} {...props} />;
}
export default Paper;
