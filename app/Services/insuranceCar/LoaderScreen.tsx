import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import Loading from '@/components/Loading';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ErrorModal from '@/components/ErrorModal';
import { fetchQuoteCar } from '@/store/reducer/catalogsCarReducer';
import { useNavigation } from 'expo-router';

const LoaderScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handleClose = () => {
    setError(false);
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Probar mas tarde la validacion
        const data = await dispatch(fetchQuoteCar({}));
        if (data.error && Object.keys(data.error).length && data.error.message === 'Rejected') {
          setError(true);
        } else {
          navigation.navigate('YourQuoteScreen');
        }
      } catch (error) {
        console.error('Error fetching quote travel data:', error);
        // navigation.goBack();
      }
    };

    fetchData();
  }, [dispatch, navigation]);

  return (
    <View className="flex-1 h-full w-full items-center justify-center">
      <ErrorModal isVisible={error} text={t('warnings.somethings_missing')} onClose={handleClose} />
      <Loading />
    </View>
  );
};

export default LoaderScreen;
