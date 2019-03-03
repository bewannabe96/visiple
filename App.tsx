import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import AuthSwitch from './src/navigators/auth-switch';
import RootReducer from './src/reducers';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEVv0.1' : null;

const AppContainer = createAppContainer(AuthSwitch);

const rootStore = createStore(RootReducer);

export default class App extends Component {
	public render() {
		return (
			<Provider store={rootStore}>
				<AppContainer persistenceKey={navigationPersistenceKey} />
			</Provider>
		);
	}
}
