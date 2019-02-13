/** @format */

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../types/config/size';
import {
	THEME_COLORS,
	THEME_FONT,
	THEME_FONTSIZE,
} from '../../types/config/theme';
import {
	TICKET_COLORS,
	TicketHeaderColorType,
} from '../../types/config/ticket_theme';
import { TabType } from '../../types/redux/new-ticket-types';
import {
	formatDateString,
	formatTimeString,
	formatISODate,
	generateDatesArrayFromPeriod,
} from '../../types/lib/vsp-date';

import VSPText from '../../components/vsp-text';
import VSPModal from '../../components/vsp-modal';

interface SelectPeriodModalProps {
	// STATES
	ticketColor: TicketHeaderColorType;
	fromDate: Date;
	toDate: Date;
	periodModalVisible: boolean;
	fromtoTab: TabType;

	// ACTION CREATORS
	switchFromToTab: any;
	closePeriodModal: any;
	setPeriod: any;
}

/**
 * SelectPeriodModal
 */
export default class SelectPeriodModal extends React.Component<
	SelectPeriodModalProps
> {
	render() {
		let style = StyleSheet.create({
			fromtoTabView: {
				flexDirection: 'row',
			},

			fromTab: {
				flex: 1,
				paddingHorizontal: 2 * HORIZONTAL_UNIT,
				paddingTop:
					this.props.fromtoTab === 'from-tab'
						? VERTICAL_UNIT
						: 2 * VERTICAL_UNIT,
				paddingBottom: 2 * VERTICAL_UNIT,
				borderTopWidth:
					this.props.fromtoTab === 'from-tab' ? VERTICAL_UNIT : 0,
				borderRightWidth: this.props.fromtoTab === 'from-tab' ? 1 : 0,
				borderBottomWidth: this.props.fromtoTab === 'from-tab' ? 0 : 1,
				borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
			},

			toTab: {
				flex: 1,
				paddingHorizontal: 2 * HORIZONTAL_UNIT,
				paddingTop:
					this.props.fromtoTab === 'to-tab'
						? VERTICAL_UNIT
						: 2 * VERTICAL_UNIT,
				paddingBottom: 2 * VERTICAL_UNIT,
				borderTopWidth:
					this.props.fromtoTab === 'to-tab' ? VERTICAL_UNIT : 0,
				borderLeftWidth: this.props.fromtoTab === 'to-tab' ? 1 : 0,
				borderBottomWidth: this.props.fromtoTab === 'to-tab' ? 0 : 1,
				borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
			},

			dateText: {
				alignSelf: 'flex-end',
				color: TICKET_COLORS.HEADER[this.props.ticketColor],
				fontWeight: 'bold',
			},

			timeText: {
				alignSelf: 'flex-end',
				color: TICKET_COLORS.HEADER[this.props.ticketColor],
			},

			calendar: {
				marginHorizontal: 2 * HORIZONTAL_UNIT,
				marginVertical: 2 * VERTICAL_UNIT,
			},
		});

		let calendar_theme = {
			arrowColor: TICKET_COLORS.HEADER[this.props.ticketColor],
			dayTextColor: THEME_COLORS['ocean-blue'],
			monthTextColor: THEME_COLORS['ocean-blue'],
			textDayFontFamily: THEME_FONT,
			textDayFontSize: THEME_FONTSIZE,
			textDayHeaderFontFamily: THEME_FONT,
			textDayHeaderFontSize: THEME_FONTSIZE,
			textMonthFontFamily: THEME_FONT,
			textMonthFontWeight: 'bold',
			textMonthFontSize: THEME_FONTSIZE,
		};

		let calendar_markeddays = (start: Date, end: Date) => {
			let keys = generateDatesArrayFromPeriod(start, end);
			let rtn_obj: { [key: string]: any } = {};
			keys.map(key => {
				rtn_obj[key] = {
					color: TICKET_COLORS.HEADER[this.props.ticketColor],
					textColor: THEME_COLORS['white'],
				};
			});
			rtn_obj[formatISODate(start)] = {
				...rtn_obj[formatISODate(start)],
				startingDay: true,
			};
			rtn_obj[formatISODate(end)] = {
				...rtn_obj[formatISODate(end)],
				endingDay: true,
			};
			return rtn_obj;
		};

		return (
			<VSPModal
				titleText={'기간'}
				isVisible={this.props.periodModalVisible}
				closeAction={this.props.closePeriodModal}
				paddingY={3 * VERTICAL_UNIT}
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
					theme={calendar_theme}
					current={formatISODate(
						this.props.fromtoTab === 'from-tab'
							? this.props.fromDate
							: this.props.toDate,
					)}
					minDate={formatISODate(new Date())}
					monthFormat={'MMM yyyy'}
					hideExtraDays={true}
					markingType={'period'}
					markedDates={calendar_markeddays(
						this.props.fromDate,
						this.props.toDate,
					)}
					onDayPress={day => {
						let date =
							this.props.fromtoTab === 'from-tab'
								? this.props.fromDate
								: this.props.toDate;
						date.setFullYear(day.year, day.month - 1, day.day);
						// Do error handling
						this.props.setPeriod(
							this.props.fromtoTab,
							new Date(date),
						);
					}}
				/>
			</VSPModal>
		);
	}
}
