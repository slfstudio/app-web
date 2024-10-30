import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export interface pointsState {
  fetching?: boolean;
  error?: string;
  points?: object;
}

const initialState: pointsState = {
  fetching: false,
  error: '',
  points: {},
};

export const points = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.fetching = false;
      state.points = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPoints } = points.actions;

export default points.reducer;
