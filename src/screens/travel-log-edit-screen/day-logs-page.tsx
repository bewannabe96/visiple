import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { DateTime } from 'luxon';

import { Period } from '../../types/data/datetime';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { TravelLog } from '../../types/data/travel-log';

import VSPHeader, {
	VSP_PURE_HEADER_HEIGHT,
	VSP_STATUS_BAR_HEIGHT,
} from '../../components/vsp-header';
import { VSPHeaderBack } from '../../components/vsp-header-button';
import VSPContainer from '../../components/vsp-container';

import DayLogsTabTabbar from './day-logs-tab-tabbar';
import DayLog from './day-log';

const DEV_TRAVEL_LOG: TravelLog = {
	id: 1,
	title: 'Travel Log 1',
	titleImage: '',
	owner: 1,
	participants: [1, 2],
	period: {
		from: DateTime.local().startOf('day'),
		to: DateTime.local()
			.startOf('day')
			.plus({ days: 6 }),
	},
	published: false,
	countryCodes: ['KOR'],
	days: [],
};

interface IDayLogsPageProps {
	/**
	 * Title of the travel log
	 */
	title: string;

	/**
	 * Period of the DayLogsTabView
	 */
	period: Period;
}

/**
 * DayLogsPage
 *
 * @property
 * - ```title```(required): Title of the travel log
 * - ```period```(required): Period of the DayLogsTabView
 */
class DayLogsPage extends React.Component<IVSPScreenProps<IDayLogsPageProps>> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerLeft={<VSPHeaderBack navigation={navigation} />}
					transparent
				/>
			),
		};
	};

	static defaultProps = {
		title: DEV_TRAVEL_LOG.title,
		period: DEV_TRAVEL_LOG.period,
	};

	public render() {
		let daylogTabs: Element[] = [];
		for (
			let p = this.props.period.from;
			p <= this.props.period.to;
			p = p.plus({ days: 1 })
		) {
			let isoDate = p.toISODate();
			daylogTabs.push(<DayLog key={isoDate} tabLabel={isoDate} />);
		}

		return (
			<VSPContainer wrapSafeAreaView>
				<View style={style.headerView}>
					<Text h3>{this.props.title}</Text>
				</View>
				<ScrollableTabView
					renderTabBar={() => (
						<DayLogsTabTabbar period={this.props.period} />
					)}
				>
					{daylogTabs}
				</ScrollableTabView>
			</VSPContainer>
		);
	}
}

const style = StyleSheet.create({
	headerView: {
		marginTop: VSP_STATUS_BAR_HEIGHT,
		height: VSP_PURE_HEADER_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default withNavigation(DayLogsPage);
