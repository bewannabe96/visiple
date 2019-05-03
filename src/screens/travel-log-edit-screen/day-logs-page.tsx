import React from 'react';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { DateTime } from 'luxon';

import { Period } from '../../types/data/datetime';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPHeader from '../../components/vsp-header';
import { VSPHeaderBack } from '../../components/vsp-header-button';
import VSPContainer from '../../components/vsp-container';

import DayLogsTabTabbar from './day-logs-tab-tabbar';
import DayLog from './day-log';

const DEV_PERIOD = {
	from: DateTime.local().startOf('day'),
	to: DateTime.local()
		.startOf('day')
		.plus({ days: 6 }),
};

interface IDayLogsPageProps {
	/**
	 * Period of the DayLogsTabView
	 */
	period: Period;
}

/**
 * DayLogsPage
 *
 * @property
 * - ```period```(required): Period of the DayLogsTabView
 */
class DayLogsPage extends React.Component<IVSPScreenProps<IDayLogsPageProps>> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: <VSPHeader headerLeft={VSPHeaderBack(navigation)} />,
		};
	};

	static defaultProps = {
		period: DEV_PERIOD,
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

export default withNavigation(DayLogsPage);
