import React from 'react';
import { TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import {
	BottomTabBarProps,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

import {
	VSP_BOTTOM_TAB,
	HORIZONTAL_UNIT,
	VSP_BOTTOM_TAB_BUTTON,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

export default class TravelLogEditScreenBottomTabBar extends React.Component<
	BottomTabBarProps
> {
	private _renderTabBarButton(
		route: NavigationRoute<NavigationParams>,
		index: number,
	) {
		const focused = this.props.navigation.state.index === index;
		let title: string = '';
		let iconName: string = '';
		if (route.routeName === 'SummaryPage') {
			title = '요약';
			iconName = 'travel-guide';
		} else if (route.routeName === 'DayLogsPage') {
			title = '타임라인';
			iconName = 'pin-route';
		}

		return (
			<TouchableOpacity
				key={route.routeName}
				style={{
					flex: 1,
					flexDirection: 'row',
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
					color={focused ? THEME_COLORS.oceanBlue : THEME_COLORS.grey}
					containerStyle={{ marginRight: HORIZONTAL_UNIT() }}
				/>
				<Text
					h3
					style={{
						color: focused
							? THEME_COLORS.oceanBlue
							: THEME_COLORS.grey,
					}}
				>
					{title}
				</Text>
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
