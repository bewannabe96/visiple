import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { TravelLog } from '../../types/data/travel-log';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';

import PublishedLogsTab from './published-logs-tab';

const DEV_TRAVEL_LOG: TravelLog[] = [
	{
		id: 1,
		title: 'Travel Log 1',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		events: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 2,
		title: 'Travel Log 2',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		events: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 3,
		title: 'Travel Log 3',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		events: [],
		published: false,
		countryCodes: ['KOR'],
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
			header: <VSPHeader headerTitle='로그' />,
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
