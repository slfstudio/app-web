import Button from '@/components/Button';
import Spacing from '@/components/Spacing';
import { useTranslation } from 'react-i18next';
import { Platform, Pressable, View, Image } from 'react-native';
import Text from '@/components/Text';
import LoginForm from '@/components/Login/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '@/store/store';
import ErrorModal from '@/components/ErrorModal';
import { setCleanErrorUser } from '@/store/reducer/userReducer';
import Background from '@/components/Background';
import { useNavigation } from 'expo-router';
import Paper from '@/components/Paper';

import beachImg from '@/assets/images/home/beach.png';
import churchImg from '@/assets/images/home/church.png';
import workingImg from '@/assets/images/home/working.png';
import CircleImages from '@/components/CircleImages';

export default function LoginScreen() {
  const { loggedIn, fetching, error, profile, remember } = useSelector((state: RootState) => state.userReducer);
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleModal = () => {
    setIsVisibleModal(false);
    dispatch(setCleanErrorUser());
  };

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate('MainStack', { screen: 'MainHome' });
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    if (error?.length) {
      setIsVisibleModal(true);
    }
  }, [error]);

  return (
    <Background className="px-md pt-md">
      <View className="flex-row">
        <Paper >
          <View className="flex-1">
            <View className="items-center">
              <View
                className="border-black border w-40 h-40 rounded-full jutify-center items-center "
                style={{ overflow: 'hidden' }}
              >
                <Image
                  source={
                    remember ? { uri: profile?.detalles?.img_name } : require('@/assets/images/user/avatar_default.png')
                  }
                  className="w-[100%] h-[100%]"
                />
              </View>
            </View>
            <LoginForm />
            <Spacing size="S" />
            <View className="items-center justify-center ">
              <Text variant="Body-Small-Regular">{t('or')}</Text>
            </View>
            <Spacing size="S" />
            {/* <Button text={t('button.log_in_with_facebook')} variant="facebook" />
      <Spacing size="S" /> */}
            {Platform.OS === 'ios' && <Button text={t('button.log_in_with_google')} variant="google" />}
            <Spacing size="S" />
            <View className="flex-row justify-between">
              <Pressable onPress={() => navigate('Recovery')}>
                <Text variant="Body-Small-Regular" className="text-black">
                  {t('button.forgot_your_password')}
                </Text>
              </Pressable>
              <Spacing horizontal size='XXL'/>
              <Pressable onPress={() => navigate('Signup')}>
                <Text variant="Body-Small-Regular" className="text-black">
                  {t('button.sign_up_here')}
                </Text>
              </Pressable>
            </View>
          </View>
        </Paper>
        <View className="flex-1 ">
          <CircleImages image={beachImg} imagetwo={churchImg} imagethree={workingImg} />
        </View>
      </View>
      <ErrorModal
        isVisible={isVisibleModal}
        onClose={handleModal}
        title={t('warnings.unable_to_sign_in')}
        text={t('warnings.the_email_or_password_entered_is_incorrect')}
      />
    </Background>
  );
}
