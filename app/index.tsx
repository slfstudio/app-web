import Text from '@/components/Text';
import { Image, View } from 'react-native';
import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';
import CardImg from '@/components/CardImg';
import Button from '@/components/Button';
import { useNavigation } from 'expo-router';
import CircleImages from '@/components/CircleImages';
import Background from '@/components/Background';
import CarouselCustom from '@/components/Carousel';
import familyImg from '@/assets/images/cards/family.png';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  return (
    <Background className="bg-white">
      <View className="flex-1">
        <View className="flex-row h-[50%] p-[20px]">
          <View className="flex-1  justify-start  items-start">
            <View >
              <Text variant="Heading-H3" className="text-dark font-normal">
                Welcome to
              </Text>
              <Text variant='Heading-H1'>Expat Shield!</Text>
            </View>
            <View className="w-[380px] justify-center">
              <View >
                <Spacing />
                <Text className="text-justify">{t('text.secure_your_peace_of_mind_with_a_quick')}</Text>
                <Spacing />
              </View>

              <Button
                variant="image"
                text={t('headers.quote_your_insurance')}
                onPress={() => navigate('Services', { screen: 'insuranceHomeStack' })}
              />
              <Spacing />
              <Button variant="border" text={t('headers.log_in')} onPress={() => navigate('Auth')} />
            </View>
          </View>
          <View className="flex-1 ">
            <CircleImages image={beachImg} imagetwo={churchImg} imagethree={workingImg} />
          </View>
        </View>
        <View className="p-[20px]">
          <Text variant="Heading-H5" className="text-dark">
            Discover our benefits
          </Text>
          <Spacing />

          
            <CarouselCustom/>
        </View>
      </View>
    </Background>
  );
}
