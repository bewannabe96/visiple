import { createStackNavigator } from 'react-navigation';

import _TravelLogScreen from '../screens/travel-log-screen';

const TravelLogStack = createStackNavigator(
	{
		TravelLogScreen: {
			screen: _TravelLogScreen,
		},
	},
	{
		initialRouteName: 'TravelLogScreen',
	},
);

export default TravelLogStack;
