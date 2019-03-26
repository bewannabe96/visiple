import { createSwitchNavigator } from 'react-navigation';

import _LoginStack from './login-stack';
import _AppTab from './app-tab';

const AuthSwitch = createSwitchNavigator(
	{
		LoginStack: _LoginStack,
		App: _AppTab,
	},
	{
		initialRouteName: 'LoginStack',
	},
);

export default AuthSwitch;
