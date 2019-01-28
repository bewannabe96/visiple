import React from 'react';
import { StyleProp, StyleSheet, ScrollView, View } from 'react-native';

import { VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../config/size';
import { THEME_HEADER_FONTSIZE } from '../../config/theme';
import { VSPScreenProps } from '../../props/vsp-screen';

import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPButton from '../../components/vsp-button';
import VSPBottomBar from '../../components/vsp-bottombar';

import { ThemeColorPicker } from '../../containers/new-ticket-containers';
import { TICKET_COLORS, TicketHeaderColorType } from '../../config/ticket_theme';

interface NewTicketScreenProps extends VSPScreenProps{
    /**
     * Theme color of the ticket
     */
    themeColor: TicketHeaderColorType,
}

/**
 * NewTicketScreen
 * 
 * @property
 * - ```themeColor```: Theme color of the ticket
 */
export default class NewTicketScreen extends React.Component<NewTicketScreenProps> {
    private _fixed_style: StyleProp<any>;

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
                        {/* <DateTimePicker /> */}
                    </View>
                    <View style={this._fixed_style.categoryView}>
                        <VSPText style={this._fixed_style.titleText}>테마 색상</VSPText>
                        <ThemeColorPicker />
                    </View>
                    <View style={this._fixed_style.categoryView}>
                        <View style={this._fixed_style.titleView}>
                            <VSPText style={this._fixed_style.titleText}>친구</VSPText>
                            <VSPButton
                                buttonStyle='text-only'
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
                    <VSPButton
                        text='완료'
                        fontSize={THEME_HEADER_FONTSIZE}
                        margin={2*VERTICAL_UNIT}
                    />
                    <VSPBottomBar color={TICKET_COLORS.HEADER[this.props.themeColor]} />
                </View>
            </VSPContainer>
        );
    };
}