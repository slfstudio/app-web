import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getInsuranceCompanies, getInsuranceLicitacionCompanies } from '@/api/websersives';

export interface catalogsState {
  insurances?: Array<any> | null;
  modalGoPolicyAdd?: boolean;
  insurancesLicitacion?: Array<any> | null;
  fetching?: boolean;
  error?: string;
}

const initialState: catalogsState = {
  insurances: null,
  modalGoPolicyAdd: false,
  insurancesLicitacion: null,
  fetching: false,
  error: '',
};

export const catalogs = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setActionModalGoBackPolicyAdd: (state, action) => {
      state.modalGoPolicyAdd = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetInsurances.fulfilled, (state, action) => {
        state.fetching = false;
        state.error = '';
        state = { ...state, ...action.payload };
      })
      .addCase(fetchGetInsurances.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchGetInsurances.rejected, (state, action) => {
        state.fetching = false;
      });
  },
});

const sliceName = 'catalogs';

export const fetchGetInsurances = createAsyncThunk(
  `${sliceName}/fetchGetInsurances`,
  async ({ isLicitacion }, { rejectWithValue }) => {
    try {
      if (!isLicitacion) {
        const response = await getInsuranceCompanies();
        return { insurances: response.data.data.aseguradoras };
      } else {
        const response = await getInsuranceLicitacionCompanies();
        return { insurancesLicitacion: response.data.data.aseguradoras };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Action creators are generated for each case reducer function
export const { setActionModalGoBackPolicyAdd } = catalogs.actions;

export default catalogs.reducer;
