import React from 'react';
import { Image, StyleSheet } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { RawColor, THEME_COLORS } from '../types/lib/theme';
import ICON_SOURCE, { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';

interface IVSPIconProps {
	/**
	 * Name of the icon
	 */
	iconName: IconName;

	/**
	 * Size of the icon
	 */
	size?: number;

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
 * - ```color ```: Raw color of the icon (by default ```THEME_COLORS.black```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPIcon extends React.Component<
	IVSPMarginProps<IVSPIconProps>
> {
	public static defaultProps = {
		size: THEME_FONTSIZE,
		color: THEME_COLORS.black,
	};

	public render() {
		const style = StyleSheet.create({
			image: {
				height: this.props.size!,
				width: this.props.size!,
				resizeMode: 'contain',
				tintColor: this.props.color!,
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
