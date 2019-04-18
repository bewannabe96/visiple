import { createSwitchNavigator } from 'react-navigation';

import _LoginStack from './login-stack';
import _AppStack from './app-stack';

const AuthSwitch = createSwitchNavigator(
	{
		LoginStack: _LoginStack,
		App: _AppStack,
	},
	{
		initialRouteName: 'LoginStack',
	},
);

export default AuthSwitch;
