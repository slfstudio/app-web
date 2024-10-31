
import Text from '@/components/Text';
import { Image, View } from 'react-native';
import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';

export default function HomeScreen() {
  return (
    <View className='flex-1'>
      <Text variant='Body-Small-Medium' className='text-dark'>holaaa aqui va la nav barr</Text>
      <View className='flex-1'>
          <View className='flex-row'>
              <View>
                <Text>gud mornin</Text>
              </View>
              <View className='flex-1'>
                <View className='flex-1'>
                <Image source={beachImg} className=' rounded-[100%] absolute ' style={{width:200, height:200, right:580, top:100}}/>
                </View>
                <View><Image source={churchImg} className=' rounded-[100%] absolute ' style={{width:200, height:200, right:700, top:250}}/></View>
                <View>
                <Image source={workingImg} className=' rounded-full absolute ' style={{width:300, height:400, right:220, top:120}}/>
                </View>
                
              </View>
          </View>
      </View>
    </View>
  );
}

