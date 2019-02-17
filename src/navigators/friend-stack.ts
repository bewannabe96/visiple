import { createStackNavigator } from 'react-navigation';

import _FriendScreen from '../screens/friend-screen';

const FriendStack = createStackNavigator(
	{
		FriendScreen: {
			screen: _FriendScreen,
		},
	},
	{
		initialRouteName: 'FriendScreen',
	},
);

export default FriendStack;
