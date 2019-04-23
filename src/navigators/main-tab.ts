import {
	createBottomTabNavigator,
	NavigationProp,
	getActiveChildNavigationOptions,
} from 'react-navigation';

import _HomeScreen from '../screens/home-screen';
import _FriendScreen from '../screens/friend-screen';
import _TicketsScreen from '../screens/tickets-screen';

import VSPTabBar from '../components/vsp-tabbar';

const AppTab = createBottomTabNavigator(
	{
		HomeScreen: {
			screen: _HomeScreen,
		},
		FriendScreen: {
			screen: _FriendScreen,
		},
		TicketsScreen: {
			screen: _TicketsScreen,
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
