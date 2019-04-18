import {
	createBottomTabNavigator,
	NavigationProp,
	getActiveChildNavigationOptions,
} from 'react-navigation';

import _HomeScreen from '../screens/home-screen';
import _FriendScreen from '../screens/friend-screen';
import _TicketScreen from '../screens/ticket-screen';

import VSPTabBar from '../components/vsp-tabbar';

const AppTab = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: _HomeScreen,
		},
		FriendScreen: {
			screen: _FriendScreen,
		},
		TicketScreen: {
			screen: _TicketScreen,
		},
	},
	{
		initialRouteName: 'HomeScreen',
		tabBarComponent: VSPTabBar,
		navigationOptions: ({
			navigation,
		}: {
			navigation: NavigationProp<any>;
		}) => ({
			...getActiveChildNavigationOptions(navigation),
		}),
	},
);

export default AppTab;
