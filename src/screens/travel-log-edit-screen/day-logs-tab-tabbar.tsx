import React from 'react';
import { View } from 'react-native';
import { TabBarProps } from 'react-native-scrollable-tab-view';

import { Period } from '../../types/data/datetime';

import VSPCalendarStrip from '../../components/vsp-calendar-strip';
import { HORIZONTAL_UNIT } from '../../types/lib/size';

interface IDayLogsTabTabbarProps {
	/**
	 * Period of the DayLogsTabTabbar
	 */
	period: Period;
}

/**
 * DayLogsTabTabbar
 *
 * @property
 * - ```period```(required): Period of the DayLogsTabTabbar
 */
export default class DayLogsTabTabbar extends React.Component<
	TabBarProps<IDayLogsTabTabbarProps>
> {
	private _pagesInfo: string[] = [];

	private _goToPage = (isoDate: string) => {
		let pageNumber: number = this._pagesInfo.indexOf(isoDate);
		this.props.goToPage && this.props.goToPage(pageNumber);
	};

	public render() {
		this.props.tabs &&
			this.props.tabs.map((value: Element) => {
				this._pagesInfo.push(value as string);
			});

		return (
			<View style={{ marginHorizontal: HORIZONTAL_UNIT() }}>
				<VSPCalendarStrip
					period={this.props.period}
					selectedDate={this._pagesInfo[this.props.activeTab || 0]}
					onDatePress={this._goToPage}
				/>
			</View>
		);
	}
}
