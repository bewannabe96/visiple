import { createStackNavigator } from 'react-navigation';
import VSPFriendScreen from '../screens/vsp-friend-screen';

const VSPFriendStack = createStackNavigator(
	{
		FriendScreen: {
			screen: VSPFriendScreen,
		},
	},
	{
		initialRouteName: 'FriendScreen',
	},
);

export default VSPFriendStack;
