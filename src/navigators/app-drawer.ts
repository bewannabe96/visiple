import { createDrawerNavigator } from 'react-navigation';

import VSPSideDrawer from '../components/vsp-sidedrawer';

import _HomeStack from './home-stack';
import _FriendStack from './friend-stack';
import _TicketStack from './ticket-stack';
import _TravelLogStack from './travel-log-tab';

const AppDrawer = createDrawerNavigator(
	{
		HomeStack: {
			screen: _HomeStack,
		},
		FriendStack: {
			screen: _FriendStack,
		},
		TicketStack: {
			screen: _TicketStack,
		},
		TravelLogStack: {
			screen: _TravelLogStack,
		},
	},
	{
		initialRouteName: 'HomeStack',
		contentComponent: VSPSideDrawer,
	},
);

export default AppDrawer;
