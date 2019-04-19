import React from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import {
	BottomTabBarProps,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

import { VSP_BOTTOM_TAB, VSP_BOTTOM_TAB_BUTTON } from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';

interface TabBarProps extends BottomTabBarProps {}

export default class VSPTabBar extends React.Component<TabBarProps> {
	private _renderTabBarButton(
		route: NavigationRoute<NavigationParams>,
		index: number,
	) {
		const focused = this.props.navigation.state.index === index;
		let iconName: string = '';
		if (route.routeName === 'HomeScreen') {
			iconName = 'home';
		} else if (route.routeName === 'FriendScreen') {
			iconName = 'user';
		} else if (route.routeName === 'TicketScreen') {
			iconName = 'ticket';
		} else if (route.routeName === 'SettingScreen') {
			iconName = 'settings';
		}

		return (
			<TouchableOpacity
				key={route.routeName}
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onPress={() => {
					if (!focused) {
						this.props.navigation.navigate(route.routeName);
					}
				}}
				disabled={focused}
			>
				<Icon
					name={iconName}
					type='vspicon'
					size={VSP_BOTTOM_TAB_BUTTON}
					color={focused ? THEME_COLORS.brown : THEME_COLORS.grey}
				/>
			</TouchableOpacity>
		);
	}

	public render() {
		return (
			<SafeAreaView>
				<View
					style={{
						flexDirection: 'row',
						height: VSP_BOTTOM_TAB,
						borderTopWidth: 0.2,
						borderColor: THEME_COLORS.grey,
					}}
				>
					{this.props.navigation.state.routes.map(
						this._renderTabBarButton.bind(this),
					)}
				</View>
			</SafeAreaView>
		);
	}
}
