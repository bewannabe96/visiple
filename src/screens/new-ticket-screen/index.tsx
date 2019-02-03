import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';
import { THEME_HEADER_FONTSIZE } from '../../types/config/theme';
import { TICKET_COLORS } from '../../types/config/ticket_theme';
import { VSPScreenProps } from '../../types/props/vsp-screen';
import { formatDateString, formatTimeString } from '../../types/lib/vsp-date';

import VSPHeader, { VSPHeaderTitle, VSPHeaderBack } from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPBottomBar from '../../components/vsp-bottombar';
import VSPTextButton from '../../components/vsp-text-button';
import VSPColoredButton from '../../components/vsp-colored-button';

import { TicketDataState } from '../../types/redux/new-ticket-types';

import TicketColorPickerContainer from '../../containers/vsp-new-ticket-container/ticket-color-picker';
import DateTimePickerContainer from '../../containers/vsp-new-ticket-container/date-time-picker';
import InvitedFriendsListContainer from '../../containers/vsp-new-ticket-container/invited-friends-list';
import VSPIcon from '../../components/vsp-icon';

interface NewTicketScreenProps extends VSPScreenProps{
    // STATES
    ticketData: TicketDataState,

    // ACTION CREATORS
    setTicketColor: any,
    openPeriodModal: any,
    switchFromToTab: any,
}

/**
 * NewTicketScreen
 * 
 * @property
 * - ```ticketData```: Ticket data
 */
export default class NewTicketScreen extends React.Component<NewTicketScreenProps> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }) => {
        return {
            header: (
                <VSPHeader
                    headerTitle={ (<VSPHeaderTitle text='새로운 티켓' />) }
                    headerLeft={VSPHeaderBack(navigation)}
                />
            ),
        };
    };

    _open_modal_with_fromtab = () => {
        this.props.switchFromToTab('from-tab');
        this.props.openPeriodModal();
    }

    _open_modal_with_totab = () => {
        this.props.switchFromToTab('to-tab');
        this.props.openPeriodModal();
    }

    render() {
        let style = StyleSheet.create({
            scrollView: {
                paddingVertical: 4*VERTICAL_UNIT,
                paddingHorizontal: VSP_EDGE_PADDING,
            },

            categoryView: {
                marginVertical: 3*VERTICAL_UNIT,
            },

            titleView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },

            footerView: {
                alignItems: 'flex-end',
            },

            titleText: {
                fontSize: THEME_HEADER_FONTSIZE,
                fontWeight: 'bold',
            },

            fromtoView: {
                flexDirection: 'row',
                marginTop: 4*VERTICAL_UNIT,
                marginLeft: 4*VERTICAL_UNIT,
            },

            dateInputView: {
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
                flex: 3,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketData.ticketColor],
            },

            timeInputView: {
                flexDirection: 'row',
                borderBottomWidth: 2,
                marginLeft: 4*VERTICAL_UNIT,
                flex: 2,
                borderColor: TICKET_COLORS.HEADER[this.props.ticketData.ticketColor],
            },

            inputText: {
                color: TICKET_COLORS.HEADER[this.props.ticketData.ticketColor],
            },

            bottomView: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }
        });

        return (
            <VSPContainer>
                <ScrollView contentContainerStyle={style.scrollView}>
                    <View style={style.categoryView}>
                        <VSPText style={style.titleText}>티켓 제목</VSPText>
                        <VSPTextInput
                            placeholder='제목을 입력해 주세요.'
                            fontSize={THEME_HEADER_FONTSIZE}
                            marginTop={VERTICAL_UNIT}
                            color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                        />
                    </View>
                    <View style={style.categoryView}>
                        <View style={style.titleView}>
                            <VSPText style={style.titleText}>기간</VSPText>
                            <VSPText>{12} 박 {13} 일</VSPText>
                        </View>
                        <View style={style.fromtoView}>
                            <VSPText fontSize={THEME_HEADER_FONTSIZE}>시작</VSPText>
                            <TouchableOpacity
                                style={style.dateInputView}
                                activeOpacity={0.6}
                                onPress={this._open_modal_with_fromtab}
                            >
                                <VSPIcon
                                    iconName='calendar'
                                    marginRight={VERTICAL_UNIT}
                                    color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                                />
                                <VSPText style={style.inputText}>
                                    {formatDateString(this.props.ticketData.period.fromDate)}
                                </VSPText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.timeInputView}
                                activeOpacity={0.6}
                                onPress={this._open_modal_with_fromtab}
                            >
                                <VSPIcon
                                    iconName='clock'
                                    marginRight={VERTICAL_UNIT}
                                    color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                                />
                                <VSPText style={style.inputText}>
                                    {formatTimeString(this.props.ticketData.period.fromDate)}
                                </VSPText>
                            </TouchableOpacity>
                        </View>
                        <View style={style.fromtoView}>
                            <VSPText fontSize={THEME_HEADER_FONTSIZE}>종료</VSPText>
                            <TouchableOpacity
                                style={style.dateInputView}
                                activeOpacity={0.6}
                                onPress={this._open_modal_with_totab}
                            >
                                <VSPIcon
                                    iconName='calendar'
                                    marginRight={VERTICAL_UNIT}
                                    color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                                />
                                <VSPText style={style.inputText}>
                                    {formatDateString(this.props.ticketData.period.toDate)}
                                </VSPText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.timeInputView}
                                activeOpacity={0.6}
                                onPress={this._open_modal_with_totab}
                            >
                                <VSPIcon
                                    iconName='clock'
                                    marginRight={VERTICAL_UNIT}
                                    color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                                />
                                <VSPText style={style.inputText}>
                                    {formatTimeString(this.props.ticketData.period.toDate)}
                                </VSPText>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.categoryView}>
                        <VSPText style={style.titleText}>테마 색상</VSPText>
                        <TicketColorPickerContainer />
                    </View>
                    <View style={style.categoryView}>
                        <View style={style.titleView}>
                            <VSPText style={style.titleText}>친구</VSPText>
                            <VSPTextButton
                                icon='plus'
                                fontSize={THEME_HEADER_FONTSIZE}
                                color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                            />
                        </View>
                        <InvitedFriendsListContainer />
                        <View style={style.footerView}>
                            <VSPText>총 {8}명</VSPText>
                        </View>
                    </View>
                </ScrollView>
                <View style={style.bottomView}>
                    <VSPColoredButton
                        text='완료'
                        fontSize={THEME_HEADER_FONTSIZE}
                        margin={2*VERTICAL_UNIT}
                        color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                    />
                    <VSPBottomBar color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]} />
                </View>

                <DateTimePickerContainer />
            </VSPContainer>
        );
    };
}