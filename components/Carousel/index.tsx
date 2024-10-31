import { getPromotions } from '@/api/websersives';
import { colors } from '@/config';
import { useState, useRef, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as FileSystem from 'expo-file-system';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CarouselCardItem from './CarouselCardItem';
import { ModalViewer } from '../ModalViewer';
import Skeleton from 'react-native-reanimated-skeleton';
const { width } = Dimensions.get('window');
interface CarouselCustomProps {
  onPressAction?: () => void;
}
const CarouselCustom = ({ onPressAction }: CarouselCustomProps) => {
  const catalogsGenericReducer = useSelector((state) => state?.catalogsGenericReducer);
  const [index, setIndex] = useState<number>(0);
  const carouselRefCustom = useRef<any>(null);
  const [benefits, setBenefits] = useState([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<object>({});
  useEffect(() => {
    getBenefits();
  }, []);
  const getBenefits = async () => {
    let benefitsAS = [];
    if (catalogsGenericReducer.isConnected) {
      const response = await getPromotions();

      if (response.data.status === 'error') {
      } else {
        let benefitsArray = [];
        for (let item of response.data.data) {
          item.imageBase64 = await imageToBase64(item.url_image);
          benefitsArray.push(item);
        }
        setBenefits(benefitsArray);
        await AsyncStorage.setItem('@benefits', JSON.stringify(benefitsArray));
      }
    } else {
      try {
        benefitsAS = await AsyncStorage.getItem('@benefits');
        benefitsAS = JSON.parse(benefitsAS);
        setBenefits(benefitsAS);
      } catch (e) {
        console.log('error', e);
      }
    }
  };

  const imageToBase64 = async (imageModalURI: any) => {
    try {
      let download = await FileSystem.downloadAsync(
        imageModalURI,
        FileSystem.documentDirectory + imageModalURI.split('/').pop(),
      );
      return await FileSystem.readAsStringAsync(download.uri, { encoding: FileSystem.EncodingType.Base64 });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <View>
      <Skeleton
        containerStyle={{ flex: 1, width: width, alignItems: 'center' }}
        isLoading={!benefits.length}
        layout={[
          { key: 'carousel', width: 270, height: 120, marginBottom: 6 },
          { key: 'pagination', width: 100, height: 20, marginTop: 6 },
        ]}
      >
        <Carousel
          layout={'default'}
          layoutCardOffset={9}
          ref={carouselRefCustom}
          data={benefits}
          renderItem={(v) => (
            <CarouselCardItem
              item={v}
              index={v.index}
              setImageModal={(img) => {
                setImageModal(img);
                setIsVisible(true);
              }}
            />
          )}
          sliderWidth={width}
          itemWidth={270}
          firstItem={1}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
          autoplay={true}
          loop={true}
        />
        <Pagination
          dotsLength={benefits.length}
          activeDotIndex={index}
          ref={carouselRefCustom}
          dotStyle={{
            width: 20,
            borderRadius: 5,
            backgroundColor: colors.black,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </Skeleton>
      <ModalViewer
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        imageModal={imageModal}
        onPressAction={onPressAction}
      />
    </View>
  );
};

export default CarouselCustom;
