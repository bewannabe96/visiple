import React from 'react';
import { StyleProp, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import { VERTICAL_UNIT } from '../../config/size';
import { THEME_HEADER_FONTSIZE } from '../../config/theme';

import VSPText from '../../components/vsp-text';
import VSPIcon from '../../components/vsp-icon';

/**
 * DateTimePicker
 */
class DateTimePicker extends React.Component {
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

            dateInputView: {
                flex: 3,
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
            },

            timeInputView: {
                flex: 2,
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
            },

            container: {
                width: '90%',
                alignSelf: 'center',
            },
        });
    }

    render() {
        return (
            <View>
                <View style={this._fixed_style.fromtoView}>
                    <VSPText style={this._fixed_style.fromtoText}>시작</VSPText>
                    <View style={this._fixed_style.dateInputView}>
                        <VSPIcon
                            iconName='calendar'
                            marginRight={VERTICAL_UNIT}
                        />
                        <VSPText>날짜</VSPText>
                    </View>
                    <View style={this._fixed_style.timeInputView}>
                        <VSPIcon
                            iconName='clock'
                            marginRight={VERTICAL_UNIT}
                        />
                        <VSPText>시간</VSPText>
                    </View>
                </View>
                <View style={this._fixed_style.fromtoView}>
                    <VSPText style={this._fixed_style.fromtoText}>도착</VSPText>
                    <View style={this._fixed_style.dateInputView}>
                        <VSPIcon
                            iconName='calendar'
                            marginRight={VERTICAL_UNIT}
                        />
                        <VSPText>날짜</VSPText>
                    </View>
                    <View style={this._fixed_style.timeInputView}>
                        <VSPIcon
                            iconName='clock'
                            marginRight={VERTICAL_UNIT}
                        />
                        <VSPText>시간</VSPText>
                    </View>
                </View>
                <Modal
                    isVisible={true}
                >
                    <View style={this._fixed_style.container}>
                    </View>
                </Modal>
            </View>
        );
    }
}