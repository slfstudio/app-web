import Background from '@/components/Background';
import Paper from '@/components/Paper';
import { useTranslation } from 'react-i18next';
import InsureForms from '@/components/InsureForms';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
  fetchBrandsActions,
  fetchSubBrandsAction,
  fetchVersionsBrandsAction,
  setQuoteCar,
  setResetSubBrandversionsBrand,
} from '@/store/reducer/catalogsCarReducer';
import { Formik } from 'formik';
import { quoteCarFormValidationSchema } from '@/utils/validationsSchema';
import { View } from 'react-native';
import Spacing from '@/components/Spacing';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import { colors } from '@/config';
import RadioButton from '@/components/RadioButton';
import Text from '@/components/Text';

export default function QuoteCarScreen() {
  const { t } = useTranslation();
  const { navigate } = useNavigation<any>();
  const dispatch = useDispatch();
  const [yearsData, setYearsData] = useState([]);
  const { loggedIn } = useSelector((state: RootState) => state.userReducer);

  const [dataDropdown, setDataDropdown] = useState({
    year: [],
    brand: [],
    model: [],
    version: [],
  });
  const anotherDd = {
    coverage: [
      { value: 1, label: t('label.full') },
      { value: 2, label: t('label.medium') },
      { value: 3, label: t('label.basic') },
    ],
    payment_method: [
      { label: t('label.annual'), value: 1 },
      { label: t('label.biannual'), value: 2 },
      { label: t('label.quarterly'), value: 3 },
      { label: t('label.monthly'), value: 4 },
    ],
  };
  const [auxData, setAuxData] = useState({});
  const { brands, subBrands, versionsBrand } = useSelector((state: RootState) => state.catalogsCarReducer);
  useEffect(() => {
    let yearsArray = [];
    for (let i = new Date().getFullYear(); i >= 2005; --i) {
      yearsArray.push({ value: i, label: i });
    }
    setYearsData(yearsArray);
  }, []);

  useEffect(() => {
    setDataDropdown({
      year: yearsData,
      brand: brands,
      model: subBrands,
      version: versionsBrand,
    });
  }, [brands, subBrands, yearsData, versionsBrand]);

  const getBrand = (year: string) => {
    if (year) {
      dispatch(fetchBrandsActions({ year }));
    }
  };
  const getSubrand = (brand: string) => {
    if (auxData.year && brand) {
      dispatch(fetchSubBrandsAction({ year: auxData.year, brand }));
    }
  };
  const getVersion = (subBrand: string) => {
    if (auxData.year && auxData.brand && subBrand) {
      dispatch(fetchVersionsBrandsAction({ ...auxData, subBrand }));
    }
  };

  const resetValues = () => {
    dispatch(setResetSubBrandversionsBrand());
  };
  useEffect(() => {
    resetValues();
  }, [auxData.brand, auxData.year]);
  return (
    <Background className="px-md pt-md">
      <View className="flex-1 pb-2xl justify-between">
        {/* form */}
        <Formik
          validationSchema={quoteCarFormValidationSchema}
          initialValues={{}}
          onSubmit={(values) => {
            dispatch(setQuoteCar(values));
            navigate('InsuranceCarScreen');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
            <>
              <View>
                <Dropdown
                  placeholder={t('placeholders.select')}
                  label={t('label.year')}
                  data={dataDropdown && dataDropdown['year']}
                  error={errors?.year}
                  onSelect={(value) => {
                    setFieldValue('year', value.value);
                    setAuxData((prev) => ({ ...prev, year: value.value }));
                    getBrand(value.value);
                  }}
                />
                <Spacing size="M" />
                <Dropdown
                  placeholder={t('placeholders.select')}
                  label={t('label.brand')}
                  data={dataDropdown && dataDropdown['brand']}
                  error={errors?.brand}
                  onSelect={(value) => {
                    setFieldValue('brand', value.value);
                    getSubrand(value.value);
                    setAuxData((prev) => ({ ...prev, brand: value.value }));
                  }}
                />
                <Spacing size="M" />
                <Dropdown
                  placeholder={t('placeholders.select')}
                  label={t('label.model')}
                  data={dataDropdown && dataDropdown['model']}
                  error={errors?.model}
                  onSelect={(value) => {
                    setFieldValue('model', value.value);
                    getVersion(value.value);
                    setAuxData((prev) => ({ ...prev, subBrand: value.value }));
                  }}
                />
                <Spacing size="M" />
                <Dropdown
                  placeholder={t('placeholders.select')}
                  label={t('label.version')}
                  data={dataDropdown && dataDropdown['version']}
                  error={errors?.version}
                  onSelect={(value) => setFieldValue('version', value.value)}
                />
                <Spacing size="M" />
                <Dropdown
                  variant="info"
                  placeholder={t('placeholders.select')}
                  label={t('label.what_type_of_coverage')}
                  data={anotherDd && anotherDd['coverage']}
                  error={errors?.coverage}
                  onSelect={(value) => setFieldValue('coverage', value.value)}
                />
                <Spacing size="M" />
                <Dropdown
                  placeholder={t('placeholders.select')}
                  label={t('label.what_payment_method')}
                  data={anotherDd && anotherDd['payment_method']}
                  error={errors?.payment_method}
                  onSelect={(value) => setFieldValue('payment_method', value.value)}
                />
                <Spacing size="M" />
              </View>
              <Spacing size="L" />
              <View>
                <Button variant={'border'} text={t('button.continue')} onPress={() => handleSubmit()} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Background>
  );
}
