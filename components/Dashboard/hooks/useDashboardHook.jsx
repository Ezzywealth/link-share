import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLinksFromDb, increaseLinks, removeLink, saveLinks, saveLinksToDb, toggleActivateSaveBtn, updateLink } from '../../../Redux/slices/helperSlice';

const useDashboardHook = () => {
	const dispatch = useDispatch();
	const [activateSave, setActivateSave] = useState(false);
	const { noOfLinks, activateSaveBtn, newLinks, saveLinksLoading } = useSelector((state) => state.helper);

	const styles = {
		dropdownIndicator: (base) => ({
			padding: 0,
			margin: '0 0.5rem',
		}),
		indicatorSeparator: (base) => ({
			display: 'none',
		}),
		option: (base, state) => ({
			...base,
			background: state.isSelected ? '#f5f5f5' : state.isDisabled ? '#EFEBFF' : 'transparent',
			color: state.isSelected ? '#333' : state.isDisabled ? '#737373' : '#333',
			padding: '0.5rem 1rem',
			fontSize: '14px',
			fontWeight: '400',
			borderRadius: '0.5rem',
			cursor: state.isSelected ? 'pointer' : state.isDisabled ? 'not-allowed' : 'pointer',
			'&:hover': {
				background: state.isSelected ? '#f5f5f5' : state.isDisabled ? '#EFEBFF' : '#f5f5f5',
			},
		}),
		control: (base) => ({
			...base,
			border: '1px solid #d9d9d9',
			background: 'transparent',
			width: '100%',
			boxShadow: 'none',
			'&:focus': {
				outline: 'none',
			},
			'&:hover': {
				outline: 'none',
				border: '1px solid #d9d9d9',
			},
		}),
	};

	const handleAddNewLink = () => {
		dispatch(increaseLinks());
	};

	const handleRemoveLink = (id) => {
		dispatch(removeLink(id));
	};

	const updateLinks = (id, selectedOption, linkAddress) => {
		dispatch(updateLink({ id, address: linkAddress, name: selectedOption.value, color: selectedOption.color }));
	};

	const handleSaveLinks = () => {
		dispatch(saveLinksToDb(newLinks));
		// dispatch(saveLinks());
	};

	// This function is used to dispatch the action to toggle the activateSaveBtn state
	const handleActivateSave = (selectedOption, linkAddress) => {
		dispatch(toggleActivateSaveBtn(true));
	};

	const deActivateSave = () => {
		dispatch(toggleActivateSaveBtn(false));
	};

	const fetchLinks = () => {
		dispatch(fetchLinksFromDb());
	};

	return { styles, noOfLinks, handleAddNewLink, handleRemoveLink, activateSave, setActivateSave, handleActivateSave, deActivateSave, activateSaveBtn, newLinks, updateLinks, handleSaveLinks, saveLinksLoading, fetchLinks };
};

export default useDashboardHook;
