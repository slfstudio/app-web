import { View, ViewProps } from 'react-native';
function Paper(props: ViewProps) {
  return <View className="bg-white min-h-[520] rounded-2xl px-md " {...props} />;
}
export default Paper;
