import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import RNElementsTheme from './src/config/react-native-elements-theme';

import AuthSwitch from './src/navigators/auth-switch';
import RootReducer from './src/reducers';
import { ThemeProvider } from 'react-native-elements';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEVv0.2' : null;

const AppContainer = createAppContainer(AuthSwitch);

const rootStore = createStore(RootReducer);

export default class App extends Component {
	public render() {
		return (
			<Provider store={rootStore}>
				<ThemeProvider theme={RNElementsTheme}>
					<AppContainer persistenceKey={null} />
				</ThemeProvider>
			</Provider>
		);
	}
}
