import StepProgress from '@/components/StepProgress';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import HeaderLeft from '@/components/navigation/HeaderLeft';
import { colors } from '@/config';

import QuoteCarScreen from './QuoteCar';
import InsureCarScreen from './InsureCar';
import { useNavigation } from 'expo-router';
import Paper from '@/components/Paper';
import { StyleSheet, View } from 'react-native';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import Spacing from '@/components/Spacing';
import { Image } from 'expo-image';

/**images */
import street from '@/assets/images/quoteCar/jamie-street.png'
import carWhite from '@/assets/images/quoteCar/carwhite.png'
import carRed from '@/assets/images/quoteCar/carred.png'
import carBlue from '@/assets/images/quoteCar/carblue.png'
export default function CarSteps() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation<any>();
  const steps = [
    <QuoteCarScreen onStepChange={() => changeStep(1)} />,
    <InsureCarScreen onStepChange={() => changeStep(1)} />,
  ];
  const changeStep = (newStep: number) => {
    if (newStep >= 0 && newStep < steps.length) {
      setCurrentStep(newStep);
    }
  };
  const goBack = useCallback(() => {
    if (currentStep > 0) {
      changeStep(currentStep - 1);
    } else {
      // Reemplazar con la ruta de los quoutes
      navigation.navigate('(tabs)');
    }
  }, [currentStep, navigation]);

  const imgArr = [carWhite]
  // Set the goBack function in the navigation header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft isMenu={false} iconColor={colors.white} onPress={goBack} />,
    });
  }, [navigation, goBack]);
  return (
    <View className='flex-1 flex-row'>
      <View className="p-md flex-1 ">
        <Text variant="Heading-H6" className="text-dark">
          {t('headers.quote_your_car_insurance')}
        </Text>
        <Spacing />
        <Paper>
          <StepProgress steps={steps} currentStep={currentStep} onStepChange={changeStep} />
        </Paper>
      </View>
      <View className='flex-1 p-10'>
      {imgArr.map(item=> 
      <Image
            className="w-[10px] h-[10px] rounded-xl"
            source={item}
            contentFit="cover"
            style={[StyleSheet.absoluteFill, { borderBottomRightRadius:  35  }]}

          />)}
        
      </View>
    </View>
  );
}
