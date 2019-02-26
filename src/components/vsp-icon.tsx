import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { ThemeColor, RawColor, THEME_COLORS } from '../types/lib/theme';
import ICON_SOURCE, { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

interface IVSPIconProps extends IVSPMarginProps {
	/**
	 * Name of the icon
	 */
	iconName: IconName;

	/**
	 * Size of the icon
	 */
	size?: number;

	/**
	 * Theme color of the icon
	 */
	theme?: ThemeColor;

	/**
	 * Raw color of the icon
	 */
	color?: RawColor;
}

/**
 * VSPIcon
 *
 * @property
 * - ```iconName```(required): Name of the icon
 * - ```size```: Size of the icon (by default THEME_FONTSIZE)
 * - ```theme```: Theme color of the icon (by default ```grey```)
 * - ```color ```: Raw color of the icon
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPIcon extends React.Component<IVSPIconProps> {
	public static defaultProps = {
		size: THEME_FONTSIZE,
		theme: 'grey',
	};

	public render() {
		const style = StyleSheet.create({
			image: {
				height: this.props.size!,
				width: this.props.size!,
				resizeMode: 'contain',
				tintColor: this.props.color
					? this.props.color
					: THEME_COLORS[this.props.theme!],
				...decodeVSPMarginProps(this.props),
			},
		});

		return (
			<Image
				style={style.image}
				source={ICON_SOURCE[this.props.iconName]}
			/>
		);
	}
}
