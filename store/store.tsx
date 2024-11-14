import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '@/store/reducer/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import catalogsGenericReducer from './reducer/catalogsGenericReducer';
import catalogsReducer from './reducer/catalogsReducer';
import incidentReportReducer from './reducer/incidentReportReducer';
import messagerReducer from './reducer/messagerReducer';
import pointsReducer from './reducer/pointsReducer';
import policiesReducer from './reducer/policiesReducer';
import catalogsCarReducer from './reducer/catalogsCarReducer';
import majorHealthReducer from './reducer/majorHealthReducer';
import travelAssistReducer from './reducer/travelAssistReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};
const reducers = combineReducers({
  userReducer,
  catalogsReducer,
  catalogsGenericReducer,
  catalogsCarReducer,
  incidentReportReducer,
  messagerReducer,
  pointsReducer,
  policiesReducer,
  majorHealthReducer,
  travelAssistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export type RootReducer = ReturnType<typeof reducers>;

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
