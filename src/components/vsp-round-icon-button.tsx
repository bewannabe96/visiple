import React from 'react';
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import { THEME_COLORS, RawColor } from '../types/lib/theme';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

import VSPIcon from './vsp-icon';

interface IVSPRoundIconButtonProps {
	/**
	 * Icon to be displayed in the button
	 */
	icon: IconName;

	/**
	 * Outline button style if true
	 */
	outline?: boolean;

	/**
	 * Size of the button
	 */
	size?: number;

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
 * - ```size```: Size of the button (by default ```THEME_FONTSIZE```)
 * - ```color```: Raw color of the button (by default ```THEME_COLORS.oceanBlue```)
 * - ```onPress```: Callback function when button pressed
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPRoundIconButton extends React.Component<
	IVSPMarginProps<IVSPRoundIconButtonProps>
> {
	public static defaultProps = {
		outline: false,
		size: THEME_FONTSIZE,
		color: THEME_COLORS.oceanBlue,
	};

	public render() {
		const color = this.props.color!;
		const style = StyleSheet.create({
			touchableOpacity: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				height: this.props.size!,
				width: this.props.size!,
				borderRadius: this.props.size! / 2,
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
					size={this.props.size! / 2}
				/>
			</TouchableOpacity>
		);
	}
}
