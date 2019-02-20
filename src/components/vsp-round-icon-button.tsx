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
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

import VSPIcon from './vsp-icon';

interface IVSPRoundIconButtonProps extends IVSPMarginProps {
	/**
	 * Icon to be displayed in the button
	 */
	icon: IconName;

	/**
	 * Outline button style if true
	 */
	outline?: boolean;

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
 * VSPRoundIconButton
 *
 * @property
 * - ```icon```(required): Icon to be displayed in the button
 * - ```outline```: Outline button style if true (by default ```false```)
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
export default class VSPRoundIconButton extends React.Component<
	IVSPRoundIconButtonProps
> {
	public static defaultProps = {
		outline: false,
		fontSize: THEME_FONTSIZE,
		theme: 'oceanBlue',
	};

	public render() {
		const color = this.props.color
			? this.props.color
			: THEME_COLORS[this.props.theme!];
		const style = StyleSheet.create({
			touchableOpacity: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				height: 2 * this.props.fontSize!,
				width: 2 * this.props.fontSize!,
				borderRadius: this.props.fontSize!,
				backgroundColor: this.props.outline!
					? THEME_COLORS.none
					: color,
				borderColor: this.props.outline! ? color : THEME_COLORS.none,
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
					color={this.props.outline! ? color : THEME_COLORS.white}
					size={this.props.fontSize}
				/>
			</TouchableOpacity>
		);
	}
}
