import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import {
	THEME_COLORS,
	ThemeColor,
	THEME_FONT,
	RawColor,
} from '../types/lib/theme';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

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

interface IVSPTextInputProps extends IVSPMarginProps {
	/**
	 * Placeholder of the textinput
	 */
	placeholder: string;

	/**
	 * Type of the text to be filled in
	 */
	textContentType?: textContentType;

	/**
	 * Size of the font
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
	 * Theme color of the text input
	 */
	theme?: ThemeColor;

	/**
	 * Raw color of the button
	 */
	color?: RawColor;
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
 * - ```theme```: Theme color of the text input (by default ```grey```)
 * - ```color```: Raw color of the button
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
		theme: 'grey',
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
				padding: 0.7 * this.props.fontSize!,
				borderRadius: 0.3 * this.props.fontSize!,
				backgroundColor: THEME_COLORS.greyWhite,
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
