import React from 'react';
import { Text, TouchableOpacity, StyleProp, GestureResponderEvent, StyleSheet, View } from 'react-native';

import { THEME_FONTSIZE, THEME_COLORS, ThemeColorType, THEME_FONT } from '../config/theme';
import { VSPMarginProps, decodeVSPMarginProps } from '../props/vsp-margin';

import VSPIcon from './vsp-icon';
import { IconNameType } from './vsp-icon/src';

interface ColoredButtonProps {
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
    theme: ThemeColorType;

    /**
     * Callback function when button pressed
     */
    onPress?: (event: GestureResponderEvent) => void;
}

/**
 * ColoredButton
 * 
 * @property
 * - ```fontSize```(required): Size of the text and the icon inside the button
 * - ```theme```(required): Theme color of the button
 * - ```text```: Text inside the button
 * - ```icon```: Icon to be displayed in the button
 * - ```onPress```: Callback function when button pressed
 */
class ColoredButton extends React.Component<ColoredButtonProps> {
    private _fixed_style: StyleProp<any>

    constructor(props: ColoredButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 0.5*props.fontSize,
                borderRadius: 0.3*props.fontSize,
                backgroundColor: THEME_COLORS[props.theme],
            },
    
            text: {
                fontSize: props.fontSize,
                fontFamily: THEME_FONT,
                color: THEME_COLORS['white'],
                marginLeft: props.icon ? 0.5*props.fontSize : 0,
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
                        color={THEME_COLORS['white']}
                        size={this.props.fontSize}
                    />
                }
                {
                    !!this.props.text &&
                    <Text style={this._fixed_style.text}>
                        {this.props.text}
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}

interface RoundIconButtonProps {
    /**
     * Icon to be displayed in the button
     */
    icon: IconNameType;

    /**
     * Size of the text and the icon inside the button
     */
    fontSize: number;

    /**
     * Theme color of the button
     */
    theme: ThemeColorType;

    /**
     * Callback function when button pressed
     */
    onPress?: (event: GestureResponderEvent) => void;
}

/**
 * RoundIconButton
 * 
 * @property
 * - ```icon```(required): Icon to be displayed in the button
 * - ```fontSize```(required): Size of the text and the icon inside the button
 * - ```theme```(required): Theme color of the button
 * - ```onPress```: Callback function when button pressed
 */
class RoundIconButton extends React.Component<RoundIconButtonProps> {
    private _fixed_style: StyleProp<any>

    constructor(props: RoundIconButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 2*props.fontSize,
                width: 2*props.fontSize,
                borderRadius: props.fontSize,
                backgroundColor: THEME_COLORS[props.theme],
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

interface TextOnlyButtonProps {
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
    theme: ThemeColorType;

    /**
     * Callback function when button pressed
     */
    onPress?: (event: GestureResponderEvent) => void;
}

/**
 * TextOnlyButton
 * 
 * @property
 * - ```fontSize```(required): Size of the text and the icon inside the button
 * - ```theme```(required): Theme color of the button
 * - ```text```: Text inside the button
 * - ```icon```: Icon to be displayed in the button
 * - ```onPress```: Callback function when button pressed
 */
class TextOnlyButton extends React.Component<TextOnlyButtonProps> {
    private _fixed_style: StyleProp<any>

    constructor(props: TextOnlyButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            touchableOpacity: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
    
            text: {
                fontSize: props.fontSize,
                fontFamily: THEME_FONT,
                color: THEME_COLORS[props.theme],
                marginLeft: props.icon ? 0.7*props.fontSize : 0,
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
                        color={THEME_COLORS[this.props.theme]}
                        size={this.props.fontSize}
                    />
                }
                {
                    !!this.props.text &&
                    <Text style={this._fixed_style.text}>
                        {this.props.text}
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}

type ButtonStyleType
    = 'colored'
    | 'round-icon'
    | 'text-only';

interface VSPButtonProps extends VSPMarginProps {
    /**
     * Style of the button
     * 
     * - ```colored```: Block shaped button with rounded corner
     * - ```round-icon```: Circular shaped button with only icon
     * - ```text-only```: Text-only displayed button with underline under text
     */
    buttonStyle?: ButtonStyleType;
    
    /**
     * Text inside the button
     */
    text?: string;

    /**
     * Icon to be displayed in the button
     */
    icon?: IconNameType;

    /**
     * Size of the text and the icon inside the button (by default THEME_FONTSIZE)
     */
    fontSize?: number;

    /**
     * Theme color of the button (by default 'ocean-blue')
     */
    theme?: ThemeColorType;

    /**
     * Callback function when button pressed
     */
    onPress?: (event: GestureResponderEvent) => void;
}

/**
 * VSPButton
 * 
 * @property
 * - ```buttonStyle```: Style of the button (be default ```colored```)
 * - ```text```: Text inside the button
 * - ```icon```: Icon to be displayed in the button
 * - ```fontSize```: Size of the text and the icon inside the button (by default THEME_FONTSIZE)
 * - ```onPress```: Callback function when button pressed
 * - ```theme```: Theme color of the button (by default ```ocean-blue```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPButton extends React.Component<VSPButtonProps> {
    private _fixed_style: StyleProp<any>;

    public static defaultProps = {
        buttonStyle: 'colored',
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    constructor(props: VSPButtonProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                ...decodeVSPMarginProps(props),
            }
        });
    }
    render() {
        return (
            <View style={this._fixed_style.container}>
                {
                    this.props.buttonStyle==='colored' &&
                    <ColoredButton
                        text={this.props.text}
                        icon={this.props.icon}
                        fontSize={this.props.fontSize!}
                        theme={this.props.theme!}
                        onPress={this.props.onPress}
                    />
                }
                {
                    this.props.buttonStyle==='round-icon' &&
                    !!this.props.icon &&
                    <RoundIconButton
                        icon={this.props.icon}
                        fontSize={this.props.fontSize!}
                        theme={this.props.theme!}
                        onPress={this.props.onPress}
                    />
                }
                {
                    this.props.buttonStyle==='text-only' &&
                    <TextOnlyButton
                        text={this.props.text}
                        icon={this.props.icon}
                        fontSize={this.props.fontSize!}
                        theme={this.props.theme!}
                        onPress={this.props.onPress}
                    />
                }
            </View>
        );
    }
}