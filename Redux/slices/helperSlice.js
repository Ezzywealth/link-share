import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
	theme: 'light',
	noOfLinks: 0,
	activateSaveBtn: false,
	newLinks: [],
	allLinks: [],
	saveLinksLoading: false,
	saveLinksError: false,
	fetchLinksLoading: false,
	fetchLinksError: false,
};

// a function to save the links to the database
export const saveLinksToDb = createAsyncThunk('link/createLink', async (links, thunkApi) => {
	const { user } = thunkApi.getState().user;
	const newLinks = links.map((link) => {
		return { ...link, user: user.id };
	});
	console.log(newLinks);
	const { data } = await axios.post(`http://localhost:3000/api/auth/saveLink`, { newLinks });
	console.log(data);
	return data;
});

export const fetchLinksFromDb = createAsyncThunk('link/fetchLinks', async (links, thunkApi) => {
	const { user } = thunkApi.getState().user;
	const { data } = await axios.post(`http://localhost:3000/api/auth/getLinks`, { user });
	console.log(data);
	return data;
});

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
	extraReducers: (builders) => {
		builders.addCase(saveLinksToDb.pending, (state, action) => {
			state.saveLinksLoading = true;
		});
		builders.addCase(saveLinksToDb.fulfilled, (state, action) => {
			state.saveLinksLoading = false;
			state.saveLinksError = false;
			state.newLinks = [];
			state.allLinks = [...action.payload.data, ...state.allLinks];
			state.activateSaveBtn = false;
			toast.success(action.payload.message);
		});
		builders.addCase(saveLinksToDb.rejected, (state, action) => {
			state.saveLinksLoading = false;
			state.saveLinksError = 'An error occurred while saving your links. Please try again later';
			toast.error(action.payload.message);
		});
		builders.addCase(fetchLinksFromDb.pending, (state, action) => {
			state.fetchLinksLoading = true;
		});
		builders.addCase(fetchLinksFromDb.fulfilled, (state, action) => {
			state.fetchLinksLoading = false;
			state.fetchLinksError = false;
			state.allLinks = action?.payload?.data;
		});
		builders.addCase(fetchLinksFromDb.rejected, (state, action) => {
			state.fetchLinksLoading = false;
			state.fetchLinksError = 'An error occurred while fetching your links. Please try again later';
		});
	},
});

export const { toggleTheme, increaseLinks, removeLink, toggleActivateSaveBtn, saveLinks, updateLink } = helperSlice.actions;
export default helperSlice.reducer;
