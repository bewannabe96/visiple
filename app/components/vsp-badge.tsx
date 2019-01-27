import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties, ThemeColorType, THEME_FONTSIZE } from '../config/theme';
import { decodeVSPMarginProps, VSPMarginProps } from '../props/vsp-margin';

import VSPText from './vsp-text';

interface VSPBadgeProps extends VSPMarginProps {
    /**
     * Value of the badge
     */
    value: number;

    /**
     * Size of the badge (by default ```THEME_FONTSIZE```)
     */
    size?: number;

    /**
     * Theme color of the badge (by default ```ocean-blue```)
     */
    theme?: ThemeColorType;
}

/**
 * VSPBadge
 * 
 * @property
 * - ```value```(required, variable): Value of the badge
 * - ```size```: Size of the badge (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the badge (by default ```ocean-blue```)
 */
export default class VSPBadge extends React.Component<VSPBadgeProps> {
    private _fixed_style: StyleProp<any>

    public static defaultProps = {
        size: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    constructor(props: VSPBadgeProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                borderRadius: this.props.size!,
                backgroundColor: THEME_COLORS[this.props.theme!],
                ...decodeVSPMarginProps(props),
                ...addShadowProperties(1),
            },

            text: {
                fontSize: 0.8*this.props.size!,
                marginVertical: 0.3*this.props.size!,
                marginHorizontal: 0.6*this.props.size!,
                color: THEME_COLORS['white'],
            }
        });;
    }

    render() {
        return (
            <View style={this._fixed_style.container}>
                <VSPText style={this._fixed_style.text}>
                    {this.props.value}
                </VSPText>
            </View>
        );
    }
}