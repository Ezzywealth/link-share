import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showCopyAlert: false,
};

const alertSlice = createSlice({
	name: 'alertSlice',
	initialState,
	reducers: {
		toggleCopyModal: (state, action) => {
			state.showCopyAlert = action.payload;
		},
	},
});

export default alertSlice.reducer;
export const { toggleCopyModal } = alertSlice.actions;
