import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../types/config/size';
import { THEME_COLORS, THEME_FONT, THEME_FONTSIZE } from '../../types/config/theme';
import { TICKET_COLORS, TicketHeaderColorType } from '../../types/config/ticket_theme';
import { TabType } from '../../types/redux/new-ticket-types';

import VSPText from '../../components/vsp-text';
import VSPModal from '../../components/vsp-modal';

interface DateTimePickerProps {
    // STATES
    ticketColor: TicketHeaderColorType,
    periodModalVisible: boolean,
    fromtoTab: TabType,

    // ACTION CREATORS
    switchFromToTab: any,
    closePeriodModal: any,
}

/**
 * DateTimePicker
 */
export default class DateTimePicker extends React.Component<DateTimePickerProps> {
    render() {
        let style = StyleSheet.create({
            fromtoTabView: {
                flexDirection: 'row'
            },

            fromTab: {
                flex: 1,
                paddingVertical: 2*VERTICAL_UNIT,
                paddingHorizontal: 2*HORIZONTAL_UNIT,
                borderTopWidth: this.props.fromtoTab==='from-tab' ? VERTICAL_UNIT : 0,
                borderRightWidth: this.props.fromtoTab==='from-tab' ? 1 : 0,
                borderBottomWidth: this.props.fromtoTab==='from-tab' ? 0 : 1,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
            },

            toTab: {
                flex: 1,
                paddingVertical: 2*VERTICAL_UNIT,
                paddingHorizontal: 2*HORIZONTAL_UNIT,
                borderTopWidth: this.props.fromtoTab==='to-tab' ? VERTICAL_UNIT : 0,
                borderLeftWidth: this.props.fromtoTab==='to-tab' ? 1 : 0,
                borderBottomWidth: this.props.fromtoTab==='to-tab' ? 0 : 1,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
            },

            fromtoText: {
                fontWeight: 'bold',
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
                marginHorizontal: 2*HORIZONTAL_UNIT,
                marginVertical: 2*VERTICAL_UNIT,
                height: 75*VERTICAL_UNIT,
            }
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
        }

        return (
            <VSPModal
                titleText={'기간'}
                isVisible={this.props.periodModalVisible}
                closeAction={this.props.closePeriodModal}
                paddingY={3*VERTICAL_UNIT}
            >
                <View style={style.fromtoTabView}>
                    <TouchableOpacity
                        style={style.fromTab}
                        activeOpacity={0.6}
                        onPress={()=>{this.props.switchFromToTab('from-tab')}}
                    >
                        <VSPText style={style.fromtoText}>
                            시작
                        </VSPText>
                        <VSPText style={style.dateText}>
                            2019년 1월 3일 (목)
                        </VSPText>
                        <VSPText style={style.timeText}>
                            오전 09시 30분
                        </VSPText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.toTab}
                        activeOpacity={0.6}
                        onPress={()=>{this.props.switchFromToTab('to-tab')}}
                    >
                        <VSPText style={style.fromtoText}>
                            종료
                        </VSPText>
                        <VSPText style={style.dateText}>
                            2019년 1월 6일 (일)
                        </VSPText>
                        <VSPText style={style.timeText}>
                            오후 5시 20분
                        </VSPText>
                    </TouchableOpacity>
                </View>
                <Calendar
                    style={style.calendar}
                    theme={calendar_theme}
                    current={'2019-01-03'}
                    monthFormat={'MMM yyyy'}
                    markingType={'period'}
                    markedDates={
                        {
                            '2019-01-03': {
                                startingDay: true,
                                color: TICKET_COLORS.HEADER[this.props.ticketColor],
                                textColor: THEME_COLORS['white'],
                                disabled: true,
                            },
                            '2019-01-04': {
                                selected: true,
                                color: TICKET_COLORS.HEADER[this.props.ticketColor],
                                textColor: THEME_COLORS['white'],
                                disabled: true,
                            },
                            '2019-01-05': {
                                endingDay: true,
                                color: TICKET_COLORS.HEADER[this.props.ticketColor],
                                textColor: THEME_COLORS['white'],
                                disabled: true,
                            },
                        }
                    }
                />
            </VSPModal>
        );
    }
}