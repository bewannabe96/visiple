import { createSwitchNavigator } from 'react-navigation';

import _LoginStack from './login-stack';
import _AppDrawer from './app-drawer';

const AuthSwitch = createSwitchNavigator(
	{
		LoginStack: _LoginStack,
		App: _AppDrawer,
	},
	{
		initialRouteName: 'LoginStack',
	},
);

export default AuthSwitch;
