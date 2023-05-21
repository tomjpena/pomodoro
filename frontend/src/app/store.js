import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import dataReducer from '../features/data/dataSlice'

//reducers get imported into the store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});