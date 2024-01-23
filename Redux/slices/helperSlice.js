import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
};

export const helperSlice = createSlice({
	name: 'helper',
	initialState,
	reducers: {
		toggleTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

export const { toggleTheme } = helperSlice.actions;
export default helperSlice.reducer;
