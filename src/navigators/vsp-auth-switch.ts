/** @format */

import { createSwitchNavigator } from 'react-navigation';
import VSPLoginStack from './vsp-login-stack';
import VSPAppDrawer from './vsp-app-drawer';

const AuthSwitch = createSwitchNavigator(
	{
		LoginStack: VSPLoginStack,
		App: VSPAppDrawer,
	},
	{
		initialRouteName: 'LoginStack',
	},
);

export default AuthSwitch;
