import { createStackNavigator } from 'react-navigation';

import _TicketScreen from '../screens/ticket-screen';
import _NewTicketContainer from '../containers/new-ticket-screen';
import _TicketViewScreen from '../screens/ticket-view-screen';

const TicketStack = createStackNavigator(
	{
		TicketScreen: {
			screen: _TicketScreen,
		},

		NewTicketScreen: {
			screen: _NewTicketContainer,
		},

		TicketViewScreen: {
			screen: _TicketViewScreen,
		},
	},
	{
		initialRouteName: 'TicketScreen',
	},
);

export default TicketStack;
