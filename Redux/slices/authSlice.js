import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'next-auth/react';

const initialState = {
	isAuth: false,
	user: {},
	isLoading: false,
	registrationLoading: false,
	registrationError: '',
};

export const loginUser = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
	const response = await signIn('credentials', {
		redirect: false,
		email: payload.email,
		password: payload.password,
	});
	console.log(response);
	const data = await response.json();
	console.log(data);
	return data;
});

export const registerUser = createAsyncThunk('auth/register', async (user) => {
	const response = await fetch('http://localhost:3000/api/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
	const data = await response.json();
	return data;
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isAuth = true;
			state.user = action.payload;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.isAuth = false;
			state.user = {};
		});
		builder.addCase(registerUser.pending, (state) => {
			state.registrationLoading = true;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.registrationLoading = false;
			state.isAuth = true;
			window.location.href = '/login';
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.registrationLoading = false;
			state.isAuth = false;
			state.user = {};
		});
	},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
