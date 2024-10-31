import { View } from 'react-native';
import Text from '@/components/Text';
import Spacing from '../Spacing';
import { useTranslation } from 'react-i18next';
import { HealthQuoteInfoCustomProps } from './types';

export default function HealthQuoteInfo({ totalAmount, maxCoverage, price }: HealthQuoteInfoCustomProps) {
  const { t } = useTranslation();
  return (
    <View>
      <Text variant="Body-Medium-Medium" className="text-dark">
        {t('label.quote')}
      </Text>
      <Spacing size="S" />
      <View className="  p-[16] w-full bg-white rounded-md">
        <View className="flex-row justify-between">
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.total_amount')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark3">
              {totalAmount}
            </Text>
          </View>
          <Spacing horizontal />
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.maximum_coverage')}
            </Text>
            <Spacing size="XS" />
            <Text variant="Body-Medium-Regular" className="text-dark3">
              {maxCoverage}
            </Text>
          </View>
        </View>

        <Spacing />

        <View className="p-md rounded border border-pink-light items-center">
          <Text variant="Heading-H6" className="text-dark">
            {price}
          </Text>
          <Spacing size="S" />
          <Text variant="Body-Extra-Small-Regular" className="text-dark4 justify-center">
            {t('text.price_expressed_in_us_dollars')}
          </Text>
          <Spacing size="XS" />
          <Text variant="Body-Extra-Small-Regular" className="text-dark4 justify-center">
            {t('text.quote_valid_for_24_hours')}
          </Text>
        </View>
      </View>
    </View>
  );
}
