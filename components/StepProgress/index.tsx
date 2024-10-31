import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StepProgressProps } from './types';
import { Icon } from '../Icon';
import { colors } from '@/config';
import Background from '../Background';

export default function StepProgress({ steps, currentStep }: StepProgressProps) {
  const renderStep = (step: number) => {
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;

    return (
      <View className={`mx-[60px]`} key={step}>
        <TouchableOpacity disabled onPress={() => null} className="z-[1]">
          <View
            className={`w-[28px] h-[28px] rounded-full border-2 justify-center items-center ${
              isActive ? 'border-dark3' : isCompleted ? 'bg-dark3 border-dark3' : 'bg-white border-dark3'
            }`}
          >
            {isCompleted && <Icon name="Checkmark" fill={colors.white} size={18} />}
            {isActive && <View className="w-[18px] h-[18px] bg-dark3 rounded-full" />}
            {!isActive && !isCompleted && <View className="w-[18px] h-[18px] bg-white rounded-full" />}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View className="p-2">
        <View className="flex-row px-md relative h-[28] items-center justify-center ">
          <View
            className="h-[2px] bg-dark3 absolute left-0 right-0 z-0"
            style={{ top: '50%', transform: [{ translateY: -1 }] }}
          />
          {steps.map((_, index) => renderStep(index))}
        </View>
      </View>
      <Background className="px-md ">{steps[currentStep]}</Background>
    </>
  );
}
