import React from 'react';
import { View, ScrollView, StyleProp, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { THEME_COLORS, addShadowProperties } from '../../config/theme';
import { VSP_EDGE_PADDING, VERTICAL_UNIT } from '../../config/size';
import { VSPScreenProps } from '../../props/vsp-screen';

import FriendItem from './friend-item';
import AddFriendModal from './addfriend-modal';

import VSPContainer from '../../components/vsp-container';
import VSPHeader, { VSPHeaderTitle, VSPHeaderMenu } from '../../components/vsp-header';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPBadge from '../../components/vsp-badge';
import VSPBottomBar from '../../components/vsp-bottombar';

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

            friendLabelText: {
                color: THEME_COLORS['white'],
            },

            friendsView: {
                flex: 1,
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
                    <VSPText style={this._fixed_style.friendLabelText}>친구</VSPText>
                    <VSPBadge
                        value={10}
                        theme='brown'
                    />
                </View>
                <ScrollView style={this._fixed_style.friendsView}>
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