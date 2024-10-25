import { Dimensions } from 'react-native';

const BASE_SCREEN_WIDTH = 320;

export function scaleWidth(widthToScale: number) {
  return (Dimensions.get('screen').width / BASE_SCREEN_WIDTH) * widthToScale;
}

export function scaleHeight(heightToScale: number) {
  return (Dimensions.get('screen').width / BASE_SCREEN_WIDTH) * heightToScale;
}

export function scaleY(distanceToScale: number) {
  return (Dimensions.get('screen').width / BASE_SCREEN_WIDTH) * distanceToScale;
}

export function scaleX(distanceToScale: number) {
  return (Dimensions.get('screen').width / BASE_SCREEN_WIDTH) * distanceToScale;
}

export function scaleFont(fontToScale: number) {
  return (Dimensions.get('screen').width / BASE_SCREEN_WIDTH) * fontToScale * 0.8;
}
