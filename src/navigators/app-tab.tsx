import { createBottomTabNavigator } from 'react-navigation';

import _HomeStack from './home-stack';
import _FriendStack from './friend-stack';
import _TicketStack from './ticket-stack';
import _TravelLogStack from './travel-log-stack';

import VSPTabBar from '../components/vsp-tabbar';

const AppTab = createBottomTabNavigator(
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
		tabBarComponent: VSPTabBar,
	},
);

export default AppTab;
