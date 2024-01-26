import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
	noOfLinks: 0,
	activateSaveBtn: false,
	newLinks: [],
	allLinks: [],
};

export const helperSlice = createSlice({
	name: 'helper',
	initialState,
	reducers: {
		toggleTheme: (state, action) => {
			state.theme = action.payload;
		},
		increaseLinks: (state) => {
			if (state.newLinks.length === 2) {
				return;
			}
			const obj = {
				id: state.newLinks.length + 1,
				name: '',
				value: '',
				color: '',
				address: '',
			};
			state.newLinks.unshift(obj);
		},
		removeLink: (state, action) => {
			console.log(action.payload);
			state.noOfLinks -= 1;
			state.newLinks = state.newLinks.filter((link) => link.id !== action.payload);
		},
		toggleActivateSaveBtn: (state, action) => {
			state.activateSaveBtn = action.payload;
		},
		saveLinks: (state) => {
			// a function to add the new links to the allLinks array
			state.allLinks = [...state.newLinks, ...state.allLinks];
			state.newLinks = [];
			state.activateSaveBtn = false;
		},
		updateLink: (state, action) => {
			// a function to update the details of the new links in the newLinks array
			const { id, name, label, color, address } = action.payload;
			const link = state.newLinks.find((link) => link.id === id);
			if (!link) return;
			link.name = name;
			link.color = color;
			link.address = address;
		},
	},
});

export const { toggleTheme, increaseLinks, removeLink, toggleActivateSaveBtn, saveLinks, updateLink } = helperSlice.actions;
export default helperSlice.reducer;
