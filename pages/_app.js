import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import AppLayout from '../components/Layouts/AppLayout';
import store from '../Redux/store/store';
import '../styles/globals.css';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</SessionProvider>
		</Provider>
	);
}
