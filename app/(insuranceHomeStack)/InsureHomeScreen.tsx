import Background from '@/components/Background';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ErrorModal from '@/components/ErrorModal';
import { fetchQuoteHomeSend, setQuoteHomeUser, setResetError } from '@/store/reducer/catalogsGenericReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, View } from 'react-native';
import { Formik } from 'formik';
import { homeFormValidationSchema } from '@/utils/validationsSchema';
import Spacing from '@/components/Spacing';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Dropdown from '@/components/Dropdown';
import { Icon } from '@/components/Icon';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import ModalListCP from '@/components/ModalZp';
import Loading from '@/components/Loading';
import { RootState } from '@/store/store';
import { useNavigation } from 'expo-router';
import Text from '@/components/Text';

export default function InsureHomeScreen({ onStepChange }) {
  const { loggedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { quoteHome, error } = useSelector((state: RootState) => state.catalogsGenericReducer);
  const [isVisible, setIsVisible] = useState(false);
  const { navigate } = useNavigation<any>();
  const [dataDropdown, setDataDropdown] = useState({
    housingStatus: [
      { label: t('label.tenant'), value: 'tenant' },
      { label: t('label.owner'), value: 'Owner' },
    ],
    content: [
      { label: '$50,000', value: '$50,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$300,000', value: '$300,000' },
      { label: '$400,000', value: '$400,000' },
      { label: '$500,000', value: '$500,000' },
      { label: '$600,000', value: '$600,000' },
      { label: '$700,000', value: '$700,000' },
      { label: '$800,000', value: '$800,000' },
      { label: '$900,000', value: '$900,000' },
      { label: '$1,000,000', value: '$1,000,000' },
      { label: '$1,500,000', value: '$1,500,000' },
      { label: '$2,000,000', value: '$2,000,000' },
    ],
    liability: [
      { label: '$3,000,000', value: '$3,000,000' },
      { label: '$5,000,000', value: '$5,000,000' },
      { label: '$8,000,000', value: '$8,000,000' },
      { label: '$10,000,000', value: '$10,000,000' },
    ],
    crystals: [
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$75,000', value: '$75,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$300,000', value: '$300,000' },
      { label: '$400,000', value: '$400,000' },
      { label: '$500,000', value: '$500,000' },
    ],
    jewerly: [
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$75,000', value: '$75,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$300,000', value: '$300,000' },
      { label: '$400,000', value: '$400,000' },
      { label: '$500,000', value: '$500,000' },
    ],
    electronicEquipment: [
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$75,000', value: '$75,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$300,000', value: '$300,000' },
      { label: '$400,000', value: '$400,000' },
      { label: '$500,000', value: '$500,000' },
    ],
    robbery: [
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$75,000', value: '$75,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$300,000', value: '$300,000' },
      { label: '$400,000', value: '$400,000' },
      { label: '$500,000', value: '$500,000' },
    ],
  });
  const [zpArr, setZpArr] = useState<any>();
  const [loadingZp, setLoadingZP] = useState(false);
  const [visibleModalCP, setVisibleModalCP] = useState(false);
  //info
  const [modalMessage, setModalMessage] = useState({ text: '', title: '', onClose: () => null });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const handleSubmit = (values) => {
    dispatch(setQuoteHomeUser(values));
    onStepChange();
    //setIsVisibleModal(true)
    //setModalMessage({title:t('text.thank_you_for_your_trust'), text:t('text.we_will_contact_you_shortly_to_send')})
  };
  const handleModal = () => {
    setIsVisibleModal(false);
    navigate('QuoteInsurance');
  };

  const handleDismissError = () => {
    setIsVisibleModal(false);
    dispatch(setResetError());
  };

  // useEffect(()=>{
  //   if(quoteHome && error === null){
  //     setIsVisibleModal(true)
  //     setModalMessage({title:t('text.thank_you_for_your_trust'), text:t('text.we_will_contact_you_shortly_to_send'),onClose:()=>handleModal()})
  //   } else if(error){
  //     setIsVisibleModal(true)
  //     setModalMessage({title:'', text:t('warnings.somethings_missing'), onClose:()=>handleDismissError() })
  //   }
  // },[quoteHome,error])

  const handleModalInfo = () => {
    setIsVisibleModal(true);
    setModalMessage({ text: t('text.set_of_heritage_items'), title: '' });
  };

  return (
    <Background className="px-md pt-md">
      <Text>{t('label.step_1')}</Text>
      <Text variant="Body-Medium-Bold" className="text-dark">
        {t('label.general_information')}
      </Text>
      <Spacing />
      <View className="flex-1 pb-2xl justify-between">
        {/* form */}
        <Formik
          validationSchema={homeFormValidationSchema}
          initialValues={{}}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue, setValues }) => {
            console.log('error===>', errors);
            return (
              <>
                <View>
                  <View className="flex-row flex-wrap gap-4">
                    <View className="flex-1 min-w-[280px]">
                      <Input
                        variant="zipCode"
                        label={t('label.zip_code')}
                        value={values.postalCode}
                        onChangeText={handleChange?.('postalCode')}
                        error={errors.postalCode}
                        keyboardType="numeric"
                        returnKeyType="done"
                        setZpArr={setZpArr}
                        setLoadingZP={setLoadingZP}
                        setVisibleModalCP={setVisibleModalCP}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Input
                        label={t('label.state_province')}
                        value={values.state_providence}
                        onChangeText={handleChange?.('state_providence')}
                        error={errors.state_providence}
                        returnKeyType="done"
                        editable={false}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Input
                        editable={false}
                        label={t('label.adress_line_1')}
                        value={values.suburb}
                        onChangeText={handleChange?.('suburb')}
                        error={errors.suburb}
                        returnKeyType="done"
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Input
                        label={t('label.city')}
                        value={values.city}
                        onChangeText={handleChange?.('city')}
                        error={errors.city}
                        returnKeyType="done"
                        editable={false}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        placeholder={t('placeholders.select')}
                        label={t('label.housing_status')}
                        data={dataDropdown['housingStatus']}
                        error={errors.housingStatus}
                        onSelect={(value) => setFieldValue('housingStatus', value.value)}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        placeholder={t('placeholders.select')}
                        label={t('label.content')}
                        data={dataDropdown['content']}
                        error={errors.content}
                        onSelect={(value) => setFieldValue('content', value.value)}
                        variant="info"
                        onPressInfo={handleModalInfo}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        placeholder={t('placeholders.select')}
                        label={t('label.liability')}
                        data={dataDropdown['liability']}
                        error={errors.liability}
                        onSelect={(value) => setFieldValue('liability', value.value)}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        optionalText={t('optional')}
                        placeholder={t('placeholders.select')}
                        label={t('label.crystals')}
                        data={dataDropdown['crystals']}
                        error={errors.crystals}
                        onSelect={(value) => setFieldValue('crystals', value.value)}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        optionalText={t('optional')}
                        placeholder={t('placeholders.select')}
                        label={t('label.jewerly')}
                        data={dataDropdown['jewerly']}
                        error={errors.jewerly}
                        onSelect={(value) => setFieldValue('jewerly', value.value)}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        optionalText={t('optional')}
                        placeholder={t('placeholders.select')}
                        label={t('label.electronic_equipment')}
                        data={dataDropdown['electronicEquipment']}
                        error={errors.electronicEquipment}
                        onSelect={(value) => setFieldValue('electronicEquipment', value.value)}
                      />
                    </View>
                    <View className="flex-1 min-w-[280px]">
                      <Dropdown
                        optionalText={t('optional')}
                        placeholder={t('placeholders.select')}
                        label={t('label.robbery')}
                        data={dataDropdown['robbery']}
                        error={errors.robbery}
                        onSelect={(value) => setFieldValue('robbery', value.value)}
                      />
                    </View>
                  </View>

                  <Spacing size="M" />
                  <RadioButtonsActions
                    optionalText={t('optional')}
                    options={[
                      { id: 1, text: 'yes', value: 1 },
                      { id: 2, text: 'no', value: 2 },
                    ]}
                    selectOption={(value: Object) => setFieldValue('include_debris_removal', value)}
                    value={values.include_debris_removal}
                    error={errors.include_debris_removal}
                    label={'label.include_debris_removal'}
                  />
                </View>
                <Spacing size="L" />
                <View>
                  <Spacing />
                  <Button variant="border" text={t('button.continue')} onPress={() => handleSubmit()} />
                </View>
                <ModalListCP
                  loading={loadingZp}
                  visible={visibleModalCP}
                  setVisible={setVisibleModalCP}
                  options={zpArr}
                  onNext={(value) =>
                    setValues({
                      ...values,
                      city: value.ciudad,
                      state_providence: value.estado,
                      suburb: value.asentamiento,
                    })
                  }
                />
              </>
            );
          }}
        </Formik>
      </View>

      {/* <InsureForms variant="home_form" onPress={handleSubmit} dataDropdown={dataDropdown} /> */}
      <ErrorModal
        isVisible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
        textButtonOk={t('button.ok')}
        icon="InfoCircle"
        iconSize={40}
        text={modalMessage.text}
        title={modalMessage.title}
      />
    </Background>
  );
}
