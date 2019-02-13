/** @format */

import { createStackNavigator } from 'react-navigation';

import VSPTicketScreen from '../screens/vsp-ticket-screen';
import VSPNewTicketContainer from '../containers/vsp-new-ticket-container';
import VSPTicketViewContainer from '../containers/vsp-ticket-view-container';

const VSPTicketStack = createStackNavigator(
	{
		TicketScreen: {
			screen: VSPTicketScreen,
		},

		NewTicketScreen: {
			screen: VSPNewTicketContainer,
		},

		TicketViewScreen: {
			screen: VSPTicketViewContainer,
		},
	},
	{
		initialRouteName: 'TicketScreen',
	},
);

export default VSPTicketStack;
