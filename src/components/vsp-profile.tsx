import React from 'react';
import { View, StyleSheet, StyleProp } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../types/lib/theme';
import { HORIZONTAL_UNIT } from '../types/lib/size';
import {
	decodeVSPMarginProps,
	IVSPMarginProps,
} from '../types/props/vsp-margin';

interface IVSPProfileProps extends IVSPMarginProps {
	/**
	 * Size of the icon (by default ```12VU```)
	 */
	size?: number;

	/**
	 * Casts shadow if true (by default ```true```)
	 */
	castShadow?: boolean;

	/**
	 * Style of the text (by default ```THEME_FONT```, ```ocean-blue```)
	 */
	style?: StyleProp<any>;
}

/**
 * VSPProfile
 *
 * @property
 * - ```size```: Size of the icon (by default ```12HU```)
 * - ```castShadow```: Casts shadow if true (by default ```true```)
 * - ```style```: Style of the text
 */
export default class VSPProfile extends React.Component<IVSPProfileProps> {
	public static defaultProps = {
		size: HORIZONTAL_UNIT(12),
		castShadow: true,
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				backgroundColor: THEME_COLORS.white,
				height: this.props.size!,
				width: this.props.size!,
				borderRadius: 0.5 * this.props.size!,
				...(this.props.castShadow! ? addShadowProperties() : null),
				...decodeVSPMarginProps(this.props),
				...this.props.style,
			},
		});

		return <View style={style.container} />;
	}
}
