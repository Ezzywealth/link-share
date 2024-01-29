import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

const initialState = {
	isAuth: false,
	user: {},
	isLoading: false,
	registrationLoading: false,
	registrationError: '',
	loginLoading: false,
	loginError: '',
};

export const loginUser = createAsyncThunk('auth/login', async (payload, thunkApi) => {
	try {
		const response = await signIn('credentials', {
			redirect: false,
			email: payload.email,
			password: payload.password,
		});
		if (response.error) {
			// Use `rejectWithValue` to reject the promise with a specific value
			return thunkApi.rejectWithValue(response.error);
		} else {
			// Return the successful response
			return response;
		}
	} catch (error) {
		// Handle other errors
		throw error; // Re-throw the error to be caught by the rejectWithValue in case of non-HTTP errors
	}
});

export const registerUser = createAsyncThunk('auth/register', async (user) => {
	const response = await fetch('/api/auth/register', {
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
			state.loginLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.loginLoading = false;
			state.isAuth = true;
			toast.success('Login successful');
			state.user = action.payload;
			window.location.href = '/dashboard?page=links';
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.loginLoading = false;
			state.isAuth = false;
			state.user = {};
			toast.error('Login failed, please try again');
		});
		builder.addCase(registerUser.pending, (state) => {
			state.registrationLoading = true;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.registrationLoading = false;
			toast.success('Registration successful');
			window.location.href = '/login';
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.registrationLoading = false;
			toast.error(action.payload?.message);
		});
	},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
