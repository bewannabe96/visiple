import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import AuthSwitch from './app/navigators/vsp-auth-switch';

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

const AppContainer = createAppContainer(AuthSwitch);

export default class App extends Component {
  render() {
    return <AppContainer persistenceKey={navigationPersistenceKey}/>
  }
}