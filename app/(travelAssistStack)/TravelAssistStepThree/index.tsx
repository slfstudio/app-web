import Background from '@/components/Background';
import Dropdown from '@/components/Dropdown';
import ErrorModal from '@/components/ErrorModal';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { travelAssistStepThreeValidationSchema } from '@/utils/validationsSchema';
import { Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { setTravelInfo } from '@/store/reducer/travelAssistReducer';
import { useDispatch } from 'react-redux';

export default function TravelAssistStepThree() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation<any>();
  const [structureModal, setStructureModal] = useState({ text: '' });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const handleModalInfo = (msg) => {
    setIsVisibleModal(true);
    setStructureModal(msg);
  };
  const infoMsg = {
    text: t('text.accidental_death_and_dismemberment_is_a'),
    icon: 'InfoCircle',
    textButtonOk: t('button.ok'),
    iconSize: 40,
  };

  const [dataDropdown, setDataDropdown] = useState({
    maximumCoverage: [
      { label: '$10,000', value: '$10,000' },
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$100,000', value: '$100,000' },
      { label: '$150,000', value: '$150,000' },
      { label: '$200,000', value: '$200,000' },
      { label: '$250,000', value: '$250,000' },
      { label: '$500,000', value: '$500,000' },
    ],
    deductible: [
      { label: '$0', value: '$' },
      { label: '$50', value: '$50' },
      { label: '$100', value: '$100' },
      { label: '$150', value: '$150' },
    ],
    tripCancellation: [
      { label: '$0', value: '$0' },
      { label: '$2,500', value: '$2,500' },
      { label: '$5,000', value: '$5,000' },
      { label: '$8,000', value: '$8,000' },
      { label: '$10,000', value: '$10,000' },
    ],
    petAssistance: [
      { label: t('no'), value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
    accidentalDeath: [
      { label: '$15,000', value: '$15,000' },
      { label: '$25,000', value: '$25,000' },
      { label: '$50,000', value: '$50,000' },
      { label: '$65,000', value: '$65,000' },
      { label: '$75,000', value: '$75,000' },
      { label: '$100,000', value: '$100,000' },
    ],
  });

  return (
    <View className="flex-1 pb-2xl justify-between px-md pt-2">
      <Text>{t('label.step_3')}</Text>
      <Text variant="Body-Medium-Bold" className="text-dark">
        {t('label.general_information')}
      </Text>
      <Spacing />
      <Formik
        validationSchema={travelAssistStepThreeValidationSchema}
        initialValues={{}}
        onSubmit={(values) => {
          dispatch(setTravelInfo(values));
          //navigate('QuoteInfoTravel')
          navigate('LoadingScreen');
        }}
      >
        {({ handleSubmit, values, errors, setFieldValue }) => {
          return (
            <>
              <Dropdown
                label={t('label.maximum_coverage')}
                placeholder={t('placeholders.select')}
                data={dataDropdown['maximumCoverage']}
                error={errors?.maximum_coverage}
                onSelect={(value) => setFieldValue('maximum_coverage', value.value)}
              />
              <Spacing />
              <Dropdown
                label={t('label.deductible')}
                placeholder={t('placeholders.select')}
                data={dataDropdown['deductible']}
                error={errors?.deductible}
                onSelect={(value) => setFieldValue('deductible', value.value)}
              />
              <Spacing />
              <Dropdown
                label={t('label.trip_cancellation_due_to_catastrophic_event')}
                placeholder={t('placeholders.select')}
                data={dataDropdown['tripCancellation']}
                error={errors?.trip_cancellation}
                onSelect={(value) => setFieldValue('trip_cancellation', value.value)}
              />
              <Spacing />
              <RadioButtonsActions
                options={[
                  { id: 1, text: t('yes'), value: 1 },
                  { id: 2, text: t('no'), value: 2 },
                ]}
                selectOption={(value: Object) => setFieldValue('play_sports', value)}
                value={values.play_sports}
                error={errors.play_sports}
                label={t('label.do_you_play_sports')}
              />
              <Spacing />
              <RadioButtonsActions
                options={[
                  { id: 1, text: t('yes'), value: 1 },
                  { id: 2, text: t('no'), value: 2 },
                ]}
                selectOption={(value: Object) => setFieldValue('medical_conditions', value)}
                value={values.medical_conditions}
                error={errors.medical_conditions}
                label={t('label.do_you_have_any_preexisting_medical_conditions')}
              />
              <Spacing />
              <Dropdown
                label={t('label.pet_assistance')}
                placeholder={t('placeholders.select')}
                data={dataDropdown['petAssistance']}
                error={errors?.pet_assistance}
                onSelect={(value) => setFieldValue('pet_assistance', value.value)}
              />
              <Spacing />
              <RadioButtonsActions
                options={[
                  { id: 1, text: t('yes'), value: 1 },
                  { id: 2, text: t('no'), value: 2 },
                ]}
                selectOption={(value: Object) => setFieldValue('vip_legal_assistance', value)}
                value={values.vip_legal_assistance}
                error={errors.vip_legal_assistance}
                label={t('label.vip_legal_assistance')}
              />
              <Spacing />
              <Dropdown
                variant="info"
                onPressInfo={() => handleModalInfo(infoMsg)}
                label={t('label.accidental_death_and_dismemberment')}
                data={dataDropdown['accidentalDeath']}
                placeholder={t('placeholders.select')}
                onSelect={(value) => setFieldValue('accidental_death', value.value)}
                error={errors?.accidental_death}
              />
              <Spacing />
              <View>
                <Button variant={'border'} text={t('button.continue')} onPress={() => handleSubmit()} />
              </View>
            </>
          );
        }}
      </Formik>
      <ErrorModal isVisible={isVisibleModal} onClose={() => setIsVisibleModal(false)} {...structureModal} />
    </View>
  );
}
