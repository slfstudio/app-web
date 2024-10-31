import StepProgress from '@/components/StepProgress';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import HeaderLeft from '@/components/navigation/HeaderLeft';
import { colors } from '@/config';

import QuoteCarScreen from './QuoteCar';
import InsureCarScreen from './InsureCar';
import { useNavigation } from 'expo-router';

export default function CarSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation<any>()
  const steps = [<QuoteCarScreen  onStepChange={()=>changeStep(1)} />, <InsureCarScreen onStepChange={()=>changeStep(1)} />];
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
      navigation.navigate("(tabs)");
    }
  }, [currentStep, navigation]);

  // Set the goBack function in the navigation header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft isMenu={false} iconColor={colors.white}  onPress={goBack} />
      ),
    });
  }, [navigation, goBack]);
  return <StepProgress steps={steps} currentStep={currentStep} onStepChange={changeStep} />
}