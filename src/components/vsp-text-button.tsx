import React from 'react';
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import { ThemeColor, THEME_COLORS, RawColor } from '../types/lib/theme';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';
import VSPText from './vsp-text';
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

interface IVSPTextButtonProps extends IVSPMarginProps {
	/**
	 * Text inside the button
	 */
	text?: string;

	/**
	 * Icon to be displayed in the button
	 */
	icon?: IconName;

	/**
	 * Size of the text and the icon inside the button
	 */
	fontSize?: number;

	/**
	 * Theme color of the button
	 */
	theme?: ThemeColor;

	/**
	 * Raw color of the button
	 */
	color?: RawColor;

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
 * - ```theme```: Theme color of the button (by default ```oceanBlue```)
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
export default class VSPTextButton extends React.Component<
	IVSPTextButtonProps
> {
	public static defaultProps = {
		fontSize: THEME_FONTSIZE,
		theme: 'oceanBlue',
	};

	public render() {
		const style = StyleSheet.create({
			touchableOpacity: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				...decodeVSPMarginProps(this.props),
			},

			text: {
				fontSize: this.props.fontSize!,
				marginLeft: this.props.icon ? 0.7 * this.props.fontSize! : 0,
				textDecorationLine: 'underline',
				color: this.props.color
					? this.props.color
					: THEME_COLORS[this.props.theme!],
			},
		});

		return (
			<TouchableOpacity
				style={style.touchableOpacity}
				activeOpacity={0.6}
				onPress={this.props.onPress}
			>
				{!!this.props.icon && (
					<VSPIcon
						iconName={this.props.icon}
						color={
							this.props.color
								? this.props.color
								: THEME_COLORS[this.props.theme!]
						}
						size={this.props.fontSize}
					/>
				)}
				{!!this.props.text && (
					<VSPText style={style.text}>{this.props.text}</VSPText>
				)}
			</TouchableOpacity>
		);
	}
}
