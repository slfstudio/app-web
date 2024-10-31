import Background from '@/components/Background';
import Paper from '@/components/Paper';
import RadioButtonsActions from '@/components/RadioButtonsActions';
import RateExpandable from '@/components/RateExpandable';
import RatesDropdown from '@/components/RatesDropdown';
import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import Button from '@/components/Button';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useNavigation } from '@react-navigation/native';
import ErrorModal from '@/components/ErrorModal';
import React, { useState } from 'react';
import { fetchShowCouteActions } from '@/store/reducer/majorHealthReducer';


export default function MajorHealthStepTwo() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { planOptionId,rates } = useSelector((state: RootState) => state.majorHealthReducer);
 
  const { navigate } = useNavigation<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dental, setDental] = useState(null);
  const handleContinue = () => {
    if (planOptionId.length === 0) {
      setIsModalVisible(true);
    } else {
      const result = { planOptionId, dental: dental === 1 ? true : false };
      result.idquotebts = rates.idquotebts;
      console.log(result);
      dispatch(fetchShowCouteActions(result));
      navigate('QuoteLoading');
    }
  };

  return (
    <View className="flex-1 pb-2xl justify-between px-md pt-2">
      <View>
        <Text>{t('label.step_2')}</Text>
        <Text variant="Body-Medium-Bold" className="text-dark">
          {t('label.rates')}
        </Text>
        <Spacing />
        <Text variant="Body-Medium-Regular" className="text-dark3">
          {' '}
          {t('label.deductible_options')}{' '}
        </Text>
        <Spacing size="XS" />
        <Text variant="Body-Medium-Regular" className="text-dark3">
          {' '}
          {t('label.inside_latin_america_outside_latin_america')}{' '}
        </Text>
        <Spacing size="S" />
        <View className="border border-pink-light" />
        <Spacing size="S" />
        <Text variant="Body-Medium-Regular" className="text-dark3">
          {t('text.select_the_plans_for_which_you_would_like_to_receive_quotes')}
        </Text>
      </View>
      <Spacing />
      {rates.plans.map((item, index) => (
        <>
          <RatesDropdown title={item.name} rateItem={item} variant={item.code === 'EPINT' ? 'premium' : 'solution'} />
          <Spacing />
        </>
      ))}
      <View>
        <View>
          <Text variant="Body-Medium-Regular" className="text-dark">
            {t('text.would_you_like_to_add_a_dental_policy_for')}
          </Text>
          <View className="flex-row">
            <Text variant="Body-Medium-Bold" className="text-dark">
              $72.24
            </Text>
            <Text variant="Body-Medium-Regular" className="text-dark">
              ?
            </Text>
          </View>
        </View>
        <Spacing size="S" />
        <Text variant="Body-Small-Regular">{t('text.note_this_benefit_applies_to_all_eligible_policy_members')}</Text>
        <Spacing />
        <RadioButtonsActions
          options={[
            { id: 1, text: t('yes'), value: 1 },
            { id: 2, text: t('no'), value: 2 },
          ]}
          value={dental}
          selectOption={setDental}
        />
      </View>
      <Spacing size="L" />
      <Button onPress={handleContinue} variant="border" text={t('button.continue')} />
      <Spacing size="XXL" />
      <ErrorModal
        title={t('select_at_least_one_option')}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
}
