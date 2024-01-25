import React, { useEffect, useState } from 'react';
import { toggleTheme } from '../../Redux/slices/helperSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.theme === 'dark') {
			// if the user has set a theme, set the theme to the theme in the localstorage
			dispatch(toggleTheme('dark'));
			handleTheme('dark');
		} else if (!localStorage.theme && !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// if the user has not set a theme and the system theme is dark, set the theme to dark
			handleTheme('dark');
			dispatch(toggleTheme('dark'));
		} else {
			// if the user has not set a theme and the system theme is light, set the theme to light
			handleTheme('light');
			dispatch(toggleTheme('light'));
		}
	}, []);

	// a function the handle the theme of the app using the user preference
	const handleTheme = (color) => {
		if (color === 'dark') {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
			setTheme('dark');
			dispatch(toggleTheme('dark'));
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
			dispatch(toggleTheme('light'));
		}
	};
	return (
		<div>
			<ToastContainer />
			{children}
		</div>
	);
};

export default AppLayout;
