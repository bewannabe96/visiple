import React from 'react';
import { StyleProp, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import { VERTICAL_UNIT } from '../../types/config/size';
import { THEME_HEADER_FONTSIZE } from '../../types/config/theme';

import VSPText from '../../components/vsp-text';
import VSPIcon from '../../components/vsp-icon';
import { TICKET_COLORS, TicketHeaderColorType } from '../../types/config/ticket_theme';

interface DateTimePickerProps {
    /**
     * Color of the ticket
     */
    ticketColor: TicketHeaderColorType,
}

/**
 * DateTimePicker
 */
export default class DateTimePicker extends React.Component<DateTimePickerProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: any) {
        super(props);

        this._fixed_style = StyleSheet.create({
            fromtoView: {
                flexDirection: 'row',
                marginTop: 4*VERTICAL_UNIT,
                marginLeft: 4*VERTICAL_UNIT,
            },

            fromtoText: {
                fontSize: THEME_HEADER_FONTSIZE,
            },

            container: {
                width: '90%',
                alignSelf: 'center',
            },
        });
    }

    render() {
        let variable_style = StyleSheet.create({
            dateInputView: {
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
                flex: 3,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
            },

            timeInputView: {
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
                flex: 2,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketColor],
            },

            text: {
                color: TICKET_COLORS.HEADER[this.props.ticketColor],
            },
        });

        return (
            <View>
                <View style={this._fixed_style.fromtoView}>
                    <VSPText style={this._fixed_style.fromtoText}>시작</VSPText>
                    <View style={variable_style.dateInputView}>
                        <VSPIcon
                            iconName='calendar'
                            marginRight={VERTICAL_UNIT}
                            color={TICKET_COLORS.HEADER[this.props.ticketColor]}
                        />
                        <VSPText style={variable_style.text}>날짜</VSPText>
                    </View>
                    <View style={variable_style.timeInputView}>
                        <VSPIcon
                            iconName='clock'
                            marginRight={VERTICAL_UNIT}
                            color={TICKET_COLORS.HEADER[this.props.ticketColor]}
                        />
                        <VSPText style={variable_style.text}>시간</VSPText>
                    </View>
                </View>
                <View style={this._fixed_style.fromtoView}>
                    <VSPText style={this._fixed_style.fromtoText}>도착</VSPText>
                    <View style={variable_style.dateInputView}>
                        <VSPIcon
                            iconName='calendar'
                            marginRight={VERTICAL_UNIT}
                            color={TICKET_COLORS.HEADER[this.props.ticketColor]}
                        />
                        <VSPText style={variable_style.text}>날짜</VSPText>
                    </View>
                    <View style={variable_style.timeInputView}>
                        <VSPIcon
                            iconName='clock'
                            marginRight={VERTICAL_UNIT}
                            color={TICKET_COLORS.HEADER[this.props.ticketColor]}
                        />
                        <VSPText style={variable_style.text}>시간</VSPText>
                    </View>
                </View>
                <Modal
                    isVisible={false}
                >
                    <View style={this._fixed_style.container}>
                    </View>
                </Modal>
            </View>
        );
    }
}