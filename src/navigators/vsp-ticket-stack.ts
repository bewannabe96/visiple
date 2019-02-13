/** @format */

import { createStackNavigator } from 'react-navigation';

import VSPTicketScreen from '../screens/vsp-ticket-screen';
import NewTicketContainer from '../containers/new-ticket-screen';
import TicketViewContainer from '../containers/ticket-view-screen';

const VSPTicketStack = createStackNavigator(
	{
		TicketScreen: {
			screen: VSPTicketScreen,
		},

		NewTicketScreen: {
			screen: NewTicketContainer,
		},

		TicketViewScreen: {
			screen: TicketViewContainer,
		},
	},
	{
		initialRouteName: 'TicketScreen',
	},
);

export default VSPTicketStack;
