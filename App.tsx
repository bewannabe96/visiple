import React, { Component } from 'react';
import { ThemeProvider, registerCustomIconType } from 'react-native-elements';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import RNElementsTheme from './src/config/react-native-elements-theme';
import VSPIconSet from './src/types/lib/icon';

import AuthSwitch from './src/navigators/auth-switch';
import RootReducer from './src/reducers';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEVv0.6' : null;

const AppContainer = createAppContainer(AuthSwitch);

const rootStore = createStore(RootReducer);

export default class App extends Component {
	public render() {
		registerCustomIconType('vspicon', VSPIconSet);

		return (
			<Provider store={rootStore}>
				<ThemeProvider theme={RNElementsTheme}>
					<AppContainer persistenceKey={navigationPersistenceKey} />
				</ThemeProvider>
			</Provider>
		);
	}
}
