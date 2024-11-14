import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { contactUserQuote, getBrands, getQuoteByCar, getSubBrands, getVersionsBrands } from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import { catalogsGenericData } from '../types/catalogsGenericReducer';
import { calculateAge, changeFormat } from '@/utils/datesUtils';

export interface catalogsCarState {
  brands?: Array<any>;
  subBrands?: Array<any>;
  versionsBrand?: Array<any>;
  error?: null | string;
  fetching?: boolean;
  quoteUser?: object;
  quoteCar?: object;
  quoteRequestId?: number;
  assurance?: Array<any>;
  quoteCarSend: null;
}

const initialState: catalogsCarState = {
  brands: [],
  subBrands: [],
  versionsBrand: [],
  error: null,
  fetching: false,
  quoteCar: {},
  quoteUser: {},
  quoteRequestId: 0,
  assurance: [],
  quoteCarSend: null,
};

export const catalogsCar = createSlice({
  name: 'catalogsCar',
  initialState,
  reducers: {
    setQuoteUser: (state, action: PayloadAction<catalogsCarState>) => {
      state.quoteUser = action.payload;
    }, ///
    setQuoteCar: (state, action: PayloadAction<catalogsCarState>) => {
      state.quoteCar = action.payload;
    },
    setResetSubBrandversionsBrand: (state) => {
      state.subBrands = [];
      state.versionsBrand = [];
    },
    setRestErrorCar: (state) => {
      state.error = null;
      state.assurance = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandsActions.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrandsActions.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchBrandsActions.rejected, (state) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchSubBrandsAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.subBrands = action.payload;
      })
      .addCase(fetchSubBrandsAction.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchSubBrandsAction.rejected, (state) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchVersionsBrandsAction.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.versionsBrand = action.payload;
      })
      .addCase(fetchVersionsBrandsAction.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchVersionsBrandsAction.rejected, (state) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchQuoteCar.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.assurance = action.payload.assurance;
        state.quoteRequestId = action.payload.quoteRequestId ? action.payload.quoteRequestId : 0;
      })
      .addCase(fetchQuoteCar.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchQuoteCar.rejected, (state, action) => {
        state.fetching = false;
        state.error = 'error';
      })
      .addCase(fetchQuoteContact.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
      })
      .addCase(fetchQuoteContact.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchQuoteContact.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
      })
      .addCase(fetchQuoteSend.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.quoteCarSend = action.payload;
      })
      .addCase(fetchQuoteSend.pending, (state) => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(fetchQuoteSend.rejected, (state, action) => {
        state.fetching = false;
        state.error = 'error';
      });
  },
});

const sliceName = 'catalogsCar';

// request Brands
export const fetchBrandsActions = createAsyncThunk(
  `${sliceName}/fetchBrandsActions`,
  async ({ year }: catalogsGenericData, { rejectWithValue }) => {
    try {
      if (!year) {
        return rejectWithValue('error');
      }
      const response = await getBrands({ params: `anio=${year}&APP_ID=${getQueryStringIdPlatform()}` });
      if (response) {
        return response.data.data === null
          ? []
          : response.data.data.map((item) => ({ value: item.marca, label: item.marca }));
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchSubBrandsAction = createAsyncThunk(
  `${sliceName}/fetchSubBrandsAction `,
  async ({ year, brand, refresh = false }: catalogsGenericData, { rejectWithValue }) => {
    try {
      if (refresh) {
        return { subBrands: [] };
      }
      if (!year) {
        return rejectWithValue('error');
      }

      const response = await getSubBrands({
        params: `anio=${year}&marca=${brand}&APP_ID=${getQueryStringIdPlatform()}`,
      });
      return response.data.data === null
        ? []
        : response.data.data.map((item) => ({ value: item.submarca, label: item.submarca }));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchVersionsBrandsAction = createAsyncThunk(
  `${sliceName}/fetchVersionsBrandsAction`,
  async ({ year, brand, subBrand }: catalogsGenericData, { rejectWithValue }) => {
    try {
      if (!year || !brand || !subBrand) {
        return rejectWithValue('error');
      }
      const response = await getVersionsBrands({
        params: `anio=${year}&marca=${brand}&submarca=${subBrand}&APP_ID=${getQueryStringIdPlatform()}`,
      });
      console.log('response.data.data', response.data.data);
      return response.data.data === null
        ? []
        : response.data.data.map((item) => ({ value: item.version, label: item.descripcion }));
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuoteCar = createAsyncThunk(
  `${sliceName}/fetchQuoteCar`,
  async ({ firstTime = true }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const catalogsGenericReducer = state?.catalogsGenericReducer;
      const { pushToken } = catalogsGenericReducer;
      const catalogsCar = state?.catalogsCarReducer;
      const { quoteCar, quoteUser, quoteRequestId, versionsBrand } = catalogsCar;

      const yearsOld = calculateAge(quoteUser.birthdate);
      const birthdate = changeFormat(quoteUser.birthdate);
      const appId = getQueryStringIdPlatform();
      const version = versionsBrand.find((item) => item.value === quoteCar.version);

      if (!version) {
        return rejectWithValue('Version not found');
      }

      const params = {
        params: `poliza_alias=${quoteUser.alias}&push_token=${pushToken}&APP_ID=${appId}&anio=${quoteCar.year}&marca=${quoteCar.brand}&sub_marca=${quoteCar.model}&descripcion=${version.label}&version=${version.value}&plan=${quoteCar.coverage}&pagos=${quoteCar.payment_method}&nombre=null&appaterno=null&apmaterno=null&cp=${quoteUser.postalCode}&edad=${yearsOld}&genero=${quoteUser.gender}&cumpleanios=${birthdate}&email=${quoteUser.email}&cus_lada=${quoteUser.phone_code}&telefono=${quoteUser.phone}${firstTime ? '&id_cotizacion=0' : `&id_cotizacion=${quoteRequestId}`}`,
      };

      const response = await getQuoteByCar(params);

      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }
      const payloadData = { assurance: response.data.assurance };
      if (firstTime) {
        payloadData.quoteRequestId = response.data.assurance[0].Id;
      }
      return payloadData;
    } catch (error) {
      console.log('entro2', error);
      return rejectWithValue(error);
    }
  },
);
export const fetchQuoteContact = createAsyncThunk(
  `${sliceName}/fetchQuoteContact`,
  async (x, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const userReducer = state?.userReducer;
      const catalogsCarReducer = state?.catalogsCarReducer;
      const { id, loggedIn } = userReducer.user;
      const { email, phone, phone_code } = catalogsCarReducer?.quoteUser;
      const params = { params: `id=${loggedIn ? id : 0}&email=${email}&cus_lada=${phone_code}&phone=${phone}` };

      const response = await contactUserQuote(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuoteSend = createAsyncThunk(
  `${sliceName}/fetchQuoteSend`,
  async ({ quoteId, insuranceId }: object, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const userReducer = state?.userReducer;
      const catalogsGenericReducer = state?.catalogsGenericReducer;
      const catalogsCarReducer = state?.catalogsCarReducer;
      const { profile, loggedIn } = userReducer;
      const { pushToken } = catalogsGenericReducer;
      const { phone, email, phone_code } = catalogsCarReducer?.quoteUser;
      let params = {
        params: `id=${loggedIn ? profile.id : 0}&email=${email}&cus_lada=${phone_code}&phone=${phone}&id_quote=${quoteId}&id_aseguradora=${insuranceId}&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`,
      };

      console.log('paramsCard===>', params);
      const response = await contactUserQuote(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Action creators are generated for each case reducer function
export const { setQuoteUser, setQuoteCar, setResetSubBrandversionsBrand, setRestErrorCar } = catalogsCar.actions;

export default catalogsCar.reducer;
