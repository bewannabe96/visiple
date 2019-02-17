import React from 'react';
import { View } from 'react-native';

import { RawColorType, ThemeColorType, THEME_COLORS } from '../types/lib/theme';

interface IVSPBottomBarProps {
	/**
	 * Theme color of the bar
	 */
	theme?: ThemeColorType;

	/**
	 * Raw color of the bar
	 */
	color?: RawColorType;
}

/**
 * VSPBottomBar
 *
 * @property
 * - ```theme```: Theme color of the icon (by default ```brown```)
 * - ```color```: Raw color of the icon
 */
export default class VSPBottomBar extends React.Component<IVSPBottomBarProps> {
	public render() {
		return (
			<View
				style={{
					height: 3,
					backgroundColor: this.props.color
						? this.props.color
						: THEME_COLORS[
								this.props.theme ? this.props.theme : 'brown'
						  ],
				}}
			/>
		);
	}
}
