
import Text from '@/components/Text';
import { Image, View } from 'react-native';
import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';
import CardImg from '@/components/CardImg';
import familyImg from '@/assets/images/cards/family.png'
import Button from '@/components/Button'
import { useNavigation } from 'expo-router';
import CircleImages from '@/components/CircleImages';
export default function HomeScreen() {
  const {t} = useTranslation()
  const {navigate} = useNavigation<any>()
  return (
      <View className='flex-1'>
          <View className='flex-row h-[50%]'>
              <View className='flex-1 items-center  justify-center p-[20px]'>
                <Text variant='Heading-H6' className='text-dark'>{t('regards.good_morning')}</Text>
                <Spacing/>
                <Text>{t('text.secure_your_peace_of_mind_with_a_quick')}</Text>
                <Spacing/>
                <Button text={t('headers.quote_your_insurance')} onPress={()=>navigate('(insuranceHomeStack)')}/>
              </View>
              <View className='flex-1 '>
              <CircleImages image={beachImg} imagetwo={churchImg} imagethree={workingImg}/>
              </View>
              
          </View>
          <View className='p-[20px]'>
            <Text variant='Heading-H5' className='text-dark' >Discover our benefits</Text>
            <Spacing/>


            <View className='flex-row'>
            <CardImg 
            title='Long title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            image={familyImg}
            />
            <Spacing horizontal/>
                        <CardImg 
            title='Long title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            image={familyImg}
            />
            <Spacing horizontal/>
                        <CardImg 
            title='Long title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            image={familyImg}
            />
            <Spacing horizontal/>
                        <CardImg 
            title='Long title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            image={familyImg}
            />
            </View>


          </View>
      </View>
  );
}

