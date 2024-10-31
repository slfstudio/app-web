import { colors, typography } from '@/config';
import HeaderLeft from './HeaderLeft';
import Header from '../Header';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import headerImg from '@/assets/images/header/header.png';
interface HeaderCustom {
  title?: string;
  primary?: boolean;
  noActions?: boolean;
  isMenu?: boolean;
  isHome?: boolean;
  isRounded?: boolean;
}

export function headerCustom({
  title,
  primary = false,
  noActions = false,
  isMenu = false,
  isHome,
  isRounded = true,
}: HeaderCustom) {
  return {
    headerBackground: () => {
      return isHome ? (
        <View style={[StyleSheet.absoluteFill]} className="bg-white" />
      ) : (
        <Image
          style={[StyleSheet.absoluteFill, { borderBottomRightRadius: isRounded ? 35 : 0 }]}
          source={headerImg}
          className="flex-1"
        />
      );
    },
    headerStyle: {
      backgroundColor: colors.white,
      shadowColor: 'transparent',
    },
    headerTitle: title,
    headerTitleStyle: { ...typography['Body-Large-Regular'], color: isHome ? colors.black : colors.white },
    headerLeft: () =>
      noActions ? null : <HeaderLeft isMenu={isMenu} iconColor={isHome ? colors.black : colors.white} />,
  };
}
