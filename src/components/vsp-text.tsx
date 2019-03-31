import React from 'react';
import { Text, StyleProp, View } from 'react-native';

import { THEME_FONT, THEME_COLORS, RawColor } from '../types/lib/theme';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { THEME_FONTSIZE } from '../types/lib/size';
import { IconName } from '../types/lib/icon';

import VSPIcon from './vsp-icon';

interface IVSPTextProps {
	/**
	 * Size of the font
	 */
	fontSize?: number;

	/**
	 * Weight of the font
	 */
	fontWeight?: 'normal' | 'bold';

	/**
	 * Icon to be diplayed in the front of the text
	 */
	frontIcon?: IconName;
	/**
	 * Icon to be diplayed in the back of the text
	 */
	rearIcon?: IconName;

	/**
	 * Raw color of the text
	 */
	color?: RawColor;

	/**
	 * Style of the text
	 */
	style?: StyleProp<any>;
}

/**
 * VSPText
 *
 * @property
 * - ```fontSize```: Size of the font (by default ```THEME_FONTSIZE```)
 * - ```fontWeight```: Weight of the font (by default ```normal```)
 * - ```frontIcon```: Icon to be diplayed in the front of the text
 * - ```rearIcon```: Icon to be diplayed in the back of the text
 * - ```color```: Raw color of the text (by default ```THEME_COLORS.black```)
 * - ```style```: Style of the text
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPText extends React.Component<
	IVSPMarginProps<IVSPTextProps>
> {
	public static defaultProps = {
		fontSize: THEME_FONTSIZE,
		color: THEME_COLORS.black,
		fontWeight: 'normal',
	};

	public render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					...decodeVSPMarginProps(this.props),
				}}
			>
				{!!this.props.frontIcon && (
					<VSPIcon
						iconName={this.props.frontIcon}
						color={this.props.color!}
						size={this.props.fontSize!}
						marginRight={0.3 * this.props.fontSize!}
					/>
				)}
				<Text
					style={{
						fontSize: this.props.fontSize!,
						fontFamily: THEME_FONT,
						fontWeight: this.props.fontWeight!,
						color: this.props.color!,
						...this.props.style,
					}}
				>
					{this.props.children}
				</Text>
				{!!this.props.rearIcon && (
					<VSPIcon
						iconName={this.props.rearIcon}
						color={this.props.color!}
						size={this.props.fontSize!}
						marginLeft={0.3 * this.props.fontSize!}
					/>
				)}
			</View>
		);
	}
}
