import React from 'react';
import { View, TextInput, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONTSIZE, ThemeColorType, THEME_FONT } from '../config/theme';
import { VSPMarginProps, decodeVSPMarginProps } from '../props/vsp-margin';

import VSPIcon from './vsp-icon';
import { IconNameType } from './vsp-icon/src';

/**
 * Text content type
 */
type textContentType
    = 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password';

interface VSPTextInputProps extends VSPMarginProps {
    /**
     * Placeholder of the textinput
     */
    placeholder: string;

    /**
     * Type of the text to be filled in (by default ```none```)
     */
    textContentType?: textContentType;

    /**
     * Size of the font (by default ```THEME_FONTSIZE```)
     */
    fontSize?: number;

    /**
     * Icon to be diplayed in the front of the text input
     */
    frontIcon?: IconNameType;
    /**
     * Icon to be diplayed in the back of the text input
     */
    rearIcon?: IconNameType;

    /**
     * Theme color of the text input (by default ```ocean-blue```)
     */
    theme?: ThemeColorType;

    /**
     * Display underline (by default ```true```)
     */
    displayUnderline?: boolean;
}

/**
 * VSPTextInput
 * 
 * @property
 * - ```placeholder```(required): Placeholder of the textinput
 * - ```textContentType```: Type of the text to be filled in (by default ```none```)
 * - ```fontSize```: Size of the font (by default ```THEME_FONTSIZE```)
 * - ```frontIcon```: Icon to be diplayed in the front of the text input
 * - ```rearIcon```: Icon to be diplayed in the back of the text input
 * - ```theme```: Theme color of the text input (by default ```ocean-blue```)
 * - ```displayUnderline```: Display underline (by default ```true```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPTextInput extends React.Component<VSPTextInputProps> {
    private _fixed_tyle: StyleProp<any>

    public static defaultProps = {
        textContentType: 'none',
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
        displayUnderline: true,
    };

    state = {
        textValue: ''
    }

    constructor(props: VSPTextInputProps) {
        super(props);

        this._fixed_tyle = StyleSheet.create({
            container: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: props.displayUnderline ? 2 : 0,
                borderBottomColor: THEME_COLORS[props.theme!],
                paddingVertical: 0.3*props.fontSize!,
                ...decodeVSPMarginProps(props),
            },
    
            textinput: {
                flex: 1,
                fontFamily: THEME_FONT, 
                fontSize: props.fontSize!,
                color: THEME_COLORS[props.theme!],
                padding: 0,
            },
        });
    }

    render() {
        return (
            <View style={this._fixed_tyle.container}>
                {
                    !!this.props.frontIcon &&
                    <VSPIcon
                        iconName={this.props.frontIcon}
                        color={THEME_COLORS[this.props.theme!]}
                        size={this.props.fontSize!}
                        marginRight={0.7*this.props.fontSize!}
                    />
                }
                <TextInput
                    style={this._fixed_tyle.textinput}
                    placeholder={this.props.placeholder}
                    value={this.state.textValue}
                    textContentType={this.props.textContentType!}
                    placeholderTextColor={THEME_COLORS[this.props.theme!]}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text: string) => { this.setState({ ...this.state, textValue: text })}}
                    secureTextEntry={this.props.textContentType==='password'}
                />
                {
                    !!this.props.rearIcon &&
                    <VSPIcon
                        iconName={this.props.rearIcon}
                        color={THEME_COLORS[this.props.theme!]}
                        size={this.props.fontSize!}
                    />
                }
            </View>
        );
    }
}