import { createStackNavigator } from 'react-navigation';

import _TravelLogScreen from '../screens/travel-log-screen';
import _NewTravelLogScreen from '../screens/new-travel-log-screen';

const TravelLogStack = createStackNavigator(
	{
		TravelLogScreen: {
			screen: _TravelLogScreen,
		},

		NewTravelLogScreen: {
			screen: _NewTravelLogScreen,
		},
	},
	{
		initialRouteName: 'TravelLogScreen',
	},
);

export default TravelLogStack;
