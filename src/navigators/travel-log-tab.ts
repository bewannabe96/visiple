import { createBottomTabNavigator } from 'react-navigation';

import _LoginScreen from '../screens/login-screen';
import _RegisterScreen from '../screens/register-screen';

const TravelLogTab = createBottomTabNavigator(
	{
		LoginScreenX: {
			screen: _LoginScreen,
		},
		RegisterScreenX: {
			screen: _RegisterScreen,
		},
	},
	{
		initialRouteName: 'LoginScreenX',
	},
);

export default TravelLogTab;
