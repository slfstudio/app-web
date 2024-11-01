import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';
import mapImg from '@/assets/images/general/mapExample.png';
import Input from '@/components/Input';
import Background from '@/components/Background';
import ButtonBase from '@/components/Button/ButtonBase';
import { Icon } from '@/components/Icon';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Background>
      <View className="flex-1 p-[3%]">
        <Text variant="Heading-H6" className="text-pinkLight">
          get in touch
        </Text>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className="w-[40%]">
          <Text>
            We're here to assist you with any inquiries or feedback you may have. Please complete the form below, and a
            member of our team will respond promptly. We look forward to hearing from you.
          </Text>
          <Spacing size="XL" />
        </View>
        <View>
          <View className="border border-dark7 items-center p-[16px]">
            <View>
              <Text>Expat Shields Contact Information</Text>
              <Spacing />
              <View className="flex-row">
                <Icon name="Telephone" size={20} />
                <Spacing horizontal />
                <Text>+ 55 5555555555</Text>
              </View>
              <Spacing />
              <View className="flex-row">
                <Icon name="Envelope" size={20} />
                <Spacing horizontal />
                <Text>email@email.com</Text>
              </View>
              <Spacing />
              <View className="flex-row ">
                <Icon name="Location" size={20} />
                <Spacing horizontal />
                <Text>adress</Text>
              </View>
              <Spacing />
              <Image source={mapImg} />
            </View>
          </View>
          <Spacing />
          <View className="border border-dark7 rounded p-[16px]">
            <Input label={t('label.first_name')} />
            <Spacing />
            <Input label={t('label.last_name')} />
            <Spacing />
            <Input label={t('label.email')} />
            <Spacing />
            <Input label={t('label.mobile')} />
            <Spacing />
            <Input variant="text-area" label={t('button.message')} />
            <Spacing />
            <ButtonBase variant="black" text="send message" />
          </View>
        </View>
      </View>
    </Background>
  );
}
