import React from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import {
	BottomTabBarProps,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

import { VSP_BOTTOM_TAB, VSP_BOTTOM_TAB_BUTTON } from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';
import { IconName } from '../types/lib/icon';

import VSPIcon from './vsp-icon';

interface TabBarProps extends BottomTabBarProps {}

export default class VSPTabBar extends React.Component<TabBarProps> {
	private _renderTabBarButton(
		route: NavigationRoute<NavigationParams>,
		index: number,
	) {
		const focused = this.props.navigation.state.index === index;
		let iconName: IconName;
		if (route.routeName === 'FriendStack') {
			iconName = 'teamwork';
		} else if (route.routeName === 'TicketStack') {
			iconName = 'taxi';
		} else if (route.routeName === 'TravelLogStack') {
			iconName = 'train';
		} else {
			// HomeStack
			iconName = 'home';
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
				<VSPIcon
					iconName={iconName}
					size={VSP_BOTTOM_TAB_BUTTON}
					theme={focused ? 'black' : 'grey'}
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
