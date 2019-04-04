import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT, THEME_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS, THEME_FONT } from '../../types/lib/theme';
import { FromToTab } from '../../types/redux/screens/new-ticket-screen';

import VSPText from '../../components/vsp-text';
import VSPModal from '../../components/vsp-modal';

import {
	switchFromToTab,
	closePeriodModal,
} from '../../actions/screens/new-ticket-screen';
import { setFromDate, setToDate } from '../../actions/new-ticket';
import VSPTimePicker from '../../components/vsp-time-picker';

interface ISelectPeriodModalProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	/**
	 * Date the event starts from
	 */
	fromDateTime: DateTime;

	/**
	 * Date the event ends
	 */
	toDateTime: DateTime;

	/**
	 * The modal is visible if true
	 */
	periodModalVisible: boolean;

	/**
	 * Focused from/to tab
	 */
	fromtoTab: FromToTab;

	// ACTION CREATORS
	switchFromToTab: typeof switchFromToTab;
	closePeriodModal: typeof closePeriodModal;
	setFromDate: typeof setFromDate;
	setToDate: typeof setToDate;
}

/**
 * SelectPeriodModal
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 * - ```fromDate```(required): Date the event starts from
 * - ```toDate```(required): Date the event ends
 * - ```periodModalVisible```(required): The modal is visible if true
 * - ```fromtoTab```(required): Focused from/to tab
 */
export default class SelectPeriodModal extends React.Component<
	ISelectPeriodModalProps
> {
	public render() {
		const style = StyleSheet.create({
			fromtoTabView: {
				flexDirection: 'row',
			},

			fromTab: {
				flex: 1,
				paddingHorizontal: HORIZONTAL_UNIT(2),
				paddingTop:
					this.props.fromtoTab === 'from-tab'
						? HORIZONTAL_UNIT()
						: HORIZONTAL_UNIT(2),
				paddingBottom: HORIZONTAL_UNIT(2),
				borderTopWidth:
					this.props.fromtoTab === 'from-tab' ? HORIZONTAL_UNIT() : 0,
				borderRightWidth: this.props.fromtoTab === 'from-tab' ? 1 : 0,
				borderBottomWidth: this.props.fromtoTab === 'from-tab' ? 0 : 1,
				borderColor: this.props.themeColor,
			},

			toTab: {
				flex: 1,
				paddingHorizontal: HORIZONTAL_UNIT(),
				paddingTop:
					this.props.fromtoTab === 'to-tab'
						? HORIZONTAL_UNIT()
						: HORIZONTAL_UNIT(2),
				paddingBottom: HORIZONTAL_UNIT(2),
				borderTopWidth:
					this.props.fromtoTab === 'to-tab' ? HORIZONTAL_UNIT() : 0,
				borderLeftWidth: this.props.fromtoTab === 'to-tab' ? 1 : 0,
				borderBottomWidth: this.props.fromtoTab === 'to-tab' ? 0 : 1,
				borderColor: this.props.themeColor,
			},

			dateText: {
				alignSelf: 'flex-end',
				color: THEME_COLORS.grey,
				marginVertical: HORIZONTAL_UNIT(),
			},

			timeText: {
				alignSelf: 'flex-end',
				color: THEME_COLORS.grey,
			},

			calendar: {
				marginHorizontal: HORIZONTAL_UNIT(2),
				marginVertical: HORIZONTAL_UNIT(2),
			},
		});

		const calendarTheme = {
			arrowColor: this.props.themeColor,
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
					color: this.props.themeColor,
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
				isVisible={this.props.periodModalVisible}
				closeAction={this.props.closePeriodModal}
				titleText={'기간'}
				rightButtonText={'완료'}
				rightButtonOnPress={this.props.closePeriodModal}
				paddingVertical={HORIZONTAL_UNIT(3)}
			>
				<View style={style.fromtoTabView}>
					<TouchableOpacity
						style={style.fromTab}
						activeOpacity={0.6}
						onPress={() => {
							this.props.switchFromToTab('from-tab');
						}}
					>
						<VSPText>시작</VSPText>
						<VSPText style={style.dateText}>
							{this.props.fromDateTime.toLocaleString(
								DateTime.DATE_FULL,
							)}
						</VSPText>
						<VSPText style={style.timeText}>
							{`${this.props.fromDateTime.toLocaleString(
								DateTime.TIME_24_SIMPLE,
							)} (${this.props.fromDateTime.offsetNameShort})`}
						</VSPText>
					</TouchableOpacity>
					<TouchableOpacity
						style={style.toTab}
						activeOpacity={0.6}
						onPress={() => {
							this.props.switchFromToTab('to-tab');
						}}
					>
						<VSPText>종료</VSPText>
						<VSPText style={style.dateText}>
							{this.props.toDateTime.toLocaleString(
								DateTime.DATE_FULL,
							)}
						</VSPText>
						<VSPText style={style.timeText}>
							{`${this.props.toDateTime.toLocaleString(
								DateTime.TIME_24_SIMPLE,
							)} (${this.props.toDateTime.offsetNameShort})`}
						</VSPText>
					</TouchableOpacity>
				</View>
				<Calendar
					style={style.calendar}
					theme={calendarTheme}
					current={
						this.props.fromtoTab === 'from-tab'
							? this.props.fromDateTime.toISO()
							: this.props.toDateTime.toISO()
					}
					minDate={DateTime.local().toISO()}
					monthFormat={'MMM yyyy'}
					hideExtraDays={true}
					markingType={'period'}
					markedDates={calendarMarkeddays(
						this.props.fromDateTime,
						this.props.toDateTime,
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
				<VSPTimePicker color={this.props.themeColor} />
			</VSPModal>
		);
	}
}
