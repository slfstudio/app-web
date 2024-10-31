import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { fetchQuoteTravelActions } from '@/store/reducer/travelAssistReducer';
import Loading from '@/components/Loading';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ErrorModal from '@/components/ErrorModal';
import { messager } from '@/store/reducer/messagerReducer';

const LoadingFetch: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Probar mas tarde la validacion
        const data = await dispatch(fetchQuoteTravelActions());
        if (data.error && Object.keys(data.error).length && data.error.message === 'Rejected') {
          setError(true);
        } else {
          navigation.navigate('QuoteInfoTravel');
        }
      } catch (error) {
        console.error('Error fetching quote travel data:', error);
        navigation.goBack();
      }
    };

    fetchData();
  }, [dispatch, navigation]);

  const handleClose = () => {
    setError(true);
    navigation.goBack();
  };
  return (
    <View className="flex-1 h-full w-full items-center justify-center">
      <ErrorModal isVisible={error} text={t('warnings.somethings_missing')} onClose={handleClose} />
      <Loading />
    </View>
  );
};

export default LoadingFetch;
