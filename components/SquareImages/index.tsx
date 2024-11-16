import { Image, View } from "react-native";
import Spacing from "../Spacing";
import imagenn from '@/assets/images/cards/keyhouse.png'
import { SquareImagesProps } from "./types";

export default function SquareImages({image, imageTwo, imageThree, imageFour}:SquareImagesProps) {
    return (
        <View className="flex-1 flex-col md:flex-row p-10 justify-center gap-4 md:gap-2">
            {/* Left column */}
            <View className="w-full md:w-1/2 gap-4">
                <View className="h-48 md:h-64 lg:h-80 rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={image}
                        resizeMode="cover"
                    />
                </View>
                <View className="h-64 md:h-80 lg:h-96 rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={imageTwo}
                        resizeMode="cover"
                    />
                </View>
            </View>
            
            {/* Right column */}
            <View className="w-full md:w-1/2 gap-4">
                <View className="h-64 md:h-80 lg:h-96 rounded-[16px] overflow-hidden">
                    <Image 
                        className="h-full w-full" 
                        source={imageThree}
                        resizeMode="cover"
                    />
                </View>
                <View className="h-48 md:h-64 lg:h-80 rounded-[16px] overflow-hidden">
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