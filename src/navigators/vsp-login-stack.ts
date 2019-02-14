import { createStackNavigator } from 'react-navigation';
import VSPLoginScreen from '../screens/vsp-login-screen';
import VSPRegisterScreen from '../screens/vsp-register-screen';

const VSPLoginStack = createStackNavigator(
	{
		LoginScreen: {
			screen: VSPLoginScreen,
		},
		RegisterScreen: {
			screen: VSPRegisterScreen,
		},
	},
	{
		initialRouteName: 'LoginScreen',
		headerMode: 'none',
	},
);

export default VSPLoginStack;
