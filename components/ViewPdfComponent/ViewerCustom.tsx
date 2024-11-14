import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Loading from '../Loading';
import Button from '../Button';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { WebScreen } from './ViewPDF';
import { Icon } from '../Icon';
import { useNavigation } from 'expo-router';
import { useTranslation } from 'react-i18next';
import HeaderLeft from '../navigation/HeaderLeft';
import { colors } from '@/config';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window');

// New interface
interface ViewerCustomProps {
  navigation: any;
  route: {
    params?: {
      urlPdf?: string;
      title?: string;
    };
  };
}
interface WebViewCustomProps {
  url: string;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
}
const WebViewCustom: React.FC<WebViewCustomProps> = ({ url, setLoading, setError }) => {
  if (url.includes('pdf')) {
    return <WebScreen url={url} />;
  } else {
    return (
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}
      >
        <Image
          onLoadEnd={() => {
            console.log('....');
            setLoading(false);
          }}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={{ width: '100%', height: height / 1.2, resizeMode: 'stretch' }}
          source={{ uri: url }}
          alt="img"
        />
      </ImageZoom>
    );
  }
};

const ViewerCustom: React.FC<ViewerCustomProps> = ({ ...props }) => {
  const navigation = useNavigation<any>();
  const { loggedIn } = useSelector((state) => state.userReducer);
  const [url, setUrl] = useState<string | null>(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          isMenu={false}
          iconColor={colors.white}
          onPress={() =>
            navigation.navigate(loggedIn ? 'MainStack' : 'HomeStack', { screen: loggedIn ? 'MainTabs' : 'Home' })
          }
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setLoading(true);
    setURLAction();
    setLoading(false);
  }, [url, update, props.route.params?.urlPdf]);

  useEffect(() => {
    navigation.addListener('willFocus', () => {
      setURLAction();
    });
  }, []);

  const setURLAction = () => {
    if (props.route.params?.urlPdf) {
      setUrl(props.route.params.urlPdf);
    } else {
      console.warn('No URL provided in route params');
      setError(true);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setURLAction();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    navigation.setParams({ breadcrum: props.route.params?.title });
  }, []);

  const onShare = async () => {
    if (!url) return;

    setLoading(true);
    let short_name = url.split('/').pop();
    try {
      const result = await FileSystem.downloadAsync(url, FileSystem.documentDirectory + 'police_' + short_name);
      if (result && result.uri) {
        await Sharing.shareAsync(result.uri);
      }
    } catch (error) {
      console.error('Download or sharing error:', error);
    } finally {
      setLoading(false);
    }
  };

  return error === false && url ? (
    <View className="flex-1">
      <WebViewCustom url={url} setLoading={setLoading} setError={setError} />
      {loading && <Loading withText={false} />}
      <View className="absolute w-full justify-end items-end">
        <View>
          <TouchableOpacity
            onPress={onShare}
            className="w-[35px] h-[35px] justify-center items-center bg-black/30 rounded-[10px] mr-2.5 mt-[2.5px]"
          >
            <Icon name="Share" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View className="flex-1 bg-white">
      <View className="flex-1 flex-col bg-primary items-center justify-center">
        <View className="w-[250px]">
          <Button onPress={() => setUpdate(!Boolean(update))} text={t('button.try_again')} />
        </View>
      </View>
    </View>
  );
};

export default ViewerCustom;
