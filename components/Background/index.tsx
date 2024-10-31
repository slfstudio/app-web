import { View } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRef } from 'react';

function Background({ ...props }: SafeAreaViewProps) {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const scrollToInput = (reactNode: any) => {
    if (reactNode) {
      scrollRef.current?.scrollToFocusedInput(reactNode);
    }
  };
  return (
    <View className={`flex-1`}>
      <KeyboardAwareScrollView ref={scrollRef} keyboardShouldPersistTaps="handled" extraScrollHeight={60} {...props} />
    </View>
  );
}
export default Background;
