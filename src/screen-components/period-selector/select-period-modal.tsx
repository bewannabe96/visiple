import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT, THEME_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS, THEME_FONT } from '../../types/lib/theme';
import { FromToTab } from '../../types/redux/screens/new-ticket-screen';
import { Period } from '../../types/data/datetime';
import { Action } from '../../types/lib/redux';

import VSPModal from '../../components/vsp-modal';

interface ISelectPeriodModalProps {
	/**
	 * Theme color
	 */
	color: string;

	/**
	 * Period of the ticket
	 */
	period: Period;

	/**
	 * The modal is visible if true
	 */
	isVisible: boolean;

	/**
	 * Focused from/to tab
	 */
	fromtoTab: FromToTab;

	// ACTION CREATORS
	switchFromToTab: Action;
	closePeriodModal: Action;
	setFromDate: Action;
	setToDate: Action;
}

/**
 * SelectPeriodModal
 *
 * @property
 * - ```color```(required): Theme color
 * - ```period```(required): Period of the ticket
 * - ```isVisible```(required): The modal is visible if true
 * - ```fromtoTab```(required): Focused from/to tab
 */
export default class SelectPeriodModal extends React.Component<
	ISelectPeriodModalProps
> {
	private _renderTab(title: string, date: DateTime, tab: FromToTab) {
		const style = StyleSheet.create({
			container: {
				flex: 1,
				padding: HORIZONTAL_UNIT(3),
				marginHorizontal: HORIZONTAL_UNIT(),
				backgroundColor:
					this.props.fromtoTab === tab
						? this.props.color
						: THEME_COLORS.none,
				borderWidth: this.props.fromtoTab === tab ? 0 : 1,
				borderColor: this.props.color,
			},

			text: {
				color:
					this.props.fromtoTab === tab
						? THEME_COLORS.white
						: THEME_COLORS.grey,
			},
		});

		return (
			<TouchableOpacity
				style={style.container}
				activeOpacity={0.6}
				onPress={() => {
					this.props.switchFromToTab(tab);
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
				closeAction={this.props.closePeriodModal}
				titleText={'기간'}
				headerRight={
					<Button
						title='완료'
						type='clear'
						titleStyle={{ color: THEME_COLORS.black }}
						onPress={this.props.closePeriodModal}
					/>
				}
				paddingVertical={HORIZONTAL_UNIT(3)}
			>
				<View style={style.fromtoTabView}>
					{this._renderTab(
						'시작',
						this.props.period.from,
						'from-tab',
					)}
					{this._renderTab('종료', this.props.period.to, 'to-tab')}
				</View>
				<Calendar
					style={style.calendar}
					theme={calendarTheme}
					current={
						this.props.fromtoTab === 'from-tab'
							? this.props.period.from.toISO()
							: this.props.period.to.toISO()
					}
					minDate={DateTime.local().toISO()}
					monthFormat={'MMM yyyy'}
					hideExtraDays={true}
					markingType={'period'}
					markedDates={calendarMarkeddays(
						this.props.period.from,
						this.props.period.to,
					)}
					onDayPress={day => {
						// Do error handling
						if (this.props.fromtoTab === 'from-tab') {
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
