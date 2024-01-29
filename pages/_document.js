import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/icon.jpg' style={{ borderRadius: '10px' }} />
					<link rel='icon' type='image/svg+xml' href='data:image/svg+xml,%3Csvg ' />
					<link rel='apple-touch-icon' href='/icon.jpg' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta name='theme-color' content='#ffffff' />
					<meta name='robots' content='follow, index' />
					<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
					<link rel='manifest' href='/manifest.json' />
				</Head>
				<body className='bg-gray-100 text-gray-900 font-inter'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
