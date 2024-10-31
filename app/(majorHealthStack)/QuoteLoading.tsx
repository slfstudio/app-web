import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ErrorModal from '@/components/ErrorModal';
import { RootState } from '@/store/store';
import { wait } from '@/utils/generalFuncions';

const LoadingFetch: React.FC = () => {
  const { t } = useTranslation();
  const { fetching, pdfUri } = useSelector((state: RootState) => state.majorHealthReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    if(!fetching && pdfUri){
      wait(500).then(()=>{
        navigation.navigate('QuoteMajorInfoPdf',{urlPdf:pdfUri})
      })
    }else if(!fetching && !pdfUri){
       setError(true)
    }
  }, [pdfUri, fetching]);

  const handleClose = () => {
    setError(false);
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
