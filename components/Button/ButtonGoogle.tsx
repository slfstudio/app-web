import { ButtonCustomProps } from './types';
import ButtonBase from './ButtonBase';
import { useTranslation } from 'react-i18next';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useDispatch } from 'react-redux';
import { fetchLoginGoogle } from '@/store/reducer/userReducer';
WebBrowser.maybeCompleteAuthSession();
function ButtonGoogle({}: ButtonCustomProps) {
  const config = {
    androidClientId: '726219059386-r2qg6suh374lp1fcf75qg4n9t04ah97e.apps.googleusercontent.com',
    clientId: '726219059386-nnmsi4cc59a9rheda2f8uijgpf0s7gmk.apps.googleusercontent.com',
    iosClientId: '726219059386-vtnrd9vi9ogi8fs3fefcp2rtuh9aotf4.apps.googleusercontent.com',
  };

  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const [request, response, promtAsync] = Google.useAuthRequest(config);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accessToken, setAccessTocken] = useState<string | undefined>('');
  const dispatch = useDispatch();
  const handleToken = () => {
    if (response?.type === 'success') {
      const { authentication } = response;
      const token = authentication?.accessToken;
      console.log('acces token', token);
      setAccessTocken(token);
      getUserData(token);
    }
  };

  useEffect(() => {
    handleToken();
  }, [response]);

  const getUserData = async (token?: string) => {
    if (token === undefined) return;

    let userInfo = await fetch(`https://www.googleapis.com/userinfo/v2/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    let UserDataGoogle;
    userInfo.json().then((data) => {
      UserDataGoogle = data;
      console.log(data);
      logInGoogle(UserDataGoogle);
    });
  };

  const logInGoogle = (resData: any) => {
    dispatch(fetchLoginGoogle(values));
  };

  return <ButtonBase text={t('button.log_in_with_google')} variant="google" onPress={() => promtAsync()} />;
}

export default ButtonGoogle;
