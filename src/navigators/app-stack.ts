import { createStackNavigator } from 'react-navigation';

import _MainTab from './main-tab';

import _TravelLogsScreen from '../screens/travel-logs-screen';

import _NewTicketContainer from '../containers/new-ticket-screen';
import _TicketViewScreen from '../screens/ticket-view-screen';

import _NewTravelLogScreen from '../screens/new-travel-log-screen';

const AppStack = createStackNavigator(
	{
		MainTab: {
			screen: _MainTab,
		},

		TravelLogsScreen: {
			screen: _TravelLogsScreen,
		},

		NewTicketScreen: {
			screen: _NewTicketContainer,
		},

		TicketViewScreen: {
			screen: _TicketViewScreen,
		},

		NewTravelLogScreen: {
			screen: _NewTravelLogScreen,
		},
	},
	{
		initialRouteName: 'MainTab',
	},
);

export default AppStack;
