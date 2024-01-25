import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slices/authSlice';
import helperReducer from '../slices/helperSlice';

const store = configureStore({
	reducer: {
		auth: AuthReducer,
		helper: helperReducer,
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
