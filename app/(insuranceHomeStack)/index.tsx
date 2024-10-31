import Background from '@/components/Background';
import StepProgress from '@/components/StepProgress';
import MajorHealthStepOne from './MajorHealthStepOne';
import MajorHealthStepTwo from './MajorHealthStepTwo';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import HeaderLeft from '@/components/navigation/HeaderLeft';
import { colors } from '@/config';
import { useDispatch } from 'react-redux';
import { resetMajorHealthState } from '@/store/reducer/majorHealthReducer';
import { View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '@/components/Spacing';
import Paper from '@/components/Paper';
import SquareImages from '@/components/SquareImages';
import img1 from '@/assets/images/majorHealth/handshake.png'
import img2 from   '@/assets/images/majorHealth/doctors.png'
import img3 from   '@/assets/images/majorHealth/dentist.png'
import img4 from   '@/assets/images/majorHealth/medical.png'
import { useNavigation } from 'expo-router';
import { useTranslation } from 'react-i18next';
import InsureHomeScreen from './InsureHomeScreen';
import HomeInfoScreen from './HomeInfoScreen';

export default function InsuranceHomeSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const {t} = useTranslation()
  const navigation = useNavigation<any>();
  const steps = [<InsureHomeScreen onStepChange={() => changeStep(1)} />, <HomeInfoScreen />];
  const dispatch = useDispatch();
  const changeStep = (newStep: number) => {
    if (newStep >= 0 && newStep < steps.length) {
      setCurrentStep(newStep);
    }
  };
  const goBack = useCallback(() => {
    if (currentStep > 0) {
      dispatch(resetMajorHealthState());
      changeStep(currentStep - 1);
    } else {
      navigation.goBack();
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
            {t('headers.quote_your_homes_insurance')}
          </Text>
          <Spacing />
          <Paper>
            <StepProgress steps={steps} currentStep={currentStep} onStepChange={changeStep} />;
          </Paper>
        </View>
        <View className="flex-1 hidden md:flex">
          <SquareImages image={img1} imageThree={img2} imageTwo={img3} imageFour={img4} />
        </View>
      </View>
    </Background>
  );
}
