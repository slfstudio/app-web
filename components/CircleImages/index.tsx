import { Image, ImageBackground, View } from "react-native";
import laImage from '@/assets/images/cards/family.png'

export default function CircleImages (){
    return (
        <View className="flex1 h-[50%] w-[50%] flex-row">
            <View className="flex-1">
                <View className="  flex-1 w-[100%] h-[50%]  bg-green items-end justify-center">
                    <Image className="rounded-full" style={{width:'50%', height:'90%'}}  source={laImage}/>
                </View>
                <View className="pt-[20px] flex-1 w-[100%] h-[50%]  bg-pink content-center items-center">
                <Image className="rounded-full" style={{width:'50%', height:'90%'}} source={laImage}/>
                    </View>
            </View>
            <View className="p-[20px] w-[50%] bg-dark7 justify-center items-center">
            <Image  className="rounded-full" style={{width:'60%', height:'80%'}} source={laImage}/>
            </View>
        </View>
    )
}