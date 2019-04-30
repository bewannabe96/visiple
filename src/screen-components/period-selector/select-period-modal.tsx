import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { DateTime } from 'luxon';

import CALENDAR_LOCALES from '../../config/calendar';

import { HORIZONTAL_UNIT, THEME_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS, THEME_FONT } from '../../types/lib/theme';
import { Period } from '../../types/data/datetime';
import { Action } from '../../types/lib/redux';
import { SYSTEM_LANGUAGE_CODE } from '../../types/lib/system';

import VSPModal from '../../components/vsp-modal';

export type FromToTab = 'from-tab' | 'to-tab';

interface ISelectPeriodModalProps {
	/**
	 * The modal is visible if true
	 */
	isVisible: boolean;

	/**
	 * Initially focused from/to tab
	 */
	initalTab: FromToTab;

	/**
	 * Close action callback
	 */
	closeAction: () => any;

	/**
	 * Theme color
	 */
	color: string;

	/**
	 * Period
	 */
	period: Period;

	// ACTION CREATORS
	setFromDate: Action;
	setToDate: Action;
}

/**
 * SelectPeriodModal
 *
 * @property
 * - ```isVisible```(required): The modal is visible if true
 * - ```initalTab```(required): Initially focused from/to tab
 * - ```closeAction```(required): Close action callback
 * - ```color```(required): Theme color
 * - ```period```(required): Period
 *
 * @actionCreator
 * - ```setFromDate```
 * - ```setToDate```
 */
export default class SelectPeriodModal extends React.Component<
	ISelectPeriodModalProps
> {
	public state = {
		fromtoTab: this.props.initalTab,
	};

	private _switchFromToTab = (tab: FromToTab) => {
		this.setState({ ...this.state, fromtoTab: tab });
	};

	private _renderTab(title: string, date: DateTime, tab: FromToTab) {
		const style = StyleSheet.create({
			container: {
				flex: 1,
				padding: HORIZONTAL_UNIT(3),
				marginHorizontal: HORIZONTAL_UNIT(),
				backgroundColor:
					this.state.fromtoTab === tab
						? this.props.color
						: THEME_COLORS.none,
				borderWidth: this.state.fromtoTab === tab ? 0 : 1,
				borderColor: this.props.color,
			},

			text: {
				color:
					this.state.fromtoTab === tab
						? THEME_COLORS.white
						: THEME_COLORS.grey,
			},
		});

		return (
			<TouchableOpacity
				style={style.container}
				activeOpacity={0.6}
				onPress={() => {
					this._switchFromToTab(tab);
				}}
			>
				<Text
					h3
					style={[style.text, { marginBottom: HORIZONTAL_UNIT() }]}
				>
					{title}
				</Text>
				<Text h2 style={style.text}>
					{date.toLocaleString(DateTime.DATE_FULL)}
				</Text>
			</TouchableOpacity>
		);
	}

	public render() {
		const style = StyleSheet.create({
			fromtoTabView: {
				flexDirection: 'row',
			},

			calendar: {
				marginHorizontal: HORIZONTAL_UNIT(2),
				marginVertical: HORIZONTAL_UNIT(2),
			},
		});

		LocaleConfig.locales = CALENDAR_LOCALES;
		if (SYSTEM_LANGUAGE_CODE in CALENDAR_LOCALES)
			LocaleConfig.defaultLocale = SYSTEM_LANGUAGE_CODE;
		else LocaleConfig.defaultLocale = 'en';

		const calendarTheme = {
			arrowColor: this.props.color,
			dayTextColor: THEME_COLORS.grey,
			monthTextColor: THEME_COLORS.grey,
			textDayFontFamily: THEME_FONT,
			textDayFontSize: THEME_FONTSIZE,
			textDayHeaderFontFamily: THEME_FONT,
			textDayHeaderFontSize: THEME_FONTSIZE,
			textMonthFontFamily: THEME_FONT,
			textMonthFontWeight: 'bold',
			textMonthFontSize: THEME_FONTSIZE,
		};

		const calendarMarkeddays = (from: DateTime, to: DateTime) => {
			from = from.startOf('day');
			to = to.startOf('day');
			let pointer = from;

			const rtnObj: { [key: string]: any } = {};
			while (pointer <= to) {
				rtnObj[pointer.toISODate()] = {
					color: this.props.color,
					textColor: THEME_COLORS.white,
					startingDay: +pointer === +from.startOf('day'),
					endingDay: +pointer === +to,
				};
				pointer = pointer.plus({ days: 1 });
			}
			return rtnObj;
		};

		return (
			<VSPModal
				isVisible={this.props.isVisible}
				closeAction={this.props.closeAction}
				titleText={'기간'}
				headerRight={
					<Button
						title='완료'
						type='clear'
						titleStyle={{ color: THEME_COLORS.black }}
						onPress={this.props.closeAction}
					/>
				}
				paddingVertical={HORIZONTAL_UNIT(3)}
			>
				<View style={style.fromtoTabView}>
					{this._renderTab(
						'출발',
						this.props.period.from,
						'from-tab',
					)}
					{this._renderTab('도착', this.props.period.to, 'to-tab')}
				</View>
				<Calendar
					style={style.calendar}
					theme={calendarTheme}
					current={
						this.state.fromtoTab === 'from-tab'
							? this.props.period.from.toISODate()
							: this.props.period.to.toISODate()
					}
					minDate={DateTime.local().toISODate()}
					monthFormat={'MMM yyyy'}
					hideExtraDays={true}
					markingType={'period'}
					markedDates={calendarMarkeddays(
						this.props.period.from,
						this.props.period.to,
					)}
					onDayPress={day => {
						// Do error handling
						if (this.state.fromtoTab === 'from-tab') {
							this.props.setFromDate(
								day.year,
								day.month,
								day.day,
							);
						} else {
							this.props.setToDate(day.year, day.month, day.day);
						}
					}}
				/>
			</VSPModal>
		);
	}
}
