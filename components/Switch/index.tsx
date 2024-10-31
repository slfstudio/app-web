import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';

import hexToRgb from '@/utils/hextorgb';
import { colors } from '@/config';
import { CustomSwitchProps } from './types';
import Spacing from '../Spacing';
import Text from '@/components/Text';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Switch({
  buttonWidth,
  buttonPadding,
  buttonColor,
  buttonBorderWidth,
  buttonBorderColor,
  buttonText,
  buttonTextStyle,
  switchWidth,
  switchBackgroundColor,
  switchBorderWidth,
  switchBorderColor,
  switchLeftText,
  switchLeftTextStyle,
  switchRightText,
  switchRightTextStyle,
  onSwitchButtonText,
  onSwitchButtonTextStyle,
  onSwitchBackgroundColor,
  animationSpeed,
  startOnLeft,
  disabled,
  text,
  onPressDisabled,
  onPress,
  onChangeValue,
}: CustomSwitchProps) {
  //value
  const [toggleRight, setToggleRight] = useState(startOnLeft === true ? true : false);

  const colorAnim = useRef(new Animated.Value(0)).current;
  const colorAnimInterpolation =
    onSwitchBackgroundColor &&
    useRef(
      colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [
          switchBackgroundColor ? hexToRgb(switchBackgroundColor) : hexToRgb('#BBD8B3'),
          hexToRgb(onSwitchBackgroundColor),
        ],
      }),
    ).current;

  const layoutAnim = {
    Opacity: () =>
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          animationSpeed ? animationSpeed : defaultValues.animationSpeed,
          LayoutAnimation.Types.Spring,
          LayoutAnimation.Properties.opacity,
        ),
      ),
  };

  const changeToggle = () => {
    setToggleRight(!toggleRight);
    onChangeValue?.(!toggleRight);
  };

  const changeColor = () => {
    if (toggleRight) {
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: animationSpeed ? animationSpeed : defaultValues.animationSpeed,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: animationSpeed ? animationSpeed : defaultValues.animationSpeed,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    if (onSwitchBackgroundColor) {
      changeColor();
    }
  }, [toggleRight]);

  const defaultValues = {
    button: {
      size: {
        width: 20,
        height: 20,
      },
      padding: 0,
      color: {
        backgroundColor: '#FFFFFF',
      },
    },
    switch: {
      size: {
        width: 50,
      },
      color: {
        backgroundColor: colors.gray5,
      },
    },
    animationSpeed: 150,
  };

  const buttonStyle = {
    height: buttonWidth ? buttonWidth : !buttonWidth && switchWidth ? switchWidth / 2 : defaultValues.button.size.width,
    width: buttonWidth ? buttonWidth : !buttonWidth && switchWidth ? switchWidth / 2 : defaultValues.button.size.width,
    backgroundColor: buttonColor ? buttonColor : defaultValues.button.color.backgroundColor,
    borderWidth: buttonBorderWidth ? buttonBorderWidth : 0,
    borderColor: buttonBorderColor ? buttonBorderColor : null,
    borderRadius: buttonWidth
      ? buttonWidth / 2
      : !buttonWidth && switchWidth
        ? switchWidth
        : defaultValues.button.size.width / 2,
  };

  const toggleStyle = {
    flexDirection: switchLeftText || switchRightText ? 'row' : null,
    justifyContent: switchLeftText
      ? 'space-between'
      : switchRightText && !switchLeftText
        ? toggleRight
          ? 'flex-end'
          : 'space-between'
        : null,
    alignItems: !switchLeftText && !switchRightText ? (toggleRight ? 'flex-end' : 'flex-start') : 'center',
    width:
      buttonWidth && !switchWidth
        ? buttonWidth * 2
        : buttonWidth >= switchWidth * 0.75
          ? buttonWidth * 1.1
          : switchWidth
            ? switchWidth
            : defaultValues.switch.size.width,
    backgroundColor: onSwitchBackgroundColor
      ? colorAnimInterpolation
      : switchBackgroundColor && !onSwitchBackgroundColor
        ? switchBackgroundColor
        : defaultValues.switch.color.backgroundColor,
    borderWidth: switchBorderWidth ? switchBorderWidth : 0,
    borderColor: switchBorderColor ? switchBorderColor : null,
    padding: buttonPadding ? buttonPadding : defaultValues.button.padding,
    borderRadius:
      buttonWidth && buttonPadding
        ? (buttonWidth + buttonPadding / 2) * 2
        : buttonWidth && !buttonPadding
          ? (buttonWidth + defaultValues.button.padding / 2) * 2
          : !buttonWidth && buttonPadding
            ? (defaultValues.button.size.width + buttonPadding / 2) * 2
            : switchWidth && !buttonWidth
              ? switchWidth * 2
              : (defaultValues.button.size.width + defaultValues.button.padding / 2) * 2,
  };

  return (
    <View className="flex-row items-center">
      <TouchableWithoutFeedback
        onPress={() => {
          !disabled ? (changeToggle(), layoutAnim.Opacity()) : null;
        }}
      >
        <Animated.View style={[toggleStyle]}>
          {switchLeftText && toggleRight && (
            <View style={{ width: toggleStyle.width - buttonStyle.width - toggleStyle.padding * 2 }}>
              <Text className="text-center" style={[switchLeftTextStyle]}>
                {switchLeftText}
              </Text>
            </View>
          )}
          <View className="justify-center items-center" style={[buttonStyle]}>
            {buttonText && onSwitchButtonText ? (
              toggleRight ? (
                <Text style={onSwitchButtonTextStyle}>{onSwitchButtonText}</Text>
              ) : (
                <Text style={buttonTextStyle}>{buttonText}</Text>
              )
            ) : onSwitchButtonText && !buttonText && toggleRight ? (
              <Text style={onSwitchButtonTextStyle}>{onSwitchButtonText}</Text>
            ) : buttonText ? (
              <Text style={buttonTextStyle}>{buttonText}</Text>
            ) : null}
          </View>
          {switchRightText && !toggleRight && (
            <View style={{ width: toggleStyle.width - buttonStyle.width - toggleStyle.padding * 2 }}>
              <Text className="text-center" style={[switchRightTextStyle]}>
                {switchRightText}
              </Text>
            </View>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
      <Spacing size="M" horizontal />
      <TouchableOpacity onPress={onPress} disabled={onPressDisabled}>
        <Text variant="Body-Extra-Small-Medium" className="text-black">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
