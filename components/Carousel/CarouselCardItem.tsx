import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
interface CarouselCardItemProps {
  item: {
    index: number;
    item: {
      id: number;
      description: string;
      url_image: string;
      imageBase64: string;
    };
  };
  index: number;
  setImageModal: (img: object) => void;
}

const CarouselCardItem = ({ item, index, setImageModal }: CarouselCardItemProps) => {
  const [itemLocal, setItemLocal] = useState<null | object>(null);
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  useEffect(() => {
    setItemLocal(item);
  }, [item.id]);

  if (itemLocal) {
    return (
      <View className="bg-dark6 rounded-2xl w-[235] h-[120]" key={index}>
        <TouchableOpacity
          onPress={() => {
            setImageModal({ uri: 'data:image/png;base64,' + itemLocal.item.imageBase64 });
          }}
        >
          <Image
            className="w-[100%] h-[100%] rounded-xl"
            source={'data:image/png;base64,' + itemLocal.item.imageBase64}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

export default CarouselCardItem;
