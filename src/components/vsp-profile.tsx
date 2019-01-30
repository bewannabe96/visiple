import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../config/theme';
import { HORIZONTAL_UNIT } from '../config/size';
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
    private _fixed_style: StyleProp<any>;

    public static defaultProps = {
        size: 12*HORIZONTAL_UNIT,
        castShadow: true,
    };

    constructor(props: VSPProfileProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                backgroundColor: THEME_COLORS['white'],
                height: props.size!,
                width: props.size!,
                borderRadius: 0.5*props.size!,
                ...(props.castShadow! ? addShadowProperties() : null),
                ...decodeVSPMarginProps(props),
            },
        });
    }

    render() {
        return (
            <View style={this._fixed_style.container} />
        );
    }
}