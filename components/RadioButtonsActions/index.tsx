import { View } from 'react-native';
import RadioButton from '../RadioButton';
import Spacing from '../Spacing';
import { useTranslation } from 'react-i18next';
import Text from '@/components/Text';
import { RadioButtonsActionsProps } from './types';

export default function RadioButtonsActions({
  optionalText,
  options,
  value,
  selectOption,
  error,
  label,
}: RadioButtonsActionsProps) {
  const { t } = useTranslation();
  return (
    <View>
      {label && (
        <>
          <Text variant="Body-Small-Regular" className="text-dark">
            {t(label)}
            {optionalText && (
              <Text variant="Body-Extra-Small-Regular" className="text-pink-light">
                {' '}
                {t(optionalText)}
              </Text>
            )}
          </Text>
          <Spacing size="M" />
        </>
      )}

      <View className=" flex-row">
        {options.map((option, index) => (
          <>
            <RadioButton
              key={option.id}
              onValueChange={() => selectOption(String(option.id))}
              value={Boolean(value == option.id)}
              text={t(option.text)}
            />
            {index + 1 < options.length && <Spacing size="M" horizontal />}
          </>
        ))}
      </View>
      {error && <Text className="text-red">{t(error)}</Text>}
    </View>
  );
}
