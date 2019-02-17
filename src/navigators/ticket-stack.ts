import { createStackNavigator } from 'react-navigation';

import _TicketScreen from '../screens/ticket-screen';
import _NewTicketContainer from '../containers/new-ticket-screen';
import _TicketViewContainer from '../containers/ticket-view-screen';

const TicketStack = createStackNavigator(
	{
		TicketScreen: {
			screen: _TicketScreen,
		},

		NewTicketScreen: {
			screen: _NewTicketContainer,
		},

		TicketViewScreen: {
			screen: _TicketViewContainer,
		},
	},
	{
		initialRouteName: 'TicketScreen',
	},
);

export default TicketStack;
