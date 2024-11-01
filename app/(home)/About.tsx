import Background from '@/components/Background';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';
import ChairImg from '@/assets/images/general/chairs.png';
import Spacing from '@/components/Spacing';
import AboutSection from '@/components/AboutSection';

export default function About() {
  const { t } = useTranslation();
  return (
    <Background>
      <View className="p-[16px]">
        <Text variant="Heading-H6" className="text-pinkLight">
          {t('headers.insurance_services')}
        </Text>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className="flex-row">
          <Image className="w-[50%]" source={ChairImg} />
          <Spacing horizontal />
          <View className="p-[16px] w-[50%]">
            <Text variant="Heading-H6">Secure your peace of mind</Text>
            <Spacing />
            <Text variant="Body-Large-Regular" className="text-dark">
              Welcome to your all-in-one digital platform for complete protection in Mexico.
            </Text>
            <Spacing size="XXL" />
            <Text variant="Body-Large-Regular" className="text-dark">
              Expat Shield is a digital platform specialized in offering Health, Travel, Home and Car policies,
              specifically designed for expatriates who reside or are temporarily located in Mexico.
            </Text>
            <Spacing />
            <Text variant="Body-Large-Regular" className="text-dark">
              With more than 30 years of experience in the market, our cutting edge platform is made to protect you when
              you're far from home with the most recognized and important insurance companies through a friendly user
              experience offering tailor made and competitive plans.
            </Text>
          </View>
        </View>
        <Spacing />
        <View className="flex-row p-[16px]">
          <Text>24/7</Text>
          <Spacing horizontal />
          <View className="justify-center">
            <Text>
              We got your back providing our services of assistance, advice and support in case of any claims or
              questions of any kind.
            </Text>
          </View>
        </View>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className="flex-1 flex-row justify-evenly">
            <AboutSection 
            variant='health' 
            mainTitle='Health  & Travel Assist'  
            iconName='Luggage' 
            title='Redbridge'
            subtitle='25 years of experience in managing international insurance.'
            bullet={t('info.more_than_10_million_clients_worldwide')}
            />
          <Spacing horizontal />
            <AboutSection 
            variant='car' 
            mainTitle='Car'  
            iconName='Car' 
            title='Quálitas'
            subtitle='Quálitas is the leading auto insurance company in Mexico.'
            bullet="Known for offering the fastest and most efficient service through its extensive network of adjusters throughout the country.
Recognized for its financial strength by AM BEST and Standard & Poor's.
Rated as the most reliable insurer by clients and companies."
            titleTwo='Zurich'
            subtitletwo='Insurer with a global presence and local support, with over 150 years of experience.'
            bulletTwo='Known for its focus on innovation, financial stability, customer service, and commitment to sustainability.'
             />
        <Spacing horizontal />
            <AboutSection 
            variant='home' 
            mainTitle='Home'  
            iconName='HomeIcon' 
            title='Inbursa'
            subtitle='Mexican insurer known for its financial strength, technological innovation, and service.'
            bullet='Recognized for its expertise in home protection and diversification of financial products.
Awarded for its commitment to social responsibility.' />
        </View>
      </View>
    </Background>
  );
}
