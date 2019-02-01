import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../types/config/theme';
import { HORIZONTAL_UNIT } from '../types/config/size';
import { decodeVSPMarginProps, VSPMarginProps } from '../types/props/vsp-margin';

interface VSPProfileProps extends VSPMarginProps {
    /**
     * Size of the icon (by default ```12VU```)
     */
    size?: number;

    /**
     * Casts shadow if true (by default ```true```)
     */
    castShadow?: boolean;
}

/**
 * VSPProfile
 * 
 * @property
 * - ```size```: Size of the icon (by default ```12HU```)
 * - ```castShadow```: Casts shadow if true (by default ```true```)
 */
export default class VSPProfile extends React.Component<VSPProfileProps> {
    public static defaultProps = {
        size: 12*HORIZONTAL_UNIT,
        castShadow: true,
    };

    render() {
        let style = StyleSheet.create({
            container: {
                backgroundColor: THEME_COLORS['white'],
                height: this.props.size!,
                width: this.props.size!,
                borderRadius: 0.5*this.props.size!,
                ...(this.props.castShadow! ? addShadowProperties() : null),
                ...decodeVSPMarginProps(this.props),
            },
        });

        return (
            <View style={style.container} />
        );
    }
}