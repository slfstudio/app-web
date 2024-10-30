import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getCountries, getLanguages, getRate, printCoute, quoteTravel, showCoute } from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import { catalogsGenericData } from '../types/catalogsGenericReducer';
import { calculateAge, changeFormat } from '@/utils/datesUtils';
import { dateFormat } from '@/utils/genericFunctions';
import { boolean } from 'yup';

export interface travelAssistState {
  travelInfo: any;
  fetching?: boolean;
  error?: null | string;
  quoteTravelInfo?: object;
}

const initialState: travelAssistState = {
  travelInfo: {},
  fetching: false,
  error: null,
  quoteTravelInfo: {},
};

export const travelAssist = createSlice({
  name: 'travelAssist',
  initialState,
  reducers: {
    setTravelInfo: (state, action: PayloadAction<Partial<travelAssistState['travelInfo']>>) => {
      state.travelInfo = {
        ...state.travelInfo,
        ...action.payload,
      };
    },
    // New reducer to clean all the state and set default values
    resetTravelAssistState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteTravelActions.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchQuoteTravelActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.quoteTravelInfo = action.payload;
      })
      .addCase(fetchQuoteTravelActions.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload as string;
      });
  },
});

const sliceName = 'travelAssist';
export const fetchQuoteTravelActions = createAsyncThunk(
  `${sliceName}/fetchQuoteTravelActions`,
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const { pushToken } = state?.catalogsGenericReducer;
      const { travelInfo } = state?.travelAssistReducer;
      const params = `alias=${travelInfo.alias}&id_plan_detail=${travelInfo.idPlanDetail}&name=${travelInfo.name}&apaterno=${travelInfo.lastName}&amaterno=null&email=${travelInfo.email}&birthday=${changeFormat(travelInfo.birthdate)}&phone=${travelInfo.phone}&APP_ID=${getQueryStringIdPlatform()}&push_token=${pushToken}&country_residence=${travelInfo.residence_country}&country_destination=${travelInfo.destination}&date_departure=${changeFormat(travelInfo.start_date)}&date_return=${changeFormat(travelInfo.end_date)}&number_eligible_dependents=${travelInfo.elegible_dependents}&number_eligible_dependents_over_60_years=${travelInfo.dependents_over}&maximum_coverage=${travelInfo.maximum_coverage}&select_deductible=${travelInfo.deductible}&preexisting_medical_conditions=${Boolean(travelInfo.medical_conditions === 1)}&pet_assistance=${travelInfo.pet_assistance === '0' ? 'no' : travelInfo.pet_assistance}&vip_legal_assistance=${Boolean(travelInfo.vip_legal_assistance === 1)}&cancellation_interruption=${travelInfo.trip_cancellation}&dangerous_sports=${Boolean(travelInfo.play_sports === 1)}&muerte_accidental_desmembramiento=${travelInfo.accidental_death}`;

      console.log('travelInfo======>', params);
      const response = await quoteTravel({ params });
      console.log('response=====>', response.data);
      if (response.data.status === 'success') {
        return { code: 0, message: '', amount: '574.6', params };
      }

      return rejectWithValue('Failed to fetch quote PDF');
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// Update the exported actions
export const { setTravelInfo, resetTravelAssistState } = travelAssist.actions;

export default travelAssist.reducer;
