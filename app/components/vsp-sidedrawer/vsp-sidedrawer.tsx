import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';
import { DrawerItemsProps } from "react-navigation";

import { THEME_COLORS } from '../../config/theme';
import { VSP_EDGE_PADDING } from '../../config/size';

import SideDrawerItem from './sidedrawer-item';
import ProfileTab from './profiletab';

import VSPContainer from '../vsp-container';
import VSPButton from '../vsp-button';
import VSPHeader from '../vsp-header';

/**
 * VSPSideDrawer
 */
export default class VSPSideDrawer extends React.Component<DrawerItemsProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: DrawerItemsProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            headerLeftButtonsView: {
                flexDirection: 'row',
            },

            bodyView: {
                backgroundColor: THEME_COLORS['cottoncandy-blue'],
            },
        });
    }

    render() {
        return (
            <VSPContainer>
                <VSPHeader
                    headerRight={
                        <VSPButton
                            buttonStyle='text-only'
                            icon='previous'
                            fontSize={20}
                            theme='brown'
                            onPress={()=>{this.props.navigation.closeDrawer()}}
                        />
                    }
                    headerLeft={
                        <View style={this._fixed_style.headerLeftButtonsView}>
                            <VSPButton
                                buttonStyle='text-only'
                                icon='home'
                                fontSize={25}
                                marginRight={VSP_EDGE_PADDING}
                                theme='brown'
                                onPress={()=>{this.props.navigation.navigate('HomeStack')}}
                            />
                            <VSPButton
                                buttonStyle='text-only'
                                icon='settings'
                                fontSize={25}
                                theme='brown'
                            />
                        </View>
                    }
                />
                <View style={this._fixed_style.bodyView}>
                    <ProfileTab name='홍길동' email='testuser@gmail.com' />
                    <SideDrawerItem title='친구' desinationRouteName='FriendStack' />
                    <SideDrawerItem title='여행 티켓' desinationRouteName='TicketStack'/>
                    <SideDrawerItem title='새로운 여행 기록' />
                </View>
            </VSPContainer>
        );
    }
}