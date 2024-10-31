import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';
import { Icon } from '../Icon';
import { colors } from '@/config';
import * as SMS from 'expo-sms';
const PHONE_NUMBER = '5555578422';
const email = 'contacto@expatshields.com';
const FloatingActionButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCall = () => {
    Linking.openURL(`tel:+52${PHONE_NUMBER}`);
  };

  const handleMessage = () => {
    Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}`);
  };

  const handleSms = async () => {
    const smsAvailable = await SMS.isAvailableAsync();
    if (smsAvailable) {
      const { result } = await SMS.sendSMSAsync([PHONE_NUMBER], 'Hello Expat Shield');
    }
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${email}?subject=Hello&body=How are you?`);
  };

  return (
    <View style={styles.container}>
      {/* FAB Button */}
      {isMenuOpen && (
        <View style={styles.fabOptions}>
          <TouchableOpacity style={styles.fabOption} onPress={handleCall}>
            <Icon name="NounCall" size={21} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabOption} onPress={handleMessage}>
            <Icon name="Whatsapp" size={21} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabOption} onPress={handleSms}>
            <Icon name="NounText" size={21} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabOption} onPress={handleEmail}>
            <Icon name="NounAt" size={21} />
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.fab} onPress={handleToggleMenu}>
        {isMenuOpen ? <Text style={styles.fabIcon}>✕</Text> : <Icon name="NounHelpline" />}
      </TouchableOpacity>
    </View>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
  },
  fab: {
    width: 60,
    height: 60,
    backgroundColor: colors.black,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
  fabOptions: {
    marginBottom: 20,
    alignItems: 'center',
  },
  fabOption: {
    width: 50,
    height: 50,
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.dark8,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  fabLabel: {
    color: 'white',
    fontSize: 16,
  },
});
