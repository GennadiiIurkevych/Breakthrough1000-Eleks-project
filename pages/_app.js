import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { UserProvider } from '../src/contexts/UserContext';
import {store} from "../pages/store/store";
import { Provider } from 'react-redux';
//import { useSelector } from 'react-redux';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	//const todos = useSelector((state) => state.todo.todos)
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;

	return (
		<UserProvider>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport"
						content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<CssBaseline />
						<Component {...pageProps} />
					</Provider>
				</ThemeProvider>
			</CacheProvider>
		</UserProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};

