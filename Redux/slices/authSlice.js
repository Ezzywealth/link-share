import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	user: {},
	isLoading: false,
};

export const loginUser = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
	try {
		const response = await fetch('http://localhost:5000/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
		const data = await response.json();
		if (data.error) {
			return thunkAPI.rejectWithValue(data.error);
		}
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
