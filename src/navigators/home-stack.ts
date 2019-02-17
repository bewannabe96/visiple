import { createStackNavigator } from 'react-navigation';

import _HomeScreen from '../screens/home-screen';

const HomeStack = createStackNavigator(
	{
		HomeScreen: {
			screen: _HomeScreen,
		},
	},
	{
		initialRouteName: 'HomeScreen',
	},
);

export default HomeStack;
