import { createStackNavigator } from 'react-navigation';
import VSPHomeScreen from '../screens/vsp-home-screen';

const VSPHomeStack = createStackNavigator(
	{
		HomeScreen: {
			screen: VSPHomeScreen,
		},
	},
	{
		initialRouteName: 'HomeScreen',
	},
);

export default VSPHomeStack;
