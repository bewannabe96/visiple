import React from 'react';
import { View, ScrollView, StyleProp, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Modal from "react-native-modal";

import { THEME_COLORS, addShadowProperties, THEME_MINOR_FONTSIZE, THEME_HEADER_FONTSIZE } from '../../types/config/theme';
import { VSP_EDGE_PADDING, VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../types/config/size';
import { VSPScreenProps } from '../../types/props/vsp-screen';

import VSPContainer from '../../components/vsp-container';
import VSPHeader, { VSPHeaderTitle, VSPHeaderMenu } from '../../components/vsp-header';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPBadge from '../../components/vsp-badge';
import VSPBottomBar from '../../components/vsp-bottombar';
import VSPProfile from '../../components/vsp-profile';
import VSPTextButton from '../../components/vsp-text-button';
import VSPRoundIconButton from '../../components/vsp-round-icon-button';

export default class VSPFriendScreen extends React.Component<VSPScreenProps> {
    private _fixed_style: StyleProp<any>;

    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }) => {
        return {
            header: (
                <VSPHeader
                    headerTitle={ (<VSPHeaderTitle text='친구' />) }
                    headerLeft={ VSPHeaderMenu(navigation) }
                />
            ),
        };
    };

    constructor(props: VSPScreenProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            searchView: {
                justifyContent: 'center',
                backgroundColor: THEME_COLORS['grey-white'],
                height: 10*VERTICAL_UNIT,
                paddingHorizontal: VSP_EDGE_PADDING,
            },

            friendLabelView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: THEME_COLORS['ocean-blue'],
                paddingHorizontal: VSP_EDGE_PADDING,
                paddingVertical: VERTICAL_UNIT,
                ...addShadowProperties(),
            },

            friendsView: {
                paddingBottom: 2*VERTICAL_UNIT,
            },
        });
    }

    render() {
        return (
            <VSPContainer>
                <View style={this._fixed_style.searchView}>
                    <VSPTextInput
                        placeholder='검색'
                        frontIcon='search'
                        displayUnderline={false}
                    />
                </View>
                <View style={this._fixed_style.friendLabelView}>
                    <VSPText theme='white'>친구</VSPText>
                    <VSPBadge
                        value={10}
                        theme='brown'
                    />
                </View>
                <ScrollView contentContainerStyle={this._fixed_style.friendsView}>
                    <FriendItem name='홍길동' email='testtest12@gmail.com'/>
                    <FriendItem name='김덕순' email='testtest12@gmail.com'/>
                    <FriendItem name='권홍순' email='testtest12@gmail.com'/>
                    <FriendItem name='강호동' email='testtest12@gmail.com'/>
                    <FriendItem name='구강철' email='testtest12@gmail.com'/>
                    <FriendItem name='나길다' email='testtest12@gmail.com'/>
                    <FriendItem name='홍준호' email='testtest12@gmail.com'/>
                    <FriendItem name='황덕철' email='testtest12@gmail.com'/>
                    <FriendItem name='구철자' email='testtest12@gmail.com'/>
                    <FriendItem name='남아공' email='testtest12@gmail.com'/>
                </ScrollView>
                <VSPBottomBar />
                <AddFriendModal />
            </VSPContainer>
        );
    };
}

interface FriendItemProps {
    /**
     * Name of the friend
     */
    name: string;

    /**
     * Email of the friend
     */
    email: string;
}

/**
 * FriendItem
 * 
 * @property 
 * - ```name```(required): Name of the friend
 * - ```email```(required): Email of the friend
 */
class FriendItem extends React.Component<FriendItemProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: FriendItemProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            itemView: {
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: THEME_COLORS['white'],
                borderRadius: HORIZONTAL_UNIT,
                paddingHorizontal: 4*HORIZONTAL_UNIT,
                paddingVertical: 2*VERTICAL_UNIT,
                marginTop: 2*VERTICAL_UNIT,
                marginHorizontal: VSP_EDGE_PADDING,
                ...addShadowProperties(),
            },

            infoView: {
                flex: 1,
            },

            nameText: {
                fontWeight: 'bold',
                marginBottom: VERTICAL_UNIT,
            },

            emailText: {
                fontSize: THEME_MINOR_FONTSIZE,
            },
        });
    }

    render() {
        return (
            <View style={this._fixed_style.itemView}>
                <VSPProfile
                    marginRight={4*HORIZONTAL_UNIT}
                />
                <View style={this._fixed_style.infoView}>
                    <VSPText style={this._fixed_style.nameText}>
                        {this.props.name}
                    </VSPText>
                    <VSPText style={this._fixed_style.emailText}>
                        {this.props.email}
                    </VSPText>
                </View>
                <VSPTextButton
                    icon='next'
                    fontSize={THEME_HEADER_FONTSIZE}
                />
            </View>
        );
    }
}

class AddFriendModal extends React.Component {
    private _fixed_style: StyleProp<any>;

    state = {
        modalVisible: false,
    }

    constructor(props: any) {
        super(props);

        this._fixed_style = StyleSheet.create({
            overlayView: {
                position: 'absolute',
                bottom: 5*VERTICAL_UNIT,
                right: 6*HORIZONTAL_UNIT,
                ...addShadowProperties(),
            },

            container: {
                height: '50%',
                width: '90%',
                alignSelf: 'center',
            },

            headerView: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 12*HORIZONTAL_UNIT,
                borderTopLeftRadius: 2*HORIZONTAL_UNIT,
                borderTopRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['grey-white'],
                ...addShadowProperties(),
            },

            headerTitleView: {
                width: '40%',
                alignItems: 'center',
            },

            headerTitleText: {
                fontSize: THEME_HEADER_FONTSIZE,
                color: THEME_COLORS['brown'],
            },

            headerRightView: {
                width: '30%',
                alignItems: 'flex-end',
            },
            
            bodyView: {
                flex: 1,
                padding: 4*HORIZONTAL_UNIT,
                borderBottomLeftRadius: 2*HORIZONTAL_UNIT,
                borderBottomRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['white'],
            },

            resultView: {
                flex: 1,
            },
        });
    }

    render() {
        return (
            <View style={this._fixed_style.overlayView}>
                <VSPRoundIconButton
                    icon='plus'
                    fontSize={5*HORIZONTAL_UNIT}
                    theme='brown'
                    onPress={()=>{this.setState({modalVisible: true})}}
                />
                <Modal
                    isVisible={this.state.modalVisible}
                    avoidKeyboard={true}
                >
                    <View style={this._fixed_style.container}>
                        <View style={this._fixed_style.headerView}>
                            <View style={this._fixed_style.headerTitleView}>
                                <VSPText style={this._fixed_style.headerTitleText}>친구 추가</VSPText>
                            </View>
                            <View style={this._fixed_style.headerRightView}>
                                <VSPTextButton
                                    icon='cancel'
                                    marginRight={4*HORIZONTAL_UNIT}
                                    onPress={()=>{this.setState({modalVisible: false})}}
                                />
                            </View>
                        </View>
                        <View style={this._fixed_style.bodyView}>
                            <VSPTextInput
                                placeholder='이메일을 입력하세요'
                                rearIcon='search'
                                textContentType='emailAddress'
                            />
                            <View style={this._fixed_style.resultView}>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}