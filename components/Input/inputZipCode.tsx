import { useCallback, useState } from 'react';
import _ from 'lodash';
import { TextInputCustomProps } from './types';
import InputBase from './InputBase';
import { getZipCode } from '@/api/websersives';
function InputZipCode({ ...props }: TextInputCustomProps) {
  const handleChange = (event: string) => {
    debounce(event);
    props.onChangeText?.(event);
  };

  const debounce = useCallback(
    _.debounce((_searchVal) => filterSearch(_searchVal), 1000),
    [],
  );

  const filterSearch = async (text: string) => {
    try {
      if (text.length === 5) {
        props.setLoadingZP?.(true);
        props.setVisibleModalCP?.(true);
        const params = `cp=${text}`;
        getZipCode(params)
          .then(({ data }) => {
            if (!data.error) {
              setTimeout(() => {
                props.setLoadingZP?.(false);
                props.setZpArr?.(data.response);
                console.log('data==>', data.response);
              }, 1000);
            } else {
              props.setZpArr?.([]);
              props.setVisibleModalCP?.(false);
              console.log('failed');
            }
          })
          .catch((e) => {
            console.log('getZipCode error =>', e.toString());
            props.setZpArr?.([]);
            props.setVisibleModalCP?.(false);
          });
      }
    } catch (e) {
      console.log('filterSearch error =>', e?.toString());
      props.setZpArr?.([]);
      props.setVisibleModalCP?.(false);
    }
  };
  return <InputBase {...props} onChangeText={handleChange} keyboardType="numeric" returnKeyType="done" />;
}

export default InputZipCode;
