import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import Spacing from "../Spacing";
import { Icon } from "../Icon";
import { CardImgProps } from "./types";

export default function CardImg( {title, text, image, onPress, ...props}:CardImgProps ){
    return(
            <TouchableOpacity className="flex-1 w-[25%] border rounded-[16px] overflow-hidden" onPress={onPress}>
                <View className="w-[100%]">
                    <Image resizeMode="cover" className="w-[100%]" source={image}/>
                </View>
                <View className="p-[20px]">
                    <Text variant='Body-Medium-SemiBold' >
                    {title}
                    </Text>
                    <Spacing/>
                    <View className="flex-row ">
                    <Text variant='Body-Small-Regular'  >
                    {text}
                    </Text>
                    <Spacing horizontal/>
                    <View className="justify-end">
                    <Icon name='ChevronRight' size={25} />
                    </View>
                    
                    </View>
                </View>
            </TouchableOpacity>
    )
}