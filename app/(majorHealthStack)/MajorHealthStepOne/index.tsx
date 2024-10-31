import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import ErrorModal from '@/components/ErrorModal';
import { Icon } from '@/components/Icon';
import Input from '@/components/Input';
import Loading from '@/components/Loading';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import {
  fetchGetCountriesActions,
  fetchGetLanguageActions,
  fetchGetRatesActions,
} from '@/store/reducer/majorHealthReducer';
import { RootState } from '@/store/store';
import { changeFormat } from '@/utils/datesUtils';
import { majorHealthStepOneValidationSchema } from '@/utils/validationsSchema';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function MajorHealthStepOne({ onStepChange }) {
  const preventReload = useRef(false);
  const [hasLoadedRates, setHasLoadedRates] = useState(true);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { countries, languageQuote, fetching, rates } = useSelector((state: RootState) => state.majorHealthReducer);
  // input list for chilren
  const [children, setChildren] = useState([]);

  //add  a new input:
  const addChild = () => {
    setChildren([...children, {}]);
  };
  //update  state value
  const handleChildInputChange = (index, field, value) => {
    const updatedChildren = [...children];
    if (!updatedChildren[index]) {
      updatedChildren[index] = {};
    }
    updatedChildren[index][field] = value;
    setChildren(updatedChildren);
  };
  //delete child
  const removeChild = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };

  useEffect(() => {
    if (!preventReload.current) {
      dispatch(fetchGetCountriesActions());
      dispatch(fetchGetLanguageActions());
      preventReload.current = true;
    }
  }, []);

  useEffect(() => {
    if (!fetching && Object.keys(rates).length) {
      setHasLoadedRates(true);
      onStepChange();
    }
  }, [fetching, rates, hasLoadedRates]);

  if (fetching) {
    return <Loading />;
  }
  return (
    <View className="flex-1 pb-2xl justify-between px-md pt-2">
      <Text>{t('label.step_1')}</Text>
      <Text variant="Body-Medium-Bold" className="text-dark">
        {t('label.general_information')}
      </Text>
      <Spacing />
      <Formik
        validationSchema={majorHealthStepOneValidationSchema}
        initialValues={{ miniors: false }}
        onSubmit={(values) => {
          const members = [];

          // Create the principal insured member
          members.push({
            memberTypeId: 1,
            dob: `${changeFormat(values.birthdate)}T06:00:00.000Z`,
            isSmoker: values.isSmoker === '1',
            genderId: values.genderId,
          });

          // Add spouse if present
          if (values.add_dependants === '1' && values.add_spouse === '1') {
            members.push({
              memberTypeId: 2,
              dob: `${changeFormat(values.birthdate_spouse)}T06:00:00.000Z`,
              isSmoker: values.genderId_spouse === '1',
              genderId: values.sex_at_birth_spouse,
            });
          }

          // Add children if present
          if (values.add_dependants === '1' && children.length > 0) {
            children.forEach(({ birthdate_child, genderId_child }, index) => {
              if (birthdate_child && genderId_child) {
                members.push({
                  memberTypeId: 3,
                  dob: `${changeFormat(birthdate_child)}T06:00:00.000Z`,
                  genderId: genderId_child, // Assuming you have this field for each child
                });
              }
            });
          }

          const result = {
            effectiveDate: `${changeFormat(values.effectiveDate)}T06:00:00.000Z`,
            countryId: values.countryId,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            languageId: values.languageId,
            members: members,
          };
          console.log('me ejecuto', result);
          dispatch(fetchGetRatesActions(result));
          // nextStep(result);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
          <>
            <Input
              label={t('label.estimated_effective_date')}
              value={values.effectiveDate}
              onChangeText={handleChange?.('effectiveDate')}
              error={errors.effectiveDate}
              variant="calendar"
              placeholder={t('placeholders.mm_dd_yyyy')}
            />
            <Spacing size="XS" />
            <Text variant="Body-Extra-Small-Medium">
              {t('text.the_effective_date_will_be_either_the_1st_or_the_15th')}
            </Text>
            <Spacing />
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[280px]">
                <Dropdown
                  data={countries}
                  label={t('label.country_of_residence')}
                  placeholder={t('placeholders.select')}
                  error={errors?.countryId}
                  onSelect={(value) => setFieldValue('countryId', value.value)}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Dropdown
                  data={languageQuote}
                  label={t('label.language_for_quote')}
                  placeholder={t('placeholders.select')}
                  onSelect={(value) => setFieldValue('languageId', value.value)}
                  error={errors?.languageId}
                />
              </View>
            </View>

            <Spacing size="L" />
            <View className="border border-pink-light" />
            <Spacing size="L" />
            <Text variant="Body-Medium-Bold" className="text-dark">
              {t('label.proposed_principal_insured')}
            </Text>
            <Spacing size="L" />
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.name')}
                  value={values.firstName}
                  error={errors.firstName}
                  onChangeText={handleChange?.('firstName')}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.last_name')}
                  value={values.lastName}
                  error={errors.lastName}
                  onChangeText={handleChange?.('lastName')}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.email')}
                  value={values.email}
                  error={errors.email}
                  onChangeText={handleChange?.('email')}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input
                  label={t('label.birth_date')}
                  variant="date"
                  value={values.birthdate}
                  error={errors.birthdate}
                  placeholder={t('placeholders.mm_dd_yyyy')}
                  onChangeText={handleChange?.('birthdate')}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <RadioButtonsActions
                  options={[
                    { id: 100, text: t('male'), value: 100 },
                    { id: 101, text: t('female'), value: 101 },
                    { id: 102, text: t('other'), value: 102 },
                  ]}
                  selectOption={(value: Object) => setFieldValue('genderId', value)}
                  value={values.genderId}
                  error={errors.genderId}
                  label={t('label.sex_at_birth')}
                />
              </View>
              <View className="flex-1 min-w-[280px]">
                <RadioButtonsActions
                  options={[
                    { id: 1, text: t('yes'), value: true },
                    { id: 2, text: t('no'), value: false },
                  ]}
                  selectOption={(value: Object) => setFieldValue('isSmoker', value)}
                  value={values.isSmoker}
                  error={errors.isSmoker}
                  label={t('label.smoker')}
                />
              </View>
            </View>

            <Spacing />
            <RadioButtonsActions
              options={[
                { id: 1, text: t('yes'), value: 1 },
                { id: 2, text: t('no'), value: 2 },
              ]}
              selectOption={(value: Object) => setFieldValue('add_dependants', value)}
              value={values.add_dependants}
              error={errors.add_dependants}
              label={t('label.would_you_like_to_add_dependant')}
            />
            <Spacing />

            {values.add_dependants == 1 && (
              <View>
                <View className="h-[1] bg-pink-light" />
                <Spacing />
                <Text variant="Body-Medium-Bold" className="text-dark">
                  {t('label.dependants')}
                </Text>
                <Spacing />
                <RadioButtonsActions
                  options={[
                    { id: 1, text: t('yes'), value: 1 },
                    { id: 2, text: t('no'), value: 2 },
                  ]}
                  selectOption={(value: Object) => setFieldValue('add_spouse', value)}
                  value={values.add_spouse}
                  label={t('label.add_spouse_domestic_partner')}
                />
                {/* ....................render if yes:.................... */}
                {values.add_spouse == 1 && (
                  <View>
                    <Spacing />
                    <Input
                      label={t('label.birth_date')}
                      variant="date"
                      value={values.birthdate_spouse}
                      placeholder={t('placeholders.mm_dd_yyyy')}
                      onChangeText={handleChange?.('birthdate_spouse')}
                      error={errors.birthdate_spouse}
                    />
                    <Spacing />
                    <View className="flex-row flex-wrap gap-4">
                      <View className="flex-1 min-w-[280px]">
                        <RadioButtonsActions
                          options={[
                            { id: 1, text: t('male'), value: 1 },
                            { id: 2, text: t('female'), value: 2 },
                          ]}
                          selectOption={(value: Object) => setFieldValue('genderId_spouse', value)}
                          value={values.genderId_spouse}
                          error={errors.genderId_spouse}
                          label={t('label.sex_at_birth')}
                        />
                      </View>
                      <View className="flex-1 min-w-[280px]">
                        <RadioButtonsActions
                          options={[
                            { id: 1, text: t('yes'), value: 1 },
                            { id: 2, text: t('no'), value: 2 },
                          ]}
                          selectOption={(value: Object) => setFieldValue('isSmoker_spouse', value)}
                          value={values.isSmoker_spouse}
                          error={errors.isSmoker_spouse}
                          label={t('label.smoker')}
                        />
                      </View>
                    </View>
                  </View>
                )}
                <Spacing />
                <>
                  {children.map(({ birthdate_child, genderId_child }, index) => (
                    <View>
                      <View className="h-[1] bg-pink-light" />
                      <Spacing />
                      <View className="flex-row justify-between">
                        <Text variant="Body-Medium-Bold" className="text-dark">
                          {t('label.child')}
                          {index + 1}
                        </Text>
                        <TouchableOpacity onPress={() => removeChild(index)}>
                          <Icon name="TrashCan" size={24} />
                        </TouchableOpacity>
                      </View>
                      <Input
                        label={t('label.birth_date')}
                        variant="date"
                        value={birthdate_child}
                        error={errors.birthdate_child}
                        placeholder={t('placeholders.mm_dd_yyyy')}
                        onChangeText={(text) => handleChildInputChange(index, 'birthdate_child', text)}
                      />
                      <Spacing />
                      <RadioButtonsActions
                        options={[
                          { id: 100, text: t('male'), value: 100 },
                          { id: 101, text: t('female'), value: 101 },
                          { id: 102, text: t('other'), value: 102 },
                        ]}
                        selectOption={(value) => handleChildInputChange(index, 'genderId_child', value)}
                        value={genderId_child}
                        error={errors.genderId_child}
                        label={t('label.sex_at_birth')}
                      />
                      <Spacing />
                    </View>
                  ))}
                </>
                <Button variant="border" text={t('label.add_child')} onPress={addChild} />
              </View>
            )}

            <Spacing size="L" />
            <Button variant="border" text={t('button.continue')} onPress={() => handleSubmit()} />
            <Spacing size="XXL" />
          </>
        )}
      </Formik>
      {/* <ErrorModal isVisible={isVisibleModal} onClose={() => setIsVisibleModal(false)} {...structureModal} /> */}
    </View>
  );
}
