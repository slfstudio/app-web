import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { View} from 'react-native';
import carImage from '@/assets/images/quote/car.png';
import healthImage from '@/assets/images/quote/health.png';
import homeImage from '@/assets/images/quote/home.png';
import beachImage from '@/assets/images/home/beach.png'

import Background from '@/components/Background';
import Spacing from '@/components/Spacing';
import { useNavigation } from 'expo-router';
import CardWebServices from '@/components/CardWebServices';
export default function Services() {
  const { t } = useTranslation();
  const {navigate} = useNavigation<any>()
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
      onPress: () => navigate('majorHealth'),
    },
    {
      image: beachImage,
      title: 'Travel Assist Health Insurance Short-term',
      descriptiopn: [
        'Temporary health cover for travel',
        'Medical treatment worldwide',
        'Flexible and split payments',
        '... and more',
      ],
      onPress:() => navigate('travelAssist'),
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
      onPress: () => navigate('insuranceCar'),
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
        onPress: () => navigate('insuranceHome'),
      },
  ];

  return (
    <Background className='bg-white'>
    <View className="flex-1 px-14">
      <Text variant="Heading-H6" className="text-pink-light">
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
            {insuranceList.map((insurance, index) => (<CardWebServices key={index}  insurance={insurance}/>
          
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
