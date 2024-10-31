import { Button, TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import Spacing from '../Spacing';
import { useState } from 'react';
import { Icon } from '../Icon';
import { ExpandableTravelInfoCustomProps } from './types';

export default function ExpandableTravelInfo({
  firstName,
  lastName,
  travelType,
  tripDuration,
  tripDestination,
  startDate,
  endDate,
  email,
  phone,
  birthdate,
  eligibleDependents,
  dependentsOver,
  vipAssistance,
}: ExpandableTravelInfoCustomProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View className="relative">
      <Text variant="Heading-H6" className="text-dark">
        {t('label.confirmation')}
      </Text>
      <Spacing />
      <Text variant="Body-Medium-Medium" className="text-dark">
        {t('label.general_information')}
      </Text>
      <Spacing size="S" />
      <View className="bg-white rounded-md p-[16]">
        <View className="flex-row">
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.first_name')}
            </Text>
            <Spacing size="XS" />
            <Text>{firstName}</Text>
          </View>
          <Spacing horizontal />
          <View>
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.last_name')}
            </Text>
            <Spacing size="XS" />
            <Text>{lastName}</Text>
          </View>
        </View>
        <View>
          <Spacing />
          <Text variant="Body-Small-Medium" className="text-dark">
            {t('label.travel_insurance_type')}
          </Text>
          <Spacing size="S" />
          <Text>{travelType} </Text>
        </View>
        <Spacing />
        <View className="flex-row">
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.trip_duration')}
            </Text>
            <Spacing size="XS" />
            <Text>{tripDuration}</Text>
          </View>
          <Spacing horizontal />
          <View>
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.trip_destination')}
            </Text>
            <Spacing size="XS" />
            <Text> {tripDestination}</Text>
          </View>
        </View>
        <Spacing />
        <View className="flex-row">
          <View className="w-[50%]">
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.start_date')}
            </Text>
            <Spacing size="XS" />
            <Text>{startDate}</Text>
          </View>
          <Spacing horizontal />
          <View>
            <Text variant="Body-Small-Medium" className="text-dark">
              {t('label.end_date')}
            </Text>
            <Spacing size="XS" />
            <Text> {endDate}</Text>
          </View>
        </View>
        {/* collapsable section starts*/}
        {expanded && (
          <View>
            <Spacing />
            <View className="border border-pink-light" />
            <Spacing />
            <View>
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.email')}
              </Text>
              <Spacing size="S" />
              <Text>{email} </Text>
            </View>
            <Spacing />
            <View className="flex-row">
              <View className="w-[50%]">
                <Text variant="Body-Small-Medium" className="text-dark">
                  {t('label.mobile_phone')}
                </Text>
                <Spacing size="XS" />
                <Text>{phone}</Text>
              </View>
              <Spacing horizontal />
              <View>
                <Text variant="Body-Small-Medium" className="text-dark">
                  {t('label.birthdate')}
                </Text>
                <Spacing size="XS" />
                <Text>{birthdate}</Text>
              </View>
            </View>
            <Spacing />
            <View>
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.eligible_dependents')}
              </Text>
              <Spacing size="S" />
              <Text>{eligibleDependents}</Text>
            </View>
            <Spacing />
            <View>
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.dependents_are_over_65_years_old')}
              </Text>
              <Spacing size="S" />
              <Text>{dependentsOver} </Text>
            </View>
            <Spacing />
            <View>
              <Text variant="Body-Small-Medium" className="text-dark">
                {t('label.vip_legal_assistance')}
              </Text>
              <Spacing size="S" />
              <Text>{vipAssistance}</Text>
            </View>
          </View>
        )}
      </View>

      <View className="flex-row justify-end bottom-[18] right-[16]">
        <TouchableOpacity
          className="rounded-full border w-[36] h-[36] bg-white justify-center items-center absolute"
          onPress={toggleExpand}
        >
          <View>{expanded ? <Icon name="ChevronUp" size={18} /> : <Icon name="ChevronDown" size={18} />}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
