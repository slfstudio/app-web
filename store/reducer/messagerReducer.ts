import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { payloadLoginData } from '../types/userReducerType';
import { getUserNotifications, getUserProfile, logOut, signIn, signUp } from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
export interface messagerStateProps {
  messages?: null | Array<any>;
  fetching?: boolean;
  error?: string | undefined;
  incidents?: null | Array<any>;
  benefits?: null | object;
}

const initialState: messagerStateProps = {
  fetching: false,
  error: '',
  messages: [],
  incidents: [],
  benefits: null,
};

export const messager = createSlice({
  name: 'messager',
  initialState,
  reducers: {
    setSelectBenefits: (state, action: PayloadAction<messagerStateProps>) => {
      state.benefits = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      //getMessages
      .addCase(fetchGetMessages.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetMessages.rejected, (state) => {
        state.fetching = false;
      })
      .addCase(fetchGetMessages.fulfilled, (state, action) => {
        state.fetching = false;
        state.messages = action.payload?.messages;
        state.incidents = action.payload?.incidents;
      })
      //
      .addCase(fetchRemovedIncident.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchRemovedIncident.rejected, (state) => {
        state.fetching = false;
      })
      .addCase(fetchRemovedIncident.fulfilled, (state, action) => {
        state.fetching = false;
        state.incidents = action.payload;
      })
      //
      .addCase(fetchRemovedMessages.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchRemovedMessages.rejected, (state) => {
        state.fetching = false;
      })
      .addCase(fetchRemovedMessages.fulfilled, (state, action) => {
        state.fetching = false;
        state.messages = action.payload;
      });
  },
});

const sliceName = 'messager';

// request Auth
export const fetchGetMessages = createAsyncThunk(
  `${sliceName}/fetchGetMessages`,
  async ({ existId }: payloadLoginData, { rejectWithValue, getState }) => {
    try {
      const { isConnected } = getState().catalogsGenericReduce;
      if (isConnected) {
        const { id } = getState().userReducer.user;
        const response = await getUserNotifications({
          params: `cus_id=${id}&APP_ID=${getQueryStringIdPlatform()}`,
        });
        if (response.data.status === 'success') {
          const data = response.data.data;
          let messagesFilter = _.filter(data, function (o) {
            return o.id_sinister === 0 && o;
          });

          let incidentsFilter = _.filter(data, function (o) {
            return o.id_sinister === 1 && o;
          });
          let antiguos = [];
          if (messagesFilter.length > 0) {
            antiguos = await AsyncStorage.getItem('@messages');
            antiguos = JSON.parse(antiguos);
            if (antiguos && antiguos.length > 0) {
              antiguos.push(...messagesFilter);
              messagesFilter = antiguos;
              AsyncStorage.setItem('@messages', JSON.stringify(antiguos));
            } else {
              AsyncStorage.setItem('@messages', JSON.stringify(messagesFilter));
            }
          } else {
            messagesFilter = await AsyncStorage.getItem('@messages');
            messagesFilter = JSON.parse(messagesFilter);
          }

          let antiguos_incidents = [];
          if (incidentsFilter.length > 0) {
            antiguos_incidents = await AsyncStorage.getItem('@incidents');
            antiguos_incidents = JSON.parse(antiguos_incidents);
            if (antiguos_incidents && antiguos_incidents.length > 0) {
              antiguos_incidents.push(...incidentsFilter);
              incidentsFilter = antiguos_incidents;
              AsyncStorage.setItem('@incidents', JSON.stringify(antiguos_incidents));
            } else {
              AsyncStorage.setItem('@incidents', JSON.stringify(incidentsFilter));
            }
          } else {
            incidentsFilter = await AsyncStorage.getItem('@incidents');
            incidentsFilter = JSON.parse(incidentsFilter);
          }

          return {
            messages: messagesFilter,
            incidents: incidentsFilter,
          };
          // if (existId) {
          //     let existItem = _.findIndex(messagesFilter, { id_notification: existId });
          //     if (existItem === -1) {
          //         existItem = _.findIndex(incidentsFilter, { id_notification: existId });

          //     }
          //     if (existItem > -1) {
          //         return {};
          //     } else {
          //         return ({
          //             messages: messagesFilter,
          //             incidents: incidentsFilter
          //         });
          //     }
          // }
        }
      } else {
        let messagesFilter = null;
        messagesFilter = await AsyncStorage.getItem('@messages');
        messagesFilter = JSON.parse(messagesFilter);
        let incidentsFilter = null;
        incidentsFilter = await AsyncStorage.getItem('@incidents');
        incidentsFilter = JSON.parse(incidentsFilter);

        return {
          messages: messagesFilter,
          incidents: incidentsFilter,
        };
      }
    } catch (error) {
      let messagesFilter = null;
      try {
        messagesFilter = await AsyncStorage.getItem('@messages');
      } catch (e) {
        console.log(e);
      }
      messagesFilter = JSON.parse(messagesFilter);

      let incidentsFilter = null;
      try {
        incidentsFilter = await AsyncStorage.getItem('@incidents');
      } catch (e) {
        console.log(e);
      }
      incidentsFilter = JSON.parse(incidentsFilter);

      console.log(messagesFilter, 183);

      return {
        messages: messagesFilter,
        incidents: incidentsFilter,
      };
    }
  },
);

export const fetchRemovedIncident = createAsyncThunk(
  `${sliceName}/fetchRemovedIncident`,
  async (index: number, { rejectWithValue, getState }) => {
    try {
      let incidentsFilter = [];
      incidentsFilter = await AsyncStorage.getItem('@incidents');
      incidentsFilter = await JSON.parse(incidentsFilter);
      await incidentsFilter.splice(index, 1);
      console.log('remove::', incidentsFilter);
      await AsyncStorage.setItem('@incidents', JSON.stringify(incidentsFilter));
      return incidentsFilter;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchRemovedMessages = createAsyncThunk(
  `${sliceName}/fetchRemovedMessages`,
  async (index: number, { rejectWithValue, getState }) => {
    try {
      let messagesFilter = [];
      messagesFilter = await AsyncStorage.getItem('@messages');
      messagesFilter = await JSON.parse(messagesFilter);
      await messagesFilter.splice(index, 1);
      console.log('remove::', messagesFilter);
      await AsyncStorage.setItem('@messages', JSON.stringify(messagesFilter));
      return messagesFilter;
    } catch (e) {
      console.log('removeMessage error =>', e.toString());
    }
  },
);

// Action creators are generated for each case reducer function
export const { setSelectBenefits } = messager.actions;

export default messager.reducer;
