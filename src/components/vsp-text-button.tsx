import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { ThemeColorType, THEME_FONT, THEME_COLORS, THEME_FONTSIZE, RawColorType } from '../config/theme';
import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';

import { IconNameType } from "../assets/icons";

interface VSPTextButtonProps extends VSPMarginProps {
    /**
     * Text inside the button
     */
    text?: string;

    /**
     * Icon to be displayed in the button
     */
    icon?: IconNameType;

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
 * VSPTextButton
 * 
 * @property
 * - ```text```: Text inside the button
 * - ```icon```: Icon to be displayed in the button
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
export default class VSPTextButton extends React.Component<VSPTextButtonProps> {
    private _fixed_style: StyleProp<any>

    public static defaultProps = {
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    constructor(props: VSPTextButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                ...decodeVSPMarginProps(props),
            },
    
            text: {
                fontSize: props.fontSize,
                fontFamily: THEME_FONT,
                marginLeft: props.icon ? 0.7*props.fontSize! : 0,
                textDecorationLine: 'underline',
            },
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={this._fixed_style.touchableOpacity}
                onPress={this.props.onPress}
            >
                {
                    !!this.props.icon &&
                    <VSPIcon
                        iconName={this.props.icon}
                        color={this.props.color ? this.props.color : THEME_COLORS[this.props.theme!]}
                        size={this.props.fontSize}
                    />
                }
                {
                    !!this.props.text &&
                    <Text
                        style={[
                            this._fixed_style.text,
                            {
                                color: this.props.color ?
                                    this.props.color : THEME_COLORS[this.props.theme!],
                            }
                        ]}
                    >
                        {this.props.text}
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}