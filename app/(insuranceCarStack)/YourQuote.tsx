import { useTranslation } from 'react-i18next';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';
import Text from '@/components/Text';
import Spacing from '@/components/Spacing';
import { Image, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import PhotoModal from '@/components/PhotoModal';
import { fetchQuoteContact, fetchQuoteCar, fetchQuoteSend, setRestErrorCar } from '@/store/reducer/catalogsCarReducer';
import Loading from '@/components/Loading';
import ErrorModal from '@/components/ErrorModal';

export default function YourQuoteScreen() {
  const preventReload = useRef(false);
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const dispatch = useDispatch();
  const { assurance, error, quoteCarSend, ...rest } = useSelector((state) => state.catalogsCarReducer);
  const [assuranceSelected, setAssuranceSelected] = useState<object>(assurance[0]);
  const [isModalRequest, setIsModalRequest] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messageModal, setMessaModal] = useState({ title: '', text: '', onClose: () => null });
  const hanldeCloseSubmit = () => {
    setIsModal(false);
    navigate('HomeStack', { screen: 'Home' });
  };
  const handleModal = (type: number) => {
    if (1) {
      setIsModalRequest(true);
      dispatch(fetchQuoteContact({}));
    }
  };
  const handleCloseContact = () => {
    setIsModalRequest(false);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    dispatch(fetchQuoteSend({ quoteId: assuranceSelected.Id, insuranceId: assuranceSelected.aseguradora }));
    //() => navigate('QuoteCarScreen' )}
  };
  const resetValues = (fromModal: boolean = false) => {
    preventReload.current = false;
    dispatch(setRestErrorCar());
    if (fromModal) navigate('QuoteCarScreen');
  };
  useEffect(() => {
    if (!preventReload.current) {
      dispatch(fetchQuoteCar({}));
      preventReload.current = true;
    }
    return () => {};
  }, []);
  useFocusEffect(
    useCallback(() => {
      return () => {
        resetValues();
      };
    }, []),
  );

  useEffect(() => {
    if (assurance.length && error === null) {
      setAssuranceSelected(assurance[0]);
      setIsLoading(false);
      // setMessaModal({
      //   text: t('text.we_have_received_your_request_one_of'),
      //   title: t('text.your_quote_is_ready'),
      //   onClose: () => hanldeCloseSubmit(),
      // });
    } else if (!assurance.length && error !== null) {
      setIsModal(true);
      setMessaModal({ text: t('an_error_has_occurred'), title: '', onClose: () => resetValues(true) });
    }
  }, [assurance.length, error]);
  useEffect(() => {
    if (quoteCarSend != null && error === null) {
      setIsModalRequest(true);
    }
  }, [quoteCarSend]);
  if (isLoading) {
    return (
      <>
        <Loading />
        <ErrorModal isVisible={isModal} {...messageModal} />
      </>
    );
  }
  return (
    <View className="flex-1 px-md py-3xl justify-between ">
      <View>
        <View className="items-center">
          <Image source={{ uri: assuranceSelected.aseguradora_logo }} className="w-[100] h-[100]" />
          <Spacing />
          {assuranceSelected.Disponible === 'Disponible' && (
            <Text variant="Heading-H6">${assuranceSelected.precios.precioTotal}</Text>
          )}
          <Text variant="Body-Medium-Medium" className="text-black underline">
            {t('button.see_quote_details')}
          </Text>
        </View>
        <Spacing size="M" />
        <Button variant="black" text={t('button.accept_quote')} onPress={handleSubmit} />
        <Spacing />
        <Text variant="Body-Medium-Regular">{t('text.we_have_different_quote')}</Text>
        <Spacing />
        <View className="flex-wrap flex-row justify-between gap-3 ">
          {assurance
            .filter((item) => item.aseguradora !== assuranceSelected.aseguradora)
            .map((item, index) => (
              <TouchableOpacity
                onPress={() => setAssuranceSelected(item)}
                className="h-[58] w-[78] bg-white "
                key={index}
              >
                <Image source={{ uri: item.aseguradora_logo }} className="w-[100%] h-[100%]" resizeMode="contain" />
              </TouchableOpacity>
            ))}
        </View>
      </View>
      <View>
        <Button variant="border" text={t('button.contact_us_for_more_information')} onPress={() => handleModal(1)} />
        <Spacing />
        <Button
          variant="border"
          text={t('button.go_back_to_quotes')}
          onPress={() => navigate('HomeStack', { screen: 'Home' })}
        />
      </View>
      {/* <ModalSelect isVisible={false}/> */}
      <ErrorModal
        isVisible={isModal}
        text={t('text.we_have_received_your_request_one_of')}
        title={t('text.your_quote_is_ready')}
        onClose={hanldeCloseSubmit}
      />
      <PhotoModal
        onClose={handleCloseContact}
        isVisible={isModalRequest}
        variantImage="circle"
        text={t('text.we_have_received_your_request_one_of')}
      />
    </View>
  );
}
