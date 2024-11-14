import { Alert, Dimensions, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import _ from 'lodash';

const { height } = Dimensions.get('window');

export const screenPercent = (percent: number) => {
  return (height * percent) / 100;
};

export const downloadedCheck = async (id: string) => {
  let file;
  try {
    file = await AsyncStorage.getItem('@file' + id);
  } catch (e) {
    console.log('downloadedCheck error => ', e.toString());
  }
  return file ? true : false;
};

export const downloadFile = async (id: string, url: string) => {
  try {
    let filename = url.substring(url.lastIndexOf('/') + 1, url.length).toLowerCase();
    const isExist = await fileExist(url);
    if (isExist) {
      let res = await FileSystem.downloadAsync(url, FileSystem.documentDirectory + filename);
      if (res.status === 200) {
        await AsyncStorage.setItem('@file' + id, JSON.stringify({ path: res.uri }));
        return true;
      } else {
        console.log('Download Fail: ', id, '-', url);
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    console.log('downloadFile error => ', e.toString());
    return false;
  }
};

export const fileExist = async (url: string) => {
  try {
    return await Linking.canOpenURL(url);
  } catch (e) {
    console.log('fileExist error => ', e.toString());
    return false;
  }
};

export const getQueryStringIdPlatform = () => {
  return 'APP_EP_WEB_41';
};

export const platformSize = (ios: string, android: string) => {
  return Platform.OS === 'ios' ? ios : android;
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  }).catch((e) => {
    console.log('wai error => ', e.toString());
  });
};

export const twoDigits = (v: number) => {
  return v < 10 ? '0' + v : v;
};

export const toMoneyFormat = (v: string) => {
  if (/\d/.test(v)) {
    let value = parseFloat(v.toString().replace(/[^0-9\.]/g, ''));
    return Platform.OS === 'ios'
      ? value.toLocaleString('es-MX', {
          style: 'currency',
          currency: 'MXN',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return v;
  }
};

export const truncateString = (string: string = '', limit: number) => {
  if (string.length > limit) {
    return _.truncate(string, {
      length: limit,
      omission: '...',
    });
  } else {
    return string;
  }
};

export const dialCall = async (number: string) => {
  let phoneNumber = '';
  if (!number) {
    Alert.alert('No se tiene registrado un número para esta aseguradora');
    return;
  }
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number.replace(/\s/g, '')}`;
  } else {
    phoneNumber = `telprompt:${number.replace(/\s/g, '')}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert('Llame al siguiente número: ' + phoneNumber);
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((e) => {
      console.log('dialCall canOpenURL error => ', e.toString());
    });
};

export const getLastNumberInString = (v: string) => {
  return parseInt(v.match(/\d+/).slice(-1));
};
