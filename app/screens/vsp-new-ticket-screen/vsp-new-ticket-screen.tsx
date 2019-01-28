import React from 'react';
import { StyleProp, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Modal from 'react-native-modal';

import { TICKET_COLORS } from '../../config/ticket_theme';
import { THEME_HEADER_FONTSIZE, THEME_COLORS, THEME_MINOR_FONTSIZE, RawColorType } from '../../config/theme';
import { VSP_EDGE_PADDING, VERTICAL_UNIT } from '../../config/size';
import { VSPScreenProps } from '../../props/vsp-screen';

import VSPHeader, { VSPHeaderTitle, VSPHeaderBack } from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPButton from '../../components/vsp-button';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPProfile from '../../components/vsp-profile';
import VSPIcon from '../../components/vsp-icon';
import VSPBottomBar from '../../components/vsp-bottombar';

export default class VSPNewTicketScreen extends React.Component<VSPScreenProps> {
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

    constructor(props: VSPScreenProps) {
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
                        <DateTimePicker />
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
                            <InvitedFriendItem />
                            <InvitedFriendItem />
                            <InvitedFriendItem />
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
                    <VSPBottomBar />
                </View>
            </VSPContainer>
        );
    };
}

/**
 * ThemeColorPicker
 */
class ThemeColorPicker extends React.Component {
    private _colors: string[] = Object.keys(TICKET_COLORS.HEADER);
    private _colorview_style: (color: RawColorType, selected: boolean)=>{};

    state = {
        selected: this._colors[0],
    }

    constructor(props: VSPScreenProps) {
        super(props);

        this._colorview_style = (color: RawColorType, selected: boolean) => ({
                height: 10*VERTICAL_UNIT,
                width: 10*VERTICAL_UNIT,
                borderRadius: 5*VERTICAL_UNIT,
                marginHorizontal: VERTICAL_UNIT,
                backgroundColor: color,
                borderColor: THEME_COLORS['grey'],
                borderWidth: selected ? 3 : 0,
        });
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={
                    {
                        flexDirection: 'row',
                        marginTop: VERTICAL_UNIT,
                    }
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    this._colors.map(color => (
                        <TouchableOpacity
                            key={color}
                            style={this._colorview_style(TICKET_COLORS.HEADER[color],
                                this.state.selected===color)}
                            onPress={()=>{this.setState({selected: color})}}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

/**
 * InvitedFriendItem
 */
class InvitedFriendItem extends React.Component {
    render() {
        return (
            <View
                style={
                    {
                        alignItems: 'center',
                        padding: VERTICAL_UNIT,
                        marginHorizontal: VERTICAL_UNIT,
                    }
                }
            >
                <VSPProfile />
                <VSPText
                    style={
                        {
                            marginVertical: VERTICAL_UNIT,
                        }
                    }
                >
                    김윤회
                </VSPText>
                <VSPButton
                    buttonStyle='text-only'
                    icon='cancel'
                    fontSize={THEME_MINOR_FONTSIZE}
                />
            </View>
        );
    }
}

/**
 * DateTimePicker
 */
class DateTimePicker extends React.Component {
    private _fixed_style: StyleProp<any>;

    constructor(props: VSPScreenProps) {
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