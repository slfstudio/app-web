import { View } from 'react-native';

import Spacing from '../Spacing';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { AboutSectionProps } from './types';
import { Icon } from '../Icon';

export default function AboutSection({
  variant,
  iconName,
  mainTitle,
  title,
  titleTwo,
  subtitle,
  subtitletwo,
  bullet,
  bulletTwo,
  bulletThree,
  bulletFour,
}: AboutSectionProps) {
  const { t } = useTranslation();
  return (
    <View className="w-[400px] p-[16px] overflow-hidden">
      <View>
        <View className="flex-row items-center">
          <Icon name={iconName} size={20} />
          <Spacing size="S" horizontal />
          <Text variant="Body-Large-SemiBold" className="text-dark">
            {mainTitle}
          </Text>
        </View>
        <Spacing />
        <Text variant="Body-Medium-Medium" className="text-pinkLight">
         {title}
        </Text>
        <Spacing />
        <Text variant="Body-Medium-SemiBold">{subtitle}</Text>
        <Spacing />
        <View>
            <Text variant='Body-Medium-Regular'className='text-dark' >{bullet} </Text>
            <Spacing/>
            {variant == 'car'&& <>
                <Text variant='Body-Medium-Medium' className='text-pinkLight'>{titleTwo} </Text>
                <Spacing/>
                <Text variant='Body-Medium-SemiBold' className='text-dark'>{subtitletwo} </Text>
                <Spacing/>
                <Text variant='Body-Medium-Regular'className='text-dark' >{bulletTwo} </Text>
            </> }
        </View>
        {variant == 'health'&& 
        <>
        
                <View className='border border-pinkLight rounded-[16px] items-center w-[80%] p-[16px]'>
            <Text variant='Body-Medium-Regular'>Rated B++ by AM BEST.</Text>
        </View>
        </>
        }

        

        

      </View>
    </View>
  );
}
