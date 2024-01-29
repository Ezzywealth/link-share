import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import AppLayout from '../components/Layouts/AppLayout';
import store from '../Redux/store/store';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Provider store={store}>
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
			<SessionProvider session={session}>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</SessionProvider>
		</Provider>
	);
}
