import React, { ReactElement, useState } from 'react';
import { ActivityIndicator, Modal, TouchableOpacity, View } from 'react-native';
import { Icon } from '../Icon';
import { colors } from '@/config';
import { useTranslation } from 'react-i18next';
import Spacing from '../Spacing';
import Text from '@/components/Text';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../Button';
const ModalListCP = ({ loading = false, visible, setVisible, options, onNext }) => {
  const { t } = useTranslation();
  const [valSelect, setValSelect] = useState(false);

  const renderItem = ({ item }): ReactElement<any, any> => {
    return (
      <TouchableOpacity
        className="p-sm"
        onPress={() => {
          onNext(item);
          setVisible(false);
        }}
      >
        <Text>
          {item.tipo_asentamiento} {item.asentamiento}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        {loading ? (
          <View className="flex-1 rounded-2xl shadow-xl flex-column">
            <View className="flex-1 items-center justify-center" style={{ backgroundColor: 'rgba(1,1,1,0.7)' }}>
              <ActivityIndicator size={'large'} />
              <Spacing />
              <Text>{t('loading')}</Text>
            </View>
          </View>
        ) : (
          <View className="flex-1 rounded-2xl shadow-xl flex-column">
            <TouchableOpacity onPress={() => setVisible(false)} className="items-end mt-12 ">
              <Icon name="Close" fill={colors.white} size={12} />
            </TouchableOpacity>
            <View>
              <View>
                <Text>{t('placeholders.select')}</Text>
                {options ? (
                  <View className="bg-white shadow rounded-md mt-xs">
                    <FlatList data={options} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
                  </View>
                ) : (
                  <Text style={{ textAlign: 'center', marginVertical: 20 }}>Sin registros</Text>
                )}
              </View>
            </View>

            <Button variant="border" text={t('button.continue')} onPress={() => {}} />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ModalListCP;
