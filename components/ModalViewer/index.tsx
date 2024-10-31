import React, { useEffect, useState } from 'react';
import { Dimensions, Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from '@/components/Text';
import ImageZoom from 'react-native-image-pan-zoom';
import _ from 'lodash';
import { ModalViewerProps } from './types';
import { Icon } from '../Icon';
import { colors } from '@/config';

export const ModalViewer = ({ isVisible, onClose, imageModal, text = '', onPressAction }: ModalViewerProps) => {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (imageModal.uri) {
      getInfo();
    }
  }, [imageModal]);

  const getInfo = () => {
    let imageModalURI = null;
    if (_.has(imageModal, 'uri')) {
      imageModalURI = imageModal.uri;
    } else {
      imageModalURI = Image?.resolveAssetSource(imageModal).uri;
    }

    Image?.getSize(imageModalURI, (width: number, height: number) => {
      let widthTemp = (width * 80) / 1;
      widthTemp = widthTemp > Dimensions.get('screen').width ? Dimensions.get('screen').width - 20 : widthTemp;
      setWidth(widthTemp);

      let heightTemp = (height * 80) / 1;
      heightTemp = heightTemp > Dimensions.get('screen').height ? Dimensions.get('screen').height - 20 : heightTemp;
      setHeight(heightTemp);
    });
  };

  return (
    <Modal animationType={'slide'} transparent={true} visible={isVisible}>
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <View className="flex-1 rounded-2xl shadow-xl flex-column">
          <View className="flex-1 w-screen">
            <View className="flex-1 items-center justify-center">
              <ImageZoom cropWidth={width} cropHeight={height} imageWidth={width} imageHeight={height}>
                <TouchableOpacity
                  onPress={() => {
                    onClose?.();
                    onPressAction?.();
                  }}
                >
                  <Image className="w-[100%] h-[100%] roudend" source={imageModal} resizeMode="contain" />
                </TouchableOpacity>
              </ImageZoom>
              {text !== '' && (
                <Text variant="Body-Medium-Regular" className="text-white">
                  {text}
                </Text>
              )}
            </View>

            <View className="w-[50] h-[50] absolute self-end mr-[19] mt-[50]">
              <TouchableOpacity onPress={() => onClose?.()}>
                <Icon name="Close" fill={colors.white} size={16} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
