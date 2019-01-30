import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_MINOR_FONTSIZE } from '../../types/config/theme';
import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/config/size';

import VSPText from '../vsp-text';
import VSPProfile from '../vsp-profile';

interface ProfileTabProps {
    /**
     * Name of the user
     */
    name: string,

    /**
     * Email of the user
     */
    email: string,
}

/**
 * ProfileTab
 * 
 * Props
 * - ```name```: Title of the item
 * - ```email```: Email of the user
 */
export default class ProfileTab extends React.Component<ProfileTabProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: ProfileTabProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                flexDirection: 'row',
                backgroundColor: THEME_COLORS['grey-white'],
                padding: VSP_EDGE_PADDING,
                marginBottom: 1,
            },

            infoView: {
                flex: 1,
                justifyContent: 'center',
                paddingLeft: 2*HORIZONTAL_UNIT,
            },

            nameText: {
                fontWeight: 'bold',
                marginBottom: HORIZONTAL_UNIT,
            },

            emailText: {
                fontSize: THEME_MINOR_FONTSIZE,
            },
        });
    }

    render() {
        return (
            <View style={this._fixed_style.container}>
                <VSPProfile />
                <View style={this._fixed_style.infoView}>
                    <VSPText style={this._fixed_style.nameText}>
                        {this.props.name}
                    </VSPText>
                    <VSPText style={this._fixed_style.emailText}>
                        {this.props.email}
                    </VSPText>
                </View>
            </View>
        );
    }
}