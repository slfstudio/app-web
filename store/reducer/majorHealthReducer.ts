import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getCountries, getLanguages, getRate, printCoute, showCoute } from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import { catalogsGenericData } from '../types/catalogsGenericReducer';
import { calculateAge, changeFormat } from '@/utils/datesUtils';

export interface majorHealthState {
  countries?: Array<any>;
  languageQuote?: Array<any>;
  fetching?: boolean;
  error?: null | string;
  planOptionId: number[];
  rates?: object;
  filteredElements: {
    country?: any;
    language?: any;
  };
  pdfUri: null | string;
}

const initialState: majorHealthState = {
  countries: [],
  languageQuote: [],
  fetching: false,
  error: null,
  planOptionId: [],
  rates: {},
  filteredElements: {},
  pdfUri: null,
};

export const majorHealth = createSlice({
  name: 'majorHealth',
  initialState,
  reducers: {
    addPlanOptionId: (state, action: PayloadAction<number>) => {
      state.planOptionId.push(action.payload);
    },
    addAllPlanOption: (state, action: PayloadAction<Array<number>>) => {
      state.planOptionId = action.payload;
    },
    removeAllPlanOptionId: (state) => {
      state.planOptionId = [];
    },
    removePlanOptionId: (state, action: PayloadAction<number>) => {
      state.planOptionId = state.planOptionId.filter((id) => id !== action.payload);
    },
    clearPlanOptionIds: (state) => {
      state.planOptionId = [];
    },
    filterElements: (state, action: PayloadAction<{ languageId: number; countryId: number }>) => {
      const { languageId, countryId } = action.payload;
      state.filteredElements = {
        country: state.countries?.find((country) => country.value === countryId),
        language: state.languageQuote?.find((language) => language.value === languageId),
      };
    },
    resetMajorHealthState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCountriesActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.countries = action.payload;
      })
      .addCase(fetchGetCountriesActions.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetCountriesActions.rejected, (state) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchGetLanguageActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.languageQuote = action.payload;
      })
      .addCase(fetchGetLanguageActions.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetLanguageActions.rejected, (state) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchGetRatesActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.rates = action.payload;
      })
      .addCase(fetchGetRatesActions.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetRatesActions.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message || 'Failed to fetch rates';
      })
      .addCase(fetchShowCouteActions.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchShowCouteActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.pdfUri = action.payload;
      })
      .addCase(fetchShowCouteActions.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error.message || 'Failed to fetch quote PDF';
      });
  },
});

const sliceName = 'majorHealth';

// request Countries
export const fetchGetCountriesActions = createAsyncThunk(
  `${sliceName}/fetchGetCountriesActions`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCountries();
      if (response.data.status === 'success') {
        return response.data.data === null
          ? []
          : response.data.data.RBCountrys.map((item: { id: number; name: string }) => ({
              value: item.id,
              label: item.name,
            }));
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchGetLanguageActions = createAsyncThunk(
  `${sliceName}/fetchGetLanguageActions`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getLanguages();
      if (response.data.status === 'success') {
        return response.data.data === null
          ? []
          : response.data.data.RBCountrys.map((item: { id: number; name: string }) => ({
              value: item.id,
              label: item.name,
            }));
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchGetRatesActions = createAsyncThunk(
  `${sliceName}/fetchGetRatesActions`,
  async (result: { [key: string]: any }, { rejectWithValue }) => {
    try {
      const params = JSON.stringify(result);
      //const params = { params: result };

      const response = await getRate(params);
      console.log('respunsta??????====>', response);
      if (response.data.status === 'success') {
        return response.data;
      }
      return rejectWithValue('Failed to fetch rates');
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchShowCouteActions = createAsyncThunk(
  `${sliceName}/fetchShowCouteActions`,
  async (result: { [key: string]: any }, { rejectWithValue }) => {
    try {
      const params = JSON.stringify(result);

      // Uncomment this line when showCoute is implemented
      const response = await showCoute(params);
      console.log('showCoute response:', response.data.number);

      const paramsPdf = JSON.stringify({ number: response.data.number });
      const printCoutePdf = await printCoute(paramsPdf);
      console.log('printCoute response:', printCoutePdf);

      if (printCoutePdf.data.status === 'success') {
        return printCoutePdf.data.url;
      }
      return rejectWithValue('Failed to fetch quote PDF');
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// Action creators are generated for each case reducer function
export const {
  addPlanOptionId,
  removePlanOptionId,
  clearPlanOptionIds,
  filterElements,
  addAllPlanOption,
  removeAllPlanOptionId,
  resetMajorHealthState,
} = majorHealth.actions;

export default majorHealth.reducer;
