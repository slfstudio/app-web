import { Image, View } from "react-native";
import Spacing from "../Spacing";
import imagenn from '@/assets/images/cards/keyhouse.png'
import { SquareImagesProps } from "./types";

export default function SquareImages({image, imageTwo, imageThree, imageFour}:SquareImagesProps){
    return(
        <View className="flex-row p-[20px] w-[50%] h-[100%]">
            <View className="flex-1">
                <View className=" h-[35%] w-[100%] rounded-[16px] overflow-hidden">
                    <Image className="flex-1" source={image}/>
                </View>
                <Spacing/>
                <View className=" h-[60%] w-[100%] rounded-[16px] overflow-hidden">
                    <Image className="flex-1" resizeMode="cover" source={imageTwo}/>
                </View>
            </View>
            <Spacing horizontal/>
            <View className="flex-1">
            <View className="  h-[60%] w-[100%] rounded-[16px] overflow-hidden">
                <Image className="flex-1" resizeMode="cover" source={imageThree}/>
            </View>
                <Spacing/>
                <View className=" h-[35%] w-[100%] rounded-[16px] overflow-hidden">
                    <Image className="flex-1" resizeMode="cover" source={imageFour}/>
                </View>

            </View>

        </View>
    )
}