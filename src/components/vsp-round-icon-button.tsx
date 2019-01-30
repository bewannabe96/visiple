import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity } from "react-native";

import { ThemeColorType, THEME_COLORS, RawColorType, THEME_FONTSIZE } from "../types/config/theme";
import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';

import VSPIcon from "./vsp-icon";

import { IconNameType } from "../assets/icons";

interface VSPRoundIconButtonProps extends VSPMarginProps {
    /**
     * Icon to be displayed in the button
     */
    icon: IconNameType;

    /**
     * Size of the text and the icon inside the button (by default ```THEME_FONTSIZE```)
     */
    fontSize?: number;

    /**
     * Theme color of the button (by default ```ocean-blue```)
     */
    theme?: ThemeColorType;

    /**
     * Raw color of the button
     */
    color?: RawColorType;

    /**
     * Callback function when button pressed
     */
    onPress?: (event: GestureResponderEvent) => void;
}

/**
 * VSPRoundIconButton
 * 
 * @property
 * - ```icon```(required): Icon to be displayed in the button
 * - ```fontSize```: Size of the text and the icon inside the button (by default ```THEME_FONTSIZE```)
 * - ```theme```(variable): Theme color of the button (by default ```ocean-blue```)
 * - ```color```(variable): Raw color of the button
 * - ```onPress```: Callback function when button pressed
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPRoundIconButton extends React.Component<VSPRoundIconButtonProps> {
    private _fixed_style: StyleProp<any>

    public static defaultProps = {
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    constructor(props: VSPRoundIconButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 2*props.fontSize!,
                width: 2*props.fontSize!,
                borderRadius: props.fontSize!,
                ...decodeVSPMarginProps(props),
            },
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={[
                    this._fixed_style.touchableOpacity,
                    {
                        backgroundColor: this.props.color ?
                            this.props.color : THEME_COLORS[this.props.theme!],
                    }
                ]}
                onPress={this.props.onPress}
            >
                {
                    <VSPIcon
                        iconName={this.props.icon}
                        color={THEME_COLORS['white']}
                        size={this.props.fontSize}
                    />
                }
            </TouchableOpacity>
        );
    }
}