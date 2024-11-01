import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';

interface Insurance {
  image: any; // Update this to more specific type if possible
  title: string;
  descriptiopn: string[]; // Note: there's a typo in 'description'
  onPress?:()=>void
}

interface CardWebServicesProps {
  insurance: Insurance;
}

function CardWebServices({ insurance }: CardWebServicesProps) {
  return (
    <TouchableOpacity onPress={insurance.onPress} className="w-full md:w-[48%] mb-6 p-5 rounded-2xl border border-stroke bg-white">
      <ImageBackground
        source={insurance.image}
        imageStyle={{ borderRadius: 8, width: '100%', height: 244 }}
        resizeMode="cover"
        className="items-start justify-end h-[244px] p-4"
      >
        <View className="bg-white rounded-full py-lg px-3xl">
          <Text className="text-dark" variant="Body-Large-SemiBold">
            {insurance.title}
          </Text>
        </View>
      </ImageBackground>
      <View className="mt-4">
        {insurance.descriptiopn.map((item, index) => (
          <View key={index} className="flex-row items-start mb-2">
            <Text variant="Body-Extra-Small-Regular" className="mr-2">
              •
            </Text>
            <Text variant="Body-Extra-Small-Regular">{item}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}


export default CardWebServices