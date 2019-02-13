/** @format */

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import {
	THEME_COLORS,
	THEME_FONTSIZE,
	ThemeColorType,
	THEME_FONT,
	RawColorType,
} from '../types/config/theme';
import {
	VSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

import { IconName } from '../assets/icons';

import VSPIcon from './vsp-icon';

/**
 * Text content type
 */
type textContentType =
	| 'none'
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

interface IVSPTextInputProps extends VSPMarginProps {
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
	frontIcon?: IconName;
	/**
	 * Icon to be diplayed in the back of the text input
	 */
	rearIcon?: IconName;

	/**
	 * Theme color of the text input (by default ```ocean-blue```)
	 */
	theme?: ThemeColorType;

	/**
	 * Raw color of the button
	 */
	color?: RawColorType;

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
 * - ```color```: Raw color of the button
 * - ```displayUnderline```: Display underline (by default ```true```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPTextInput extends React.Component<IVSPTextInputProps> {
	public static defaultProps = {
		textContentType: 'none',
		fontSize: THEME_FONTSIZE,
		theme: 'ocean-blue',
		displayUnderline: true,
	};

	public state = {
		textValue: '',
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				borderBottomWidth: this.props.displayUnderline ? 2 : 0,
				borderBottomColor: this.props.color
					? this.props.color
					: THEME_COLORS[this.props.theme!],
				paddingVertical: 0.3 * this.props.fontSize!,
				...decodeVSPMarginProps(this.props),
			},

			textinput: {
				flex: 1,
				fontFamily: THEME_FONT,
				fontSize: this.props.fontSize!,
				color: this.props.color
					? this.props.color
					: THEME_COLORS[this.props.theme!],
				padding: 0,
			},
		});

		return (
			<View style={style.container}>
				{!!this.props.frontIcon && (
					<VSPIcon
						iconName={this.props.frontIcon}
						color={
							this.props.color
								? this.props.color
								: THEME_COLORS[this.props.theme!]
						}
						size={this.props.fontSize!}
						marginRight={0.7 * this.props.fontSize!}
					/>
				)}
				<TextInput
					style={style.textinput}
					placeholder={this.props.placeholder}
					value={this.state.textValue}
					textContentType={this.props.textContentType!}
					placeholderTextColor={
						this.props.color
							? this.props.color
							: THEME_COLORS[this.props.theme!]
					}
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text: string) => {
						this.setState({ ...this.state, textValue: text });
					}}
					secureTextEntry={this.props.textContentType === 'password'}
				/>
				{!!this.props.rearIcon && (
					<VSPIcon
						iconName={this.props.rearIcon}
						color={THEME_COLORS[this.props.theme!]}
						size={this.props.fontSize!}
					/>
				)}
			</View>
		);
	}
}
