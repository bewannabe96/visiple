import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
	THEME_COLORS,
	addShadowProperties,
	ThemeColor,
} from '../types/lib/theme';
import {
	decodeVSPMarginProps,
	IVSPMarginProps,
} from '../types/props/vsp-margin';
import { THEME_FONTSIZE } from '../types/lib/size';

import VSPText from './vsp-text';

interface IVSPBadgeProps extends IVSPMarginProps {
	/**
	 * Value of the badge
	 */
	value: number;

	/**
	 * Size of the badge
	 */
	size?: number;

	/**
	 * Theme color of the badge
	 */
	theme?: ThemeColor;
}

/**
 * VSPBadge
 *
 * @property
 * - ```value```(required): Value of the badge
 * - ```size```: Size of the badge (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the badge (by default ```oceanBlue```)
 */
export default class VSPBadge extends React.Component<IVSPBadgeProps> {
	public static defaultProps = {
		size: THEME_FONTSIZE,
		theme: 'oceanBlue',
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				borderRadius: this.props.size!,
				backgroundColor: THEME_COLORS[this.props.theme!],
				...decodeVSPMarginProps(this.props),
				...addShadowProperties(1),
			},
		});

		return (
			<View style={style.container}>
				<VSPText
					fontSize={0.8 * this.props.size!}
					marginY={0.3 * this.props.size!}
					marginX={0.6 * this.props.size!}
					theme='white'
				>
					{this.props.value}
				</VSPText>
			</View>
		);
	}
}
