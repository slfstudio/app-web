import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { payloadLoginData } from '../types/userReducerType';
import {
  changePassword,
  getUserProfile,
  logOut,
  passwordRecovery,
  signIn,
  signInSocial,
  signUp,
  updateUserProfile,
} from '@/api/websersives';
import { getQueryStringIdPlatform } from '@/utils/generalFuncions';
import { RootState } from '../store';
import { changeFormat } from '@/utils/datesUtils';
import Profile from '@/routes/MainStack/views/Profile';
import { dateFormat, genderFormat } from '@/utils/genericFunctions';
import formatSocialData from '@/utils/formatSocialData';

export interface userState {
  loggedIn?: boolean;
  fetching?: boolean;
  error?: string | undefined;
  profile?: object;
  signupDone?: boolean;
  recoveryDone?: boolean;
  email?: string;
  password?: string;
  remember?: boolean;
  passwordComplete?: boolean;
}
interface signupData {
  email: string;
  name: string;
  lastName: string;
  gender: string;
  nationality: string;
  birthdate: string;
  password: string;
}
const initialState: userState = {
  loggedIn: false,
  fetching: false,
  error: '',
  profile: {
    detalles: {},
    img_name: '',
  },
  recoveryDone: false,
  passwordComplete: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.remember = action.payload.remember;
    },
    setResetCredentials: (state) => {
      state.email = '';
      state.password = '';
      state.remember = false;
    },
    setUser: (state, action: PayloadAction<userState>) => {
      state.loggedIn = true;
    },
    setResetSignup: (state) => {
      state.signupDone = false;
    },
    setResetRecover: (state) => {
      state.recoveryDone = false;
    },
    setCleanErrorUser: (state) => {
      state.error = '';
    },
    setImageUpdate: (state, action: PayloadAction<userState>) => {
      state.profile.img_name = action.payload;
    },
    setChangePasswordComplete: (state) => {
      state.passwordComplete = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loggedIn = true;
        state.fetching = false;
        state.error = '';
      })
      .addCase(fetchLogin.pending, (state) => {
        state.fetching = true;
        state.error = '';
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loggedIn = false;
        state.fetching = false;
        state.error = action.payload;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.profile = state.remember ? state.profile : { detalles: {}, telefonos: [{ celular: '' }] };
        state.loggedIn = false;
        state.fetching = false;
      })
      .addCase(fetchLogout.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.fetching = false;
      })
      //
      .addCase(fetchSignup.fulfilled, (state) => {
        state.fetching = false;
        state.error = '';
        state.signupDone = true;
      })
      .addCase(fetchSignup.pending, (state) => {
        state.fetching = true;
        state.error = '';
        state.signupDone = false;
      })
      .addCase(fetchSignup.rejected, (state) => {
        state.fetching = false;
        state.error = '1';
      })
      //
      .addCase(fetchRecovery.fulfilled, (state) => {
        state.fetching = false;
        state.error = '';
        state.recoveryDone = true;
      })
      .addCase(fetchRecovery.pending, (state) => {
        state.fetching = true;
        state.error = '';
        state.recoveryDone = false;
      })
      .addCase(fetchRecovery.rejected, (state) => {
        state.fetching = false;
        state.error = '1';
      })
      //
      .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state.profile = action.payload;
      })
      .addCase(fetchUpdateProfile.pending, (state) => {
        state.fetching = true;
        state.error = '';
        //state.recoveryDone = false;
      })
      .addCase(fetchUpdateProfile.rejected, (state) => {
        state.fetching = false;
        state.error = '1';
      })
      //password
      .addCase(fetchChangePassword.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state.passwordComplete = true;
      })
      .addCase(fetchChangePassword.pending, (state) => {
        state.fetching = true;
        state.error = '';
        state.passwordComplete = false;
      })
      .addCase(fetchChangePassword.rejected, (state) => {
        state.fetching = false;
        state.error = '1';
        state.passwordComplete = false;
      })

      // Add these new cases for fetchLoginGoogle
      .addCase(fetchLoginGoogle.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.loggedIn = true;
        state.fetching = false;
        state.error = '';
      })
      .addCase(fetchLoginGoogle.pending, (state) => {
        state.fetching = true;
        state.error = '';
      })
      .addCase(fetchLoginGoogle.rejected, (state, action) => {
        state.loggedIn = false;
        state.fetching = false;
        state.error = action.payload;
      });
  },
});

const sliceName = 'user';

// request Auth
export const fetchLogin = createAsyncThunk(
  `${sliceName}/fetchLogin`,
  async ({ email, password }: payloadLoginData, { rejectWithValue }) => {
    try {
      const paramsLogin = {
        params: `email=${email}&password=${password}&push_token=null&APP_ID=${getQueryStringIdPlatform()}`,
      };
      const loginResponse = await signIn(paramsLogin);
      if (loginResponse && loginResponse.data && loginResponse.data.status === 'success') {
        const paramsProfile = { params: `id=${loginResponse.data.data.id}&APP_ID=${getQueryStringIdPlatform()}` };
        const profileResponse = await getUserProfile(paramsProfile);
        const profile = profileResponse.data.data;
        const { detalles } = profile;
        const convertDate = new Date(detalles.cumpleanos_short);
        detalles.edad = new Date().getFullYear() - convertDate.getFullYear();
        const user = {
          ...loginResponse.data.data,
          ...profile,
          detalles,
        };
        return user;
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchLogout = createAsyncThunk(`${sliceName}/fetchLogout`, async (_, { getState }) => {
  try {
    const state = getState();
    //const {pushToken} = getState().catalogsGenericReducer;
    const { id } = state.userReducer.profile;
    const params = `cus_id=${id}&push_token=null&APP_ID=${getQueryStringIdPlatform()}`;
    const response = await logOut(params);
    if (response.data.status === 'success') {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
});

export const fetchSignup = createAsyncThunk(
  `${sliceName}/fetchSignup`,
  async (payload: signupData, { getState, rejectWithValue }) => {
    try {
      const { pushToken } = getState().catalogsGenericReducer;
      const { email, name, lastName, gender, nationality, birthdate, password } = payload;
      let params = `email=${email}&password=${password}&nombre=${name}&segundo_nombre=&`;
      params += `apellido_paterno=${lastName}&apellido_materno=""&`;
      params += `genero=${gender}&cumpleanos=${changeFormat(birthdate)}&nacionalidad=${nationality}&`;
      params += `rfc=&homoclave=&estado_civil=&APP_ID=${getQueryStringIdPlatform()}&idaction=1&id_lang=0&push_token=${pushToken}`;

      const response = await signUp(params);
      if (response.data.status !== 'error') {
        return {};
      } else {
        rejectWithValue('error');
      }
    } catch (error) {
      rejectWithValue('error');
    }
  },
);
export const fetchRecovery = createAsyncThunk(
  `${sliceName}/fetchRecovery`,
  async ({ email }, { getState, rejectWithValue }) => {
    try {
      let response = await passwordRecovery({ params: email });
      if (response.data.status !== 'error') {
        return {};
      } else {
        rejectWithValue('error');
      }
    } catch (error) {
      rejectWithValue('error');
    }
  },
);

export const fetchUpdateProfile = createAsyncThunk(
  `${sliceName}/fetchUpdateProfile`,
  async (values, { getState, rejectWithValue }) => {
    try {
      const {
        profile: { id },
      } = getState().userReducer;

      console.log('values===>', values);
      let params = `user_id=${id}&cus_rfc=${values.rfc}&cus_birthday=${changeFormat(values.birthdate)}&cus_phone=${values.phone}&`;
      params += `cus_homoclave=0&cus_nationality=&cus_cellphone=${values.phone}&cus_apaterno=${values.lastName}&`;
      params += `id_gender=${values.gender}&cus_lada=${values.phone_code}&`;
      params += `country=${values.country}&state=${values.state_providence}&city=${values.city}&cp=${values.postalCode}&street=${values.adress_line_2}&inumber=&enumber=&colony=tasquillo&town=&`;
      params += `df_rfc=&df_razon=&df_country=null&df_state=null&df_city=null&df_cp=null&df_street=null&df_inumber=null&df_enumber=null&`;
      params += `df_colony=null&df_town=&APP_ID=${getQueryStringIdPlatform()}`;

      console.log('Profile=====>', params);
      const response = await updateUserProfile({ params });

      if (response.data.status !== 'error') {
        let params = { params: `id=${id}&APP_ID=${getQueryStringIdPlatform()}` };
        const response = await getUserProfile(params);
        const profile = response.data.data;
        console.log('profule====>', profile);
        return profile;
      } else {
        rejectWithValue('error');
      }
    } catch (error) {
      console.error('error', error);
      rejectWithValue('error');
    }
  },
);

export const fetchLoginGoogle = createAsyncThunk(
  `${sliceName}/fetchLoginGoogle`,
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { pushToken } = getState().catalogsGenericReducer;

      const data = formatSocialData(payload);
      const types = 2; //google

      let queryString = '';

      if (types) {
        queryString = queryString + `id_social_network=${types}`;
      }
      if (data.id) {
        queryString = queryString + `&id=${data.id}`;
      }
      if (data.email) {
        queryString = queryString + `&email=${data.email}`;
      }

      if (data.gender) {
        queryString = queryString + `&gender=${data.gender ? (data.gender === 1 ? 'male' : 'female') : ''}`;
      } else {
        queryString = queryString + `&gender=3`; // si no lo devuelve el login con fb o google entonces ponemos por default 3
      }

      if (data.name) {
        queryString = queryString + `&name=${data.name}`;
      } else {
        queryString = queryString + `&name=`;
      }

      if (data.name) {
        queryString = queryString + `&givenName=${data.name}`;
      } else {
        queryString = queryString + `&givenName=`;
      }

      if (data.lastName) {
        queryString = queryString + `&family_name=${data.lastName}`;
      } else {
        queryString = queryString + `&family_name=`;
      }

      try {
        if (data.birthday.trim()) {
          queryString = queryString + `&birthday=${data.birthday}`;
        } else {
          queryString = queryString + `&birthday=`;
        }
      } catch (ex) {
        queryString = queryString + `&birthday=`;
      }

      if (data.picture) {
        queryString = queryString + `&photo=${data.picture}`;
      } else {
        queryString = queryString + `&photo=`;
      }

      if (pushToken) {
        queryString = queryString + `&push_token=${pushToken}&APP_ID=${getQueryStringIdPlatform()}`;
      }

      const responseApi = await signInSocial({ params: queryString });
      let status = responseApi.data.status;
      if (status === 'success') {
        let params = { params: `id=${responseApi.data.data.id}&APP_ID=${getQueryStringIdPlatform()}` };
        console.log('params==>', params);
        try {
          const response2 = await getUserProfile(params);

          let profile = response2.data.data;
          if (response2.data.status !== 'error') {
            const { detalles } = profile;

            profile = {
              ...profile,
              detalles,
            };

            const user = {
              user: responseApi.data.data,
              profile: profile,
            };

            return user;
          } else {
            return rejectWithValue(response2.data);
          }
        } catch (ex2) {
          // console.log("ssd-", ex2)
          return rejectWithValue(ex2);
        }
      } else {
        return rejectWithValue(responseApi.data);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchChangePassword = createAsyncThunk(
  `${sliceName}/fetchChangePassword`,
  async (payload, { getState, rejectWithValue }) => {
    try {
      const {
        profile: { id },
      } = getState().userReducer;

      const response = await changePassword({
        params: `cus_id=${id}&pass_old=${payload.currentPassword}&pass_new=${payload.newPassword}&APP_ID=${getQueryStringIdPlatform()}`,
      });
      if (response.data.status !== 'error') {
        return {};
      } else {
        rejectWithValue('error');
      }
    } catch (error) {
      rejectWithValue('error');
    }
  },
);

// Action creators are generated for each case reducer function
export const {
  setUser,
  setResetSignup,
  setResetRecover,
  setCredentials,
  setResetCredentials,
  setCleanErrorUser,
  setImageUpdate,
  setChangePasswordComplete,
} = user.actions;

export default user.reducer;
