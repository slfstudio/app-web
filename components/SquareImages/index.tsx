import { Image, View } from "react-native";
import Spacing from "../Spacing";
import imagenn from '@/assets/images/cards/keyhouse.png'
import { SquareImagesProps } from "./types";

export default function SquareImages({image, imageTwo, imageThree, imageFour}:SquareImagesProps) {
    return (
        <View className="flex-1 flex-row items-center justify-center">
            {/* Left column */}
            <View className="gap-4">
                <View className="flex-[0.35] rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={image}
                        resizeMode="cover"
                    />
                </View>
                <View className="flex-[0.65] rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={imageTwo}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <Spacing horizontal/>
            
            {/* Right column */}
            <View className="gap-4 ">
                <View className="flex-[0.65] rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={imageThree}
                        resizeMode="cover"
                    />
                </View>
                <View className="flex-[0.35] rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={imageFour}
                        resizeMode="cover"
                    />
                </View>
            </View>
        </View>
    )
}