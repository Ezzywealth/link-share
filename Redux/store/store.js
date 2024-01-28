import { configureStore } from '@reduxjs/toolkit';
import helperReducer from '../slices/helperSlice';
import AuthReducer from '../slices/authSlice';
import userReducer from '../slices/userSlice';
import alertReducer from '../slices/alertSlice';

const store = configureStore({
	reducer: {
		auth: AuthReducer,
		helper: helperReducer,
		user: userReducer,
		alert: alertReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['auth/register', 'auth/login'],
			},
		}),
});

export default store;
