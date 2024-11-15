import React, { useState, useCallback, useLayoutEffect } from 'react';
import Background from '@/components/Background';
import StepProgress from '@/components/StepProgress';
import TravelAssistStepTwo from './TravelAssistStepTwo';
import TravelAssistStepThree from './TravelAssistStepThree';
import HeaderLeft from '@/components/navigation/HeaderLeft';
import { colors } from '@/config';
import TravelAssistStepOne from './TravelAssistStepOne';
import { View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '@/components/Spacing';
import Paper from '@/components/Paper';
import SquareImages from '@/components/SquareImages';
import img1 from '@/assets/images/travelAssist/window.png'
import img2 from   '@/assets/images/travelAssist/church.png'
import img3 from   '@/assets/images/travelAssist/plane.png'
import img4 from   '@/assets/images/travelAssist/beach.png'
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'expo-router';

export default function TravelSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const steps = [
     <TravelAssistStepOne onStepChange={() => changeStep(1)} />,
    <TravelAssistStepTwo onStepChange={() => changeStep(2)} />,
    <TravelAssistStepThree onStepChange={() => changeStep(0)} />,
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
      // navigation.navigate();
    }
  }, [currentStep, navigation]);

  // Set the goBack function in the navigation header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft isMenu={false} iconColor={colors.white} onPress={goBack} />,
    });
  }, [navigation, goBack]);

  return (
    <Background>
      <View className="flex-1 flex-row">
        <View className="flex-1 p-md ">
          <Text variant="Heading-H6" className="text-dark">
            {t('headers.travel_assist')}
          </Text>
          <Spacing />
          <Paper>
            <StepProgress steps={steps} currentStep={currentStep} />
          </Paper>
        </View>
        <View className="flex-1 hidden md:flex">
          <SquareImages image={img1} imageThree={img2} imageTwo={img3} imageFour={img4} />
        </View>
      </View>
    </Background>
  );
}
