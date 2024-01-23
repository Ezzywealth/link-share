import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slices/authSlice';
import helperReducer from '../slices/helperSlice';

const store = configureStore({
	reducer: {
		auth: AuthReducer,
		helper: helperReducer,
	},
});

export default store;
