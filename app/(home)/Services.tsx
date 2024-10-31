import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { View, Image, ImageBackground } from 'react-native';
import carImage from '@/assets/images/quote/car.png';
import healthImage from '@/assets/images/quote/health.png';
import homeImage from '@/assets/images/quote/home.png';
import Background from '@/components/Background';
import Spacing from '@/components/Spacing';
export default function Services() {
  const { t } = useTranslation();

  const insuranceList = [
    {
      image: healthImage,
      title: 'Major Health Insurance Long-Term',
      descriptiopn: [
        'Complete worldwide coverage without restrictions of doctors and hospitals',
        'Hospitalization, accidents & emergencies',
        'Preventive check-ups',
        '...and more',
      ],
      onPress: () => null, //navigate('InsuranceCarStack', { screen: 'QuoteCarScreen' }),
    },
    {
      image: healthImage,
      title: 'Travel Assist Health Insurance Short-term',
      descriptiopn: [
        'Temporary health cover for travel',
        'Medical treatment worldwide',
        'Flexible and split payments',
        '... and more',
      ],
      onPress: () => null,
    },
    {
      image: carImage,
      title: 'Car Insurance',
      descriptiopn: [
        'Mexican-Plated Auto Insurance',
        'Foreign-Plated Auto Insurance',
        'Different Car Insurance Policy Options',
        '...and more',
      ],
      onPress: () => null,
    },
    {
        image: homeImage,
        title: t('insurance.home'),
        descriptiopn: [
          'Protect your property with top insurance',
          'Third-party damage coverage (liability insurance)',
          'Fire floods, earthquakes, glass damage, electronic goods, and robbery',
          '...and more',
        ],
      onPress: () => null, //navigate('HomeStack', { screen: 'InsuranceHomeScreen' }),
    },
  ];

  return (
    <Background>
    <View className="flex-1 px-14">
      <Text variant="Heading-H6" className="text-pinkLight">
        {t('headers.insurance_services')}
      </Text>
      <View className="w-full h-[2px] bg-stroke my-md" />
      <View>
        <Text variant="Body-Small-Medium" className="max-w-[648px] text-justify	">
          We have a digital platform specialized in offering Medical Expenses, Property Damage, and Auto Insurance
          policies, specifically designed for expatriates who reside or are temporarily located in Mexico.
        </Text>
        <Spacing size='XXL'/>
        {/* content cards */}
        <View className="my-md">
          <View className="flex-row flex-wrap justify-between">
            {insuranceList.map((insurance, index) => (
              <View 
                key={index} 
                className="w-full md:w-[48%] mb-6 p-5 rounded-2xl border border-stroke bg-white"
              >
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
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
    </Background>
  );
}

/**
 *
 */
