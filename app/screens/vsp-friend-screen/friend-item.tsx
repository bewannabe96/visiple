import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties, THEME_HEADER_FONTSIZE, THEME_MINOR_FONTSIZE } from '../../config/theme';
import { HORIZONTAL_UNIT, VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../config/size';

import VSPProfile from '../../components/vsp-profile';
import VSPButton from '../../components/vsp-button';
import VSPText from '../../components/vsp-text';

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
 * - 'name' (required): Name of the friend
 * - 'email' (required): Email of the friend
 */
export default class FriendItem extends React.Component<FriendItemProps> {
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
                <VSPButton
                    buttonStyle='text-only'
                    icon='next'
                    fontSize={THEME_HEADER_FONTSIZE}
                />
            </View>
        );
    }
}