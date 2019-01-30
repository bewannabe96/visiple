import React from 'react';
import { StyleProp, StyleSheet, ScrollView, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';
import { THEME_HEADER_FONTSIZE } from '../../types/config/theme';
import { TICKET_COLORS } from '../../types/config/ticket_theme';
import { VSPScreenProps } from '../../types/props/vsp-screen';

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

interface NewTicketScreenProps extends VSPScreenProps{
    /**
     * Ticket data
     */
    ticketData: TicketDataState,

    /**
     * Dispatch
     */
    setTicketColor: any,
}

/**
 * NewTicketScreen
 * 
 * @property
 * - ```ticketData```: Ticket data
 */
export default class NewTicketScreen extends React.Component<NewTicketScreenProps> {
    private _fixed_style: StyleProp<any>;

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

    constructor(props: NewTicketScreenProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
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

            friendsScrollView: {
                flexDirection: 'row',
                marginTop: VERTICAL_UNIT,
            },

            bottomView: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }
        });
    }

    render() {
        return (
            <VSPContainer>
                <ScrollView contentContainerStyle={this._fixed_style.scrollView}>
                    <View style={this._fixed_style.categoryView}>
                        <VSPText style={this._fixed_style.titleText}>티켓 제목</VSPText>
                        <VSPTextInput
                            placeholder='제목을 입력해 주세요.'
                            fontSize={THEME_HEADER_FONTSIZE}
                            marginTop={VERTICAL_UNIT}
                        />
                    </View>
                    <View style={this._fixed_style.categoryView}>
                        <View style={this._fixed_style.titleView}>
                            <VSPText style={this._fixed_style.titleText}>기간</VSPText>
                            <VSPText>{12} 박 {13} 일</VSPText>
                        </View>
                        <DateTimePickerContainer />
                    </View>
                    <View style={this._fixed_style.categoryView}>
                        <VSPText style={this._fixed_style.titleText}>테마 색상</VSPText>
                        <TicketColorPickerContainer />
                    </View>
                    <View style={this._fixed_style.categoryView}>
                        <View style={this._fixed_style.titleView}>
                            <VSPText style={this._fixed_style.titleText}>친구</VSPText>
                            <VSPTextButton
                                icon='plus'
                                fontSize={THEME_HEADER_FONTSIZE}
                            />
                        </View>
                        <ScrollView
                            contentContainerStyle={this._fixed_style.friendsScrollView}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {/* <InvitedFriendItem />
                            <InvitedFriendItem />
                            <InvitedFriendItem /> */}
                        </ScrollView>
                        <View style={this._fixed_style.footerView}>
                            <VSPText>총 {8}명</VSPText>
                        </View>
                    </View>
                </ScrollView>
                <View style={this._fixed_style.bottomView}>
                    <VSPColoredButton
                        text='완료'
                        fontSize={THEME_HEADER_FONTSIZE}
                        margin={2*VERTICAL_UNIT}
                        color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]}
                    />
                    <VSPBottomBar color={TICKET_COLORS.HEADER[this.props.ticketData.ticketColor]} />
                </View>
            </VSPContainer>
        );
    };
}