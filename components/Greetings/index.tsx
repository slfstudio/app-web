import Text from '@/components/Text';
import { View } from 'react-native';
import Spacing from '../Spacing';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

function Greetings() {
  const { t } = useTranslation();
  const getGreetings = () => {
    const hour = new Date().getHours();
    const welcomeTypes = [t('text.good_morning'), t('text.good_afternoon'), t('text.good_evening')];
    if (hour < 12) return welcomeTypes[0];
    else if (hour < 18) return welcomeTypes[1];
    else return welcomeTypes[2];
  };
  const { profile } = useSelector((state: RootState) => state.userReducer);
  return (
    <View className="items-center pt-2">
      <Text variant="Body-Large-Bold">{getGreetings()}</Text>
      <Spacing size="S" />
      <Text variant="Heading-H5" className="text-secondary">
        {profile?.nombre}
      </Text>
      <Spacing />
      <Text variant="Body-Extra-Small-Medium">{t('text.how_can_we_help_you')}</Text>
    </View>
  );
}

export default Greetings;
