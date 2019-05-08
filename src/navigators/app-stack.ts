import { createStackNavigator } from 'react-navigation';

import _MainTab from './main-tab';

import _TravelLogsScreen from '../screens/travel-logs-screen';
import _TravelLogEditScreen from '../screens/travel-log-edit-screen';

import _NewTicketContainer from '../containers/new-ticket-screen';
import _TicketViewScreen from '../screens/ticket-view-screen';

const AppStack = createStackNavigator(
	{
		MainTab: {
			screen: _MainTab,
		},

		TravelLogsScreen: {
			screen: _TravelLogsScreen,
		},

		TravelLogEditScreen: {
			screen: _TravelLogEditScreen,
		},

		NewTicketScreen: {
			screen: _NewTicketContainer,
		},

		TicketViewScreen: {
			screen: _TicketViewScreen,
		},
	},
	{
		initialRouteName: 'MainTab',
	},
);

export default AppStack;
