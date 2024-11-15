import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import ErrorModal from '@/components/ErrorModal';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { planTravelCatalog, travelDestination } from '@/mocks/catalogs';
import { fetchGetCountriesActions } from '@/store/reducer/majorHealthReducer';
import { setTravelInfo } from '@/store/reducer/travelAssistReducer';
import { RootState } from '@/store/store';
import { travelAssistStepOneValidationSchema } from '@/utils/validationsSchema';
import { Formik } from 'formik';
import { values } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function TravelAssistStepOne({ onStepChange }) {
  const preventReload = useRef(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { countries } = useSelector((state: RootState) => state.majorHealthReducer);

  const [structureModal, setStructureModal] = useState({
    title: '',
    text: '',
    subtitle: '',
    subtitleTwo: '',
    textTwo: '',
    subtitleThree: '',
    textThree: '',
  });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const handleModalInfo = (msg) => {
    setIsVisibleModal(true);
    setStructureModal(msg);
  };
  const infoMsg = {
    subtitle: t('text.unique_trip'),
    text: t('text.you_can_purchase_a_unique_trip_by'),
    subtitleTwo: t('text.unlimited_plan_30'),
    textTwo: t('text.up_to_a_maximum_of_30'),
    subtitleThree: t('text.unlimited_plan_60'),
    textThree: t('text.each_up_to_a_maximum_of_60'),
    icon: 'InfoCircle',
    textButtonOk: t('button.ok'),
    iconSize: 40,
  };

  const dropDownData = {
    idPlanDetail: [
      { value: 1, label: t('text.unique_trip') },
      { value: 2, label: t('text.unlimited_plan_30') },
      { value: 3, label: t('text.unlimited_plan_60') },
    ],
  };
  // difference between days
  const howManyDays = (dates: object) => {
    console.log(dates.end_date, dates.start_date);
    if (!dates.end_date || !dates.start_date) {
      return '';
    }

    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

    // Verificar longitud de la entrada
    if (dates.end_date.length !== 10 || dates.start_date.length !== 10) {
      return '';
    }

    // Validar formato usando regex
    if (!datePattern.test(dates.end_date) || !datePattern.test(dates.start_date)) {
      return '';
    }
    const [month1, day1, year1] = dates.start_date.split('/').map(Number);
    const [month2, day2, year2] = dates.end_date.split('/').map(Number);

    const firstDate = new Date(year1, month1 - 1, day1);
    const secondDate = new Date(year2, month2 - 1, day2);

    const diffInMs = Math.abs(secondDate - firstDate);

    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  useEffect(() => {
    if (!preventReload.current) {
      dispatch(fetchGetCountriesActions());
      preventReload.current = true;
    }
  }, []);
  return (
    <View className="flex-1 pb-2xl justify-between px-md pt-2">
      <Text>{t('label.step_1')}</Text>
      <Text variant="Body-Medium-Bold" className="text-dark">
        {t('label.general_information')}
      </Text>
      <Spacing />
      <Formik
        validationSchema={travelAssistStepOneValidationSchema}
        initialValues={{ dependents_over: '0', elegible_dependents: '0' }}
        onSubmit={(values) => {
          dispatch(setTravelInfo({ ...values }));
          onStepChange();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
          <>
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.birth_date')}
                  variant="date"
                  placeholder={t('placeholders.mm_dd_yyyy')}
                  value={values.birthdate}
                  onChangeText={handleChange?.('birthdate')}
                  error={errors.birthdate}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Dropdown
                  data={travelDestination}
                  label={t('label.travel_destination')}
                  placeholder={t('placeholders.select')}
                  error={errors?.destination}
                  onSelect={(value) => setFieldValue('destination', value.label)}
                />
              </View>
            </View>
            <Spacing />
            <Dropdown
              variant="info"
              onPressInfo={() => handleModalInfo(infoMsg)}
              label={t('label.travel_insurance_type')}
              data={dropDownData && dropDownData['idPlanDetail']}
              onSelect={(value) => setFieldValue('idPlanDetail', value.value)}
              placeholder={t('placeholders.select')}
              error={errors?.idPlanDetail}
            />
            <Spacing />
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.start_date_mm_dd_yyyy')}
                  variant="date"
                  placeholder={t('placeholders.mm_dd_yyyy')}
                  value={values.start_date}
                  onChangeText={handleChange?.('start_date')}
                  error={errors.start_date}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.end_date_mm_dd_yyyy')}
                  variant="date"
                  placeholder={t('placeholders.mm_dd_yyyy')}
                  value={values.end_date}
                  onChangeText={handleChange?.('end_date')}
                  error={errors.end_date}
                />
              </View>
            </View>

            <Spacing />

            <Spacing size="S" />
            <Text variant="Body-Medium-Regular" className="text-pink-light">
              {t('label.total_amount_of_days')}
              {howManyDays(values)}
            </Text>
            <Spacing size="L" />
            <Input
              label={t('label.eligible_dependents')}
              placeholder="0"
              value={values.elegible_dependents}
              error={errors?.elegible_dependents}
              onChangeText={handleChange?.('elegible_dependents')}
              keyboardType="numeric"
              returnKeyType="done"
            />
            <Spacing />
            <Input
              label={t('label.how_many_dependents_are_over_65_years_old')}
              placeholder="0"
              value={values.dependents_over}
              error={errors?.dependents_over}
              onChangeText={handleChange?.('dependents_over')}
              keyboardType="numeric"
              returnKeyType="done"
            />

            <Spacing />
            <View>
              <Button variant={'border'} text={t('button.continue')} onPress={() => handleSubmit()} />
            </View>
            <Spacing size="XXL" />
          </>
        )}
      </Formik>
      <ErrorModal isVisible={isVisibleModal} onClose={() => setIsVisibleModal(false)} {...structureModal} />
    </View>
  );
}
