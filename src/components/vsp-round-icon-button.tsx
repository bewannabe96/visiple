import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";

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
     * Outline button style if true (by default ```false```)
     */
    outline?: boolean;

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
 * - ```outline```: Outline button style if true (by default ```false```)
 * - ```fontSize```: Size of the text and the icon inside the button (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the button (by default ```ocean-blue```)
 * - ```color```: Raw color of the button
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
    public static defaultProps = {
        outline: false,
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    render() {
        let color = this.props.color ?
            this.props.color : THEME_COLORS[this.props.theme!]
        let style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 2*this.props.fontSize!,
                width: 2*this.props.fontSize!,
                borderRadius: this.props.fontSize!,
                backgroundColor: this.props.outline! ? THEME_COLORS['none'] : color,
                borderColor: this.props.outline! ? color : THEME_COLORS['none'],
                borderWidth: this.props.outline! ? 1 : 0,
                ...decodeVSPMarginProps(this.props),
            },
        });

        return (
            <TouchableOpacity
                style={style.touchableOpacity}
                activeOpacity={0.6}
                onPress={this.props.onPress}
            >
                <VSPIcon
                    iconName={this.props.icon}
                    color={this.props.outline! ? color : THEME_COLORS['white']}
                    size={this.props.fontSize}
                />
            </TouchableOpacity>
        );
    }
}