import React from 'react';
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import { THEME_COLORS, RawColor } from '../types/lib/theme';
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';
import VSPText from './vsp-text';

interface IVSPColoredButtonProps {
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
	 * Raw color of the button
	 */
	color?: RawColor;

	/**
	 * Remove border radius if true
	 */
	disableBorderRadius?: boolean;

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
 * - ```color```: Raw color of the button (by default ```THEME_COLORS.oceanBlue```)
 * - ```disableBorderRadius```: Remove border radius if true (by default ```false```)
 * - ```onPress```: Callback function when button pressed
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPColoredButton extends React.Component<
	IVSPMarginProps<IVSPColoredButtonProps>
> {
	public static defaultProps = {
		fontSize: THEME_FONTSIZE,
		color: THEME_COLORS.oceanBlue,
		disableBorderRadius: false,
	};

	public render() {
		const style = StyleSheet.create({
			touchableOpacity: {
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 0.5 * this.props.fontSize!,
				borderRadius: this.props.disableBorderRadius!
					? 0
					: 0.3 * this.props.fontSize!,
				backgroundColor: this.props.color!,
				...decodeVSPMarginProps(this.props),
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
						color={THEME_COLORS.white}
						size={this.props.fontSize}
					/>
				)}
				{!!this.props.text && (
					<VSPText
						fontSize={this.props.fontSize}
						color={THEME_COLORS.white}
						marginLeft={
							this.props.icon ? 0.3 * this.props.fontSize! : 0
						}
					>
						{this.props.text}
					</VSPText>
				)}
			</TouchableOpacity>
		);
	}
}
