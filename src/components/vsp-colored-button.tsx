import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, Text } from "react-native";

import { ThemeColorType, THEME_COLORS, THEME_FONT, RawColorType, THEME_FONTSIZE } from "../types/config/theme";
import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';

import { IconNameType } from "../assets/icons";

interface VSPColoredButtonProps extends VSPMarginProps {
    /**
     * Text inside the button
     */
    text?: string;

    /**
     * Icon to be displayed in the button
     */
    icon?: IconNameType;

    /**
     * Size of the text and the icon inside the button
     */
    fontSize: number;

    /**
     * Theme color of the button
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
 * VSPColoredButton
 * 
 * @property
 * - ```text```: Text inside the button
 * - ```icon```: Icon to be displayed in the button
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
export default class VSPColoredButton extends React.Component<VSPColoredButtonProps> {
    public static defaultProps = {
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    render() {
        let style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 0.5*this.props.fontSize,
                borderRadius: 0.3*this.props.fontSize,
                backgroundColor: this.props.color ?
                            this.props.color : THEME_COLORS[this.props.theme!],
                ...decodeVSPMarginProps(this.props),
            },
    
            text: {
                fontSize: this.props.fontSize,
                fontFamily: THEME_FONT,
                color: THEME_COLORS['white'],
                marginLeft: this.props.icon ? 0.5*this.props.fontSize : 0,
            },
        });

        return (
            <TouchableOpacity
                style={style.touchableOpacity}
                activeOpacity={0.6}
                onPress={this.props.onPress}
            >
                {
                    !!this.props.icon &&
                    <VSPIcon
                        iconName={this.props.icon}
                        color={THEME_COLORS['white']}
                        size={this.props.fontSize}
                    />
                }
                {
                    !!this.props.text &&
                    <Text style={style.text}>
                        {this.props.text}
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}