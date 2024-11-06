import {View } from "react-native"
import Text from '@/components/Text'

export interface  BulletsProps{
  label?: string | any;
}

export default function Bullets ({label}:BulletsProps){
    return(
      <View className="flex-row items-start mb-2">
        <Text variant="Body-Extra-Small-Regular" className="mr-2">
          •
        </Text>
        <Text variant="Body-Extra-Small-Regular">{label}</Text>
      </View>) 
}