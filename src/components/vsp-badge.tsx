import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties, ThemeColorType, THEME_FONTSIZE } from '../types/config/theme';
import { decodeVSPMarginProps, VSPMarginProps } from '../types/props/vsp-margin';

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
 * - ```value```(required): Value of the badge
 * - ```size```: Size of the badge (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the badge (by default ```ocean-blue```)
 */
export default class VSPBadge extends React.Component<VSPBadgeProps> {
    public static defaultProps = {
        size: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    render() {
        let style = StyleSheet.create({
            container: {
                borderRadius: this.props.size!,
                backgroundColor: THEME_COLORS[this.props.theme!],
                ...decodeVSPMarginProps(this.props),
                ...addShadowProperties(1),
            },

            text: {
                fontSize: 0.8*this.props.size!,
                marginVertical: 0.3*this.props.size!,
                marginHorizontal: 0.6*this.props.size!,
                color: THEME_COLORS['white'],
            }
        });

        return (
            <View style={style.container}>
                <VSPText style={style.text}>
                    {this.props.value}
                </VSPText>
            </View>
        );
    }
}