import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
	updateUserLoading: false,
	updateUserError: '',
	user: null,
	userLoading: false,
	userError: '',
};

export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
	const response = await fetch('http://localhost:3000/api/auth/updateUser', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
	const data = await response.json();
	return data;
});

export const fecthUser = createAsyncThunk('user/fetchUser', async (email) => {
	const response = await fetch('http://localhost:3000/api/auth/getUser', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	});
	const data = await response.json();
	return data;
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(updateUser.pending, (state) => {
			state.updateUserLoading = true;
		});
		builder.addCase(updateUser.fulfilled, (state, action) => {
			console.log(action.payload);
			state.updateUserLoading = false;
			state.user = action.payload.data;
			toast.success(action.payload.message);
		});
		builder.addCase(updateUser.rejected, (state, action) => {
			state.updateUserLoading = false;
			state.updateUserError = action.payload;
			toast.error(action.payload.message);
		});
		builder.addCase(fecthUser.pending, (state) => {
			state.userLoading = true;
		});
		builder.addCase(fecthUser.fulfilled, (state, action) => {
			console.log(action.payload);
			state.userLoading = false;
			state.user = action.payload.data;
		});
		builder.addCase(fecthUser.rejected, (state, action) => {
			state.userLoading = false;
			state.userError = action.payload;
		});
	},
});

export default userSlice.reducer;
