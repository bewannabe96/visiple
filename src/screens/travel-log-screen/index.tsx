import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { TravelLog } from '../../types/data/travel-log';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import { VSPHeaderMenu } from '../../components/vsp-header-button';

import PublishedLogsTab from './published-logs-tab';

const DEV_TRAVEL_LOG: TravelLog[] = [
	{
		id: 1,
		title: 'Travel Log 1',
		titleImage: '',
		owner: 'user1',
		participants: ['user1', 'user2'],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
	},
	{
		id: 2,
		title: 'Travel Log 2',
		titleImage: '',
		owner: 'user1',
		participants: ['user1', 'user2'],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
	},
	{
		id: 3,
		title: 'Travel Log 3',
		titleImage: '',
		owner: 'user1',
		participants: ['user1', 'user2'],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
	},
];

interface ITravelLogScreenProps {}

/**
 * TravelLogScreen
 */
export default class TravelLogScreen extends React.Component<
	IVSPScreenProps<ITravelLogScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='로그'
					headerLeft={VSPHeaderMenu(navigation)}
					diplayBorder={false}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({});

		return (
			<ScrollableTabView
				tabBarActiveTextColor={THEME_COLORS.black}
				tabBarInactiveTextColor={THEME_COLORS.grey}
				tabBarUnderlineStyle={{
					height: 3,
					backgroundColor: THEME_COLORS.brown,
				}}
			>
				<PublishedLogsTab tabLabel='로그' travelLogs={DEV_TRAVEL_LOG} />
				<PublishedLogsTab
					tabLabel='작성중인 로그'
					travelLogs={DEV_TRAVEL_LOG}
				/>
			</ScrollableTabView>
		);
	}
}
