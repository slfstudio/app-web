import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getInsuranceCompanies, getInsuranceLicitacionCompanies } from '@/api/websersives';

export interface incidentReportState {
  fetching?: boolean;
  error?: string;
}

const initialState: incidentReportState = {
  fetching: false,
  error: '',
};

export const incidentReport = createSlice({
  name: 'incidentReport',
  initialState,
  reducers: {
    setIncidentReports: (state, action) => {
      state.fetching = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIncidentReports } = incidentReport.actions;

export default incidentReport.reducer;
