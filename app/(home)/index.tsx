
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
export default function HomeScreen() {
  const {t} = useTranslation()
  const {navigate} = useNavigation()
  return (
    <View className='flex-1'>
      <Text variant='Body-Small-Medium' className='text-dark'>holaaa aqui va la nav barr</Text>
      <View className='flex-1'>
          <View className='flex-row h-[50%]'>
              <View className='flex-1 items-center  justify-center p-[20px]'>
                <Text variant='Heading-H6' className='text-dark'>{t('regards.good_morning')}</Text>
                <Spacing/>
                <Text>{t('text.secure_your_peace_of_mind_with_a_quick')}</Text>
              </View>
              <View className='flex-1 '>
                <View className='flex-1'>
                <Image source={beachImg} className=' rounded-[100%] absolute ' style={{width:200, height:200, right:480, top:55}}/>
                </View>
                <View><Image source={churchImg} className=' rounded-[100%] absolute ' style={{width:200, height:200, right:600, top:-195}}/></View>
                <View>
                <Image source={workingImg} className=' rounded-full absolute ' style={{width:300, height:400, right:120, top:-350}}/>
                </View>
              </View>
              <Button text='Hola' onPress={()=>navigate('(insuranceCarStack)')}/>
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
    </View>
  );
}

