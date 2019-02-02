import React from 'react';
import { View, ScrollView, StyleProp, StyleSheet } from 'react-native';

import { VERTICAL_UNIT } from '../../types/config/size';
import { THEME_MINOR_FONTSIZE } from '../../types/config/theme';
import { TicketHeaderColorType, TICKET_COLORS } from '../../types/config/ticket_theme';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPTextButton from '../../components/vsp-text-button';

export interface InvitedFriendsListProps {
    // STATES
    ticketColor: TicketHeaderColorType,
}

/**
 * InvitedFriendsList
 * 
 * @property
 * - ```ticketColor```(required): Color of the ticket
 */
export default class InvitedFriendsList extends React.Component<InvitedFriendsListProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: InvitedFriendsListProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            friendsScrollView: {
                flexDirection: 'row',
            },
        })
    }

    _render_item() {
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
                <VSPText marginY={VERTICAL_UNIT}>
                    김윤회
                </VSPText>
                <VSPTextButton
                    icon='cancel'
                    fontSize={THEME_MINOR_FONTSIZE}
                    color={TICKET_COLORS.HEADER[this.props.ticketColor]}
                />
            </View>
        )
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={this._fixed_style.friendsScrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this._render_item()}
            </ScrollView>
        );
    }
}