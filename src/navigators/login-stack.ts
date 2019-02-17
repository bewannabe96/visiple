import { createStackNavigator } from 'react-navigation';

import _LoginScreen from '../screens/login-screen';
import _RegisterScreen from '../screens/register-screen';

const LoginStack = createStackNavigator(
	{
		LoginScreen: {
			screen: _LoginScreen,
		},
		RegisterScreen: {
			screen: _RegisterScreen,
		},
	},
	{
		initialRouteName: 'LoginScreen',
		headerMode: 'none',
	},
);

export default LoginStack;
