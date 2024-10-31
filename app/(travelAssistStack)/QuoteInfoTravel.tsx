import Background from '@/components/Background';
import HealthQuoteInfo from '@/components/HealthQuoteInfo';
import { colors } from '@/config';
import Spacing from '@/components/Spacing';
import Switch from '@/components/Switch';
import { useTranslation } from 'react-i18next';
import Button from '@/components/Button';
import { View } from 'react-native';
import ExpandableTravelInfo from '@/components/ExpandableTravelInfo';
import { useNavigation, useNavigationState, useFocusEffect } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import ErrorModal from '@/components/ErrorModal';
import { useDispatch, useSelector } from 'react-redux';
import HeaderLeft from '@/components/navigation/HeaderLeft';
import { fetchQuoteTravelActions, resetTravelAssistState } from '@/store/reducer/travelAssistReducer';
import { planTravelCatalog } from '@/mocks/catalogs';
import { formatCurrency } from '@/utils/genericFunctions';
import Loading from '@/components/Loading';
import { useLocalSearchParams } from 'expo-router';

export default function QuoteInfoTravel({ route }) {
  const { termsAccepted } = useLocalSearchParams();

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { navigate, setOptions } = useNavigation<any>();
  const { quoteTravelInfo, travelInfo, ...props } = useSelector((state) => state.travelAssistReducer);

  const [termsAcceptedH, setTermsAccepted] = useState<boolean>(true);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [modalMsg, setModalMsg] = useState({ text: '', title: '', icon: '', onClose: () => null });
  const handleModal = () => {
    setIsVisibleModal(false);
  };

  const [switchActive, setSwitchActive] = useState<boolean>(false);
  const handleSwitch = () => {
    setSwitchActive(true);
  };

  const handleRedirect = () => {
    setIsVisibleModal(false);
    navigate('QuoteInsurance');
  };

  const handleSubmit = () => {
    if (!termsAccepted) {
      setModalMsg({
        text: t('warnings.to_continue_you_must_agree_to_the_terms_and_conditions'),
        title: t('warnings.somethings_missing'),
        icon: '',
        onClose: () => handleModal(),
      });
      setIsVisibleModal(true);
    } else {
      setModalMsg({
        text: t('text.we_will_contact_you_shortly_to_send'),
        title: t('text.thank_you_for_your_trust'),
        icon: 'Shield',
        onClose: () => handleRedirect(),
      });
      setIsVisibleModal(true);
    }
  };

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderLeft
          isMenu={false}
          iconColor={colors.white}
          onPress={() => {
            dispatch(resetTravelAssistState());
            navigate('QuoteInsurance');
          }}
        />
      ),
    });
  }, []);

  const getDaysUntilTravel = (startDate: string): string => {
    const today = new Date();
    const [month, day, year] = startDate.split('/');
    const travelDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const timeDiff = travelDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 0) {
      return 'Travel has already started';
    } else if (daysDiff === 0) {
      return 'Travel starts today';
    } else if (daysDiff === 1) {
      return 'Travel starts tomorrow';
    } else {
      return `Travel starts in ${daysDiff} days`;
    }
  };
  const getDaysUntilTravelEnd = (endDate: string): string => {
    const today = new Date();
    const [month, day, year] = endDate.split('/');
    const travelEndDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const timeDiff = travelEndDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 0) {
      return 'Travel has already ended';
    } else if (daysDiff === 0) {
      return 'Travel ends today';
    } else if (daysDiff === 1) {
      return 'Travel ends tomorrow';
    } else {
      return `Travel ends in ${daysDiff} days`;
    }
  };

  const howManyDays = (dates: object) => {
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

    if (diffInDays === 0) {
      return '1 day';
    } else if (diffInDays === 1) {
      return '2 days';
    } else {
      return `${diffInDays + 1} days`;
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (termsAccepted) {
        setTermsAccepted(termsAccepted);
      }
    }, [termsAccepted]),
  );
  if(!Object.keys(travelInfo).length){
    return <Loading/>
  }
  return (
    <Background className="flex-1 p-[16]">
      <View className="flex-1 justify-between">
        <ExpandableTravelInfo
          firstName={travelInfo.name}
          lastName={travelInfo.lastName}
          travelType={planTravelCatalog.length ? planTravelCatalog.find((item) => item.value === travelInfo.idPlanDetail)?.label ?? '' : ''}
          tripDuration={howManyDays(travelInfo)}
          tripDestination={travelInfo.destination}
          startDate={getDaysUntilTravel(travelInfo.start_date)}
          endDate={getDaysUntilTravelEnd(travelInfo.end_date)}
          email={travelInfo.email}
          phone={travelInfo.phone}
          birthdate={getDaysUntilTravelEnd(travelInfo.end_date)}
          eligibleDependents={travelInfo.elegible_dependents}
          dependentsOver={travelInfo.dependents_over}
          vipAssistance={Boolean(travelInfo.vip_legal_assistance === '1') ? 'Yes' : 'No'}
        />
        <Spacing />
        <HealthQuoteInfo
          totalAmount={formatCurrency(quoteTravelInfo.amount)}
          maxCoverage={travelInfo.maximum_coverage}
          price={formatCurrency(quoteTravelInfo.amount)}
        />
      </View>
      <Spacing />
      {/* agregar que el boton se ponga rosa al aceptar en screen de terms */}
      {/* <Switch
        value={termsAccepted}
        onSwitchBackgroundColor={colors['pink-light']}
        switchBackgroundColor={colors.gray5}
        text={t('links.i_have_read_and_accept_the_terms')}
        onChangeValue={() => setTermsAccepted(!termsAccepted)}
        onPress={() => navigate('TravelAssistStack', { screen: 'TravelTermsPolicy', params: {} })}
      /> */}
      <Spacing size="XL" />
      <Button text={t('button.finish')} onPress={handleSubmit} variant="disabled" />
      <ErrorModal isVisible={isVisibleModal} {...modalMsg} />
    </Background>
  );
}
