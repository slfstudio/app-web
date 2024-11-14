import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { quoteBusinessDamage, quoteHealth, quoteHome, quotePersonalAccidents } from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import { calculateAge, changeFormat, formatDate } from '@/utils/datesUtils';

export interface catalogGenericState {
  brands?: Array<any>;
  subBrands?: Array<any>;
  versionsBrand?: Array<any>;
  quoteDone?: boolean;
  isConnected?: boolean;
  pushToken?: null | string;
  item?: null | object;
  error?: null | string;
  fetching?: boolean;
  quoteRequestId?: null | number;
  autoComplete?: boolean;
  beneficiariesArray?: Array<any>;
  quoteUser?: object;
  quoteCar?: object;
  quoteHealthUser?: object;
  quoteHome?: boolean;
}

const initialState: catalogGenericState = {
  brands: [],
  subBrands: [],
  versionsBrand: [],
  quoteDone: false,
  isConnected: true,
  pushToken: null,
  item: null,
  error: null,
  fetching: false,
  quoteRequestId: null,
  autoComplete: false,
  beneficiariesArray: [],
  quoteCar: {},
  quoteUser: {},
  quoteHealthUser: {},
  quoteHomeUser: {},
  quoteHome: false,
};

export const catalogGeneric = createSlice({
  name: 'catalogGeneric',
  initialState,
  reducers: {
    setResetError: (state) => {
      state.error = null;
    },
    setQuoteCollectorData: (state, action: PayloadAction<catalogGenericState>) => {
      state = { ...state, ...action.payload };
    },
    setNetworkStatus: (state, action: PayloadAction<catalogGenericState>) => {
      state = { ...state, ...action.payload };
    },
    setAttribute: (state, action: PayloadAction<catalogGenericState>) => {
      state = { ...state, ...action.payload };
    },
    setBeneficiaries: (state, action: PayloadAction<catalogGenericState>) => {
      state.beneficiariesArray = action.payload;
    },
    setQuoteHealthUser: (state, action: PayloadAction<catalogGenericState>) => {
      state.quoteHealthUser = action.payload;
    },
    setQuoteHomeUser: (state, action: PayloadAction<catalogGenericState>) => {
      state.quoteHomeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetchQuoteHealthSend
      .addCase(fetchQuoteHealthSend.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
      })
      .addCase(fetchQuoteHealthSend.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchQuoteHealthSend.rejected, (state, action) => {
        state.fetching = false;
      })
      //fetchQuoteHomeSend
      .addCase(fetchQuoteHomeSend.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = null;
        state.quoteHome = true;
      })
      .addCase(fetchQuoteHomeSend.pending, (state) => {
        state.fetching = true;
        state.quoteHome = false;
        state.error = null;
      })
      .addCase(fetchQuoteHomeSend.rejected, (state, action) => {
        state.fetching = false;
        state.quoteHome = false;
        state.error = action.payload;
      });
  },
});

const sliceName = 'catalogGeneric';

export const fetchQuoteHomeSend = createAsyncThunk(
  `${sliceName}/fetchQuoteHomeSend`,
  async (values, { rejectWithValue, getState }) => {
    try {
      const stateStore = getState();
      const catalogsGenericReducer = stateStore?.catalogsGenericReducer;
      const { pushToken, quoteHomeUser } = catalogsGenericReducer;

      const {
        postalCode,
        housingStatus,
        suburb,
        city,
        state_providence,
        sumAssured,
        content,
        liability,
        crystals = null,
        rubble = 0,
      } = quoteHomeUser;

      const { phone, phone_code, email, name } = values;
      const params = {
        params: `name=${name}&e_mail=${email}&cus_lada=${phone_code}&phone=${phone}&zip_code=${postalCode}&colony=${suburb}&delegation=${city}&state=${state_providence}&id_esquema=${housingStatus === 'Owner' ? 'Propietario' : 'Inquilino'}&suma_asegurada=null&valor_vivienda=null&contenido=${content}&responsabilidad_civil=${liability}&cristales=${crystals}&remocion_escombros=${rubble}&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`,
      };
      const response = await quoteHome(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuoteHealthSend = createAsyncThunk(
  `${sliceName}/fetchQuoteHealthSend`,
  async (x, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const catalogsGenericReducer = state?.catalogsGenericReducer;
      const { pushToken } = catalogsGenericReducer;
      const { insurancesType, policyAlias, name, lastName, secondLastName, gender, date, phone, email, postalCode } =
        catalogsGenericReducer?.quoteHealthUser;
      const beneficiariesArray = catalogsGenericReducer?.beneficiariesArray;
      let queryStringBeneficiaries = [
        {
          nombre: `${name} ${lastName} ${secondLastName}`,
          correo: email,
          id_gender: gender,
          id_cus_parents: 7,
          nacimiento: changeFormat(date),
          telefono: phone,
          cp: postalCode,
        },
      ];
      for (let item of beneficiariesArray) {
        queryStringBeneficiaries.push({
          nombre: item.nombre,
          correo: item.correo,
          id_gender: item.id_gender,
          id_cus_parents: item.id_cus_parents,
          nacimiento: changeFormat(item.nacimiento),
          telefono: '',
          cp: '',
        });
      }
      const queryString = {
        alias: policyAlias,
        tipo_seguro: insurancesType.toUpperCase(),
        datos: queryStringBeneficiaries,
        push_token: pushToken,
        APP_ID: getQueryStringIdPlatform(),
      };

      const json = JSON.stringify(queryString);
      const unquoted = json.replace(/"([^"]+)":/g, '$1:');
      const response = await quoteHealth(unquoted);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuotePersonalAccidentsAction = createAsyncThunk(
  `${sliceName}/fetchBrandsActions`,
  async (x, { rejectWithValue, getState }) => {
    try {
      const stateStore = getState();
      const catalogsGenericReducer = stateStore?.catalogsGenericReducer;
      const { pushToken } = catalogsGenericReducer;
      const {
        alias,
        name,
        lastName,
        secondLastName,
        gender,
        date,
        email,
        phone,
        street,
        postalCode,
        suburb,
        city,
        state,
        sumAssured,
      } = catalogsGenericReducer?.quotePersonalAccidentsData;
      const params = {
        params: `alias=${alias}&a_paterno=${lastName}&a_materno=${secondLastName}&name=${name}&e_mail=${email}&phone=${phone}&nationality=Mexicana&day=${moment(date).format('D')}&month=${moment(date).format('MM')}&year=${moment(date).format('YYYY')}&zip_code=${postalCode}&genero=${gender}&colony=${suburb}&suma_asegurada=${sumAssured}&delegation=${city}&state=${state}&street=${street}&id_tipo_seguro=1020&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`,
      };

      const response = await quotePersonalAccidents(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuoteLifeAction = createAsyncThunk(
  `${sliceName}/fetchBrandsActions`,
  async (x, { rejectWithValue, getState }) => {
    try {
      const stateStore = getState();
      const catalogsGenericReducer = stateStore?.catalogsGenericReducer;
      const { pushToken } = catalogsGenericReducer;
      const {
        alias,
        name,
        lastName,
        secondLastName,
        gender,
        date,
        email,
        phone,
        street,
        postalCode,
        suburb,
        city,
        state,
        sumAssured,
        smoke,
        coverage,
      } = catalogsGenericReducer?.quotePersonalAccidentsData;
      const params = {
        params: `alias=${alias}&a_paterno=${lastName}&a_materno=${secondLastName}&name=${name}&e_mail=${email}&phone=${phone}&nationality=Mexicana&day=${twoDigits(parseInt(moment(date).format('D')))}&month=${moment(date).format('MM')}&year=${moment(date).format('YYYY')}&zip_code=${postalCode}&genero=${gender}&colony=${suburb}&delegation=${city}&state=${state}&street=${street}&sumassured=${sumAssured}&smoke=${smoke}&coverage=${coverage}&id_tipo_seguro=1023&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`,
      };

      const response = await quotePersonalAccidents(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchQuoteBusinessDamageAction = createAsyncThunk(
  `${sliceName}/fetchBrandsActions`,
  async (x, { rejectWithValue, getState }) => {
    try {
      const stateStore = getState();
      const catalogsGenericReducer = stateStore?.catalogsGenericReducer;
      const { pushToken } = catalogsGenericReducer;
      const {
        alias,
        name,
        lastName,
        secondLastName,
        email,
        phone,
        propertyType,
        value,
        street,
        postalCode,
        suburb,
        city,
        state,
        content,
        coverage,
        crystals,
        civilLiability,
      } = catalogsGenericReducer?.quoteBusinessDamageData;

      const remocion_escombros = _.find(coverage, { key: 1 }).checked;

      const params = {
        params: `alias=${alias}&name=${name}&a_paterno=${lastName}&a_materno=${secondLastName}&street=${street}&colony=${suburb}&delegation=${city}&state=${state}&zip_code=${postalCode}&tipo_inmueble=${propertyType}&valor=${value}&e_mail=${email}&phone=${phone}&content=${content}&responsabilidad_civil=${civilLiability}&cristales=${crystals}&remocion_escombros=${remocion_escombros}&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`,
      };

      const response = await quoteBusinessDamage(params);
      if (response.data.status !== 'success') {
        return rejectWithValue('error');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// Action creators are generated for each case reducer function
export const {
  setQuoteCollectorData,
  setNetworkStatus,
  setAttribute,
  setBeneficiaries,
  setQuoteHealthUser,
  setResetError,
  setQuoteHomeUser,
} = catalogGeneric.actions;

export default catalogGeneric.reducer;
