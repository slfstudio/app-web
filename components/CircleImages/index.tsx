import { Image, View } from 'react-native';
import { CircleImagesProps } from './types';

export default function CircleImages({image, imagetwo, imagethree}:CircleImagesProps) {
  return (
    <View className="flex1 h-[100%] flex-row">
      <View className="flex-1">
        <View className="  flex-1 w-[100%] h-[50%]  items-end justify-top">
          <Image className="rounded-[50%]" style={{ width: '50%', height: '90%' }} source={image} />
        </View>
        <View className=" flex-1 w-[100%] h-[100%] items-center">
          <Image className="rounded-[50%]" style={{ width: '50%', height: '100%' }} source={imagetwo} />
        </View>
      </View>
      <View className=" flex-1 justify-end items-center ">
        <Image className="rounded-full" style={{ width: '60%', height: '90%' }} source={imagethree} />
      </View>
    </View>
  );
}
