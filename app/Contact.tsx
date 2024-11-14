import Spacing from '@/components/Spacing';
import Text from '@/components/Text';
import { useTranslation } from 'react-i18next';
import { Image, View, useWindowDimensions } from 'react-native';
import mapImg from '@/assets/images/general/mapExample.png';
import Input from '@/components/Input';
import Background from '@/components/Background';
import Button from '@/components/Button';
import { Icon } from '@/components/Icon';

export default function Contact() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  return (
    <Background className="bg-white">
      <View className="flex-1 p-[3%]">
        <Text variant="Heading-H6" className="text-pink-light">
          Get in touch
        </Text>
        <View className="w-full h-[2px] bg-stroke my-md" />
        <View className={`${width > 768 ? 'w-[40%]' : 'w-full'}`}>
          <Text>
            We're here to assist you with any inquiries or feedback you may have. Please complete the form below, and a
            member of our team will respond promptly. We look forward to hearing from you.
          </Text>
          <Spacing size="XL" />
        </View>
        <View className="flex-1 flex-row flex-wrap gap-4">
          <View className="min-w-[180px]  items-center ">
            <View className=" border border-dark7 p-[16px] rounded-xl">
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
                <Text>address</Text>
              </View>
              <Spacing />
              <Image source={mapImg} />
            </View>
          </View>
          <View className="flex-1 min-w-[280px]  border border-dark7 rounded-xl p-[16px]">
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[280px]">
                <Input label={t('label.first_name')} />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input label={t('label.last_name')} />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input label={t('label.email')} />
              </View>
              <View className="flex-1 min-w-[280px]">
                <Input label={t('label.mobile')} />
              </View>
            </View>

            <Input variant="text-area" label={t('button.message')} />
            <Spacing />
            <View className="px-20">
              <Button variant="black" text="Send message" />
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}
