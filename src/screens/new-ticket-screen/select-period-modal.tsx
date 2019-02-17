import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { HORIZONTAL_UNIT, THEME_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS, THEME_FONT } from '../../types/lib/theme';
import {
	formatDateString,
	formatTimeString,
	formatISODate,
	generateDatesArrayFromPeriod,
} from '../../types/lib/date';
import { FromToTab } from '../../types/redux/new-ticket-screen/ui';

import VSPText from '../../components/vsp-text';
import VSPModal from '../../components/vsp-modal';

interface ISelectPeriodModalProps {
	/**
	 * Theme color of the ticket
	 */
	ticketColor: string;

	/**
	 * Date the event starts from
	 */
	fromDate: Date;

	/**
	 * Date the event ends
	 */
	toDate: Date;

	/**
	 * The modal is visible if true
	 */
	periodModalVisible: boolean;

	/**
	 * Focused from/to tab
	 */
	fromtoTab: FromToTab;

	// ACTION CREATORS
	switchFromToTab: any;
	closePeriodModal: any;
	setFromDate: any;
	setToDate: any;
}

/**
 * SelectPeriodModal
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
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
				borderColor: this.props.ticketColor,
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
				borderColor: this.props.ticketColor,
			},

			dateText: {
				alignSelf: 'flex-end',
				color: this.props.ticketColor,
				fontWeight: 'bold',
			},

			timeText: {
				alignSelf: 'flex-end',
				color: this.props.ticketColor,
			},

			calendar: {
				marginHorizontal: HORIZONTAL_UNIT(2),
				marginVertical: HORIZONTAL_UNIT(2),
			},
		});

		const calendarTheme = {
			arrowColor: this.props.ticketColor,
			dayTextColor: THEME_COLORS.oceanBlue,
			monthTextColor: THEME_COLORS.oceanBlue,
			textDayFontFamily: THEME_FONT,
			textDayFontSize: THEME_FONTSIZE,
			textDayHeaderFontFamily: THEME_FONT,
			textDayHeaderFontSize: THEME_FONTSIZE,
			textMonthFontFamily: THEME_FONT,
			textMonthFontWeight: 'bold',
			textMonthFontSize: THEME_FONTSIZE,
		};

		const calendarMarkeddays = (start: Date, end: Date) => {
			const keys = generateDatesArrayFromPeriod(start, end);
			const rtnObj: { [key: string]: any } = {};
			keys.map(key => {
				rtnObj[key] = {
					color: this.props.ticketColor,
					textColor: THEME_COLORS.white,
				};
			});
			rtnObj[formatISODate(start)] = {
				...rtnObj[formatISODate(start)],
				startingDay: true,
			};
			rtnObj[formatISODate(end)] = {
				...rtnObj[formatISODate(end)],
				endingDay: true,
			};
			return rtnObj;
		};

		return (
			<VSPModal
				titleText={'기간'}
				isVisible={this.props.periodModalVisible}
				closeAction={this.props.closePeriodModal}
				paddingY={HORIZONTAL_UNIT(3)}
			>
				<View style={style.fromtoTabView}>
					<TouchableOpacity
						style={style.fromTab}
						activeOpacity={0.6}
						onPress={() => {
							this.props.switchFromToTab('from-tab');
						}}
					>
						<VSPText fontWeight={'bold'}>시작</VSPText>
						<VSPText style={style.dateText}>
							{formatDateString(this.props.fromDate)}
						</VSPText>
						<VSPText style={style.timeText}>
							{formatTimeString(this.props.fromDate)}
						</VSPText>
					</TouchableOpacity>
					<TouchableOpacity
						style={style.toTab}
						activeOpacity={0.6}
						onPress={() => {
							this.props.switchFromToTab('to-tab');
						}}
					>
						<VSPText fontWeight={'bold'}>종료</VSPText>
						<VSPText style={style.dateText}>
							{formatDateString(this.props.toDate)}
						</VSPText>
						<VSPText style={style.timeText}>
							{formatTimeString(this.props.fromDate)}
						</VSPText>
					</TouchableOpacity>
				</View>
				<Calendar
					style={style.calendar}
					theme={calendarTheme}
					current={formatISODate(
						this.props.fromtoTab === 'from-tab'
							? this.props.fromDate
							: this.props.toDate,
					)}
					minDate={formatISODate(new Date())}
					monthFormat={'MMM yyyy'}
					hideExtraDays={true}
					markingType={'period'}
					markedDates={calendarMarkeddays(
						this.props.fromDate,
						this.props.toDate,
					)}
					onDayPress={day => {
						const date =
							this.props.fromtoTab === 'from-tab'
								? this.props.fromDate
								: this.props.toDate;
						date.setFullYear(day.year, day.month - 1, day.day);
						// Do error handling
						if (this.props.fromtoTab === 'from-tab') {
							this.props.setFromDate(new Date(date));
						} else {
							this.props.setToDate(new Date(date));
						}
					}}
				/>
			</VSPModal>
		);
	}
}
