import React from 'react';
import { Image, StyleProp, StyleSheet } from 'react-native';

import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';
import { ThemeColorType, RawColorType, THEME_COLORS, THEME_FONTSIZE } from '../types/config/theme';

import ICON_SOURCE, { IconNameType } from '../assets/icons';

interface VSPIconProps extends VSPMarginProps {
    /**
     * Name of the icon
     */
    iconName: IconNameType;

    /**
     * Size of the icon (by default ```THEME_FONTSIZE```)
     */
    size?: number;

    /**
     * Theme color of the icon (by default ```black```)
     */
    theme?: ThemeColorType;

    /**
     * Raw color of the icon
     */
    color?: RawColorType;
}

/**
 * VSPIcon
 * 
 * @property
 * - ```iconName```(required): Name of the icon
 * - ```size```: Size of the icon (by default THEME_FONTSIZE)
 * - ```theme```(variable): Theme color of the icon (by default ```black```)
 * - ```color ```(variable): Raw color of the icon
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPIcon extends React.Component<VSPIconProps> {
    private _fixed_style: StyleProp<any>;

    public static defaultProps = {
        size: THEME_FONTSIZE,
        theme: 'black',
    };

    constructor(props: VSPIconProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            image: {
                height: props.size!,
                width: props.size!,
                resizeMode: 'contain',
                ...decodeVSPMarginProps(props),
            },
        });
    }

    render() {
        return (
            <Image
                style={[
                    this._fixed_style.image,
                    {
                        tintColor: (this.props.color ? this.props.color : THEME_COLORS[this.props.theme!]),
                    }
                ]}
                source={ICON_SOURCE[this.props.iconName]}
            />
        );
    }
}