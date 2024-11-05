import Background from '@/components/Background';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { Image, View, Text as TextRN } from 'react-native';
import ChairImg from '@/assets/images/general/chairs.png';
import Spacing from '@/components/Spacing';
import AboutSection from '@/components/AboutSection';
import { useWindowDimensions } from 'react-native';
import Bullets from '@/components/Bullets';

export default function About() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Common breakpoint for mobile devices

  const bulletsOne  = [
    'More than 10 million clients worldwide.',
    'Global network with representation in most cities around the world.',
    'Over 2 million providers worldwide: Ground ambulances, Air ambulances, Primary Care Centers, Diagnostic Centers, Hospitals, Medical Centers, Rehabilitation Centers, Laboratories, among many other medical facilities.'
  ];
  const bulletsTwo = [
    'Known for offering the fastest and most efficient service through its extensive network of adjusters throughout the country.',
    "Recognized for its financial strength by AM BEST and Standard & Poor's.",
    'Rated as the most reliable insurer by clients and companies.'
  ];
  const bulletsThree = ["Known for its focus on innovation, financial stability, customer service, and commitment to sustainability."];
  const bulletsFour = [
    "Recognized for its expertise in home protection and diversification of financial products.",
    "Awarded for its commitment to social responsibility."
  ];

  return (
    <Background className="bg-white">
      <View className="p-[16px]">
        <Text variant="Heading-H6" className="text-pink-light">
          {t('headers.insurance_services')}
        </Text>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className={`flex-row ${isMobile ? 'flex-col' : ''}`}>
          <Image className={`${isMobile ? 'w-full h-[200px]' : 'w-[50%]'}`} source={ChairImg} />
          {!isMobile && <Spacing horizontal />}
          {isMobile && <Spacing />}
          <View className={`p-[16px] ${isMobile ? 'w-full' : 'w-[50%]'}`}>
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
          <TextRN className="font-['Inter'] text-[79px] font-bold leading-[146.954px] tracking-[2px] text-pink-light">
            24/7
          </TextRN>
          <Spacing horizontal />
          <View className={`justify-center ${isMobile ? 'w-[300px]' : 'w-[500px]'}`}>
            <Text>
              We got your back providing our services of assistance, advice and support in case of any claims or
              questions of any kind.
            </Text>
          </View>
        </View>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className={`flex-1 flex-row flex-wrap gap-4 ${isMobile ? 'justify-center' : 'justify-between'} `}>
          <AboutSection
            variant="health"
            mainTitle="Health  & Travel Assist"
            iconName="Luggage"
            title="Redbridge"
            subtitle="25 years of experience in managing international insurance."
            bullet={bulletsOne.map((item, index) => (
              <Bullets key={index} label={item} />
            ))}
          />
          
          <AboutSection
            variant="car"
            mainTitle="Car"
            iconName="Car"
            title="Quálitas"
            subtitle="Quálitas is the leading auto insurance company in Mexico."
            bullet={bulletsTwo.map((item, index) => (
              <Bullets key={index} label={item} />
            ))}
            subtitletwo="Insurer with a global presence and local support, with over 150 years of experience."
            bulletTwo={bulletsThree.map((item, index) => (
              <Bullets key={index} label={item} />
            ))}
          />
          
          <AboutSection
            variant="home"
            mainTitle="Home"
            iconName="HomeIcon"
            title="Inbursa"
            subtitle="Mexican insurer known for its financial strength, technological innovation, and service."
            bullet={bulletsFour.map((item, index) => (
              <Bullets key={index} label={item} />
            ))}
          />
        </View>
      </View>
    </Background>
  );
}
   