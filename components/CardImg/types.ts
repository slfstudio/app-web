import { TouchableOpacityProps } from "react-native";

export interface CardImgProps extends TouchableOpacityProps{
    image?:string | any;
    title: string | any;
    text?: string | any;
    onPress? : ()=> void;
}