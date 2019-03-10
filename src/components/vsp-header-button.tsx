import React from 'react';
import { NavigationScreenProp, Header } from 'react-navigation';

import { IconName } from '../types/lib/icon';

import VSPTextButton from './vsp-text-button';
import { ThemeColor, RawColor, THEME_COLORS } from '../types/lib/theme';

const VSP_HEADER_BUTTON_SIZE = Header.HEIGHT * 0.4;

interface IVSPHeaderButtonProps {
	/**
	 * Icon to be displayed
	 */
	icon: IconName;

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
	onPress?: () => void;
}

/**
 * VSPHeaderButton
 *
 * @property
 * - ```icon```(required): Icon to be displayed
 * - ```theme```: Theme color of the button (by default ```brown```)
 * - ```color```: Raw color of the button
 * - ```onPress```: Callback function when button pressed
 */
export default class VSPHeaderButton extends React.Component<
	IVSPHeaderButtonProps
> {
	public static defaultProps = {
		theme: 'brown',
	};

	public render() {
		return (
			<VSPTextButton
				icon={this.props.icon}
				color={
					this.props.color
						? this.props.color
						: THEME_COLORS[this.props.theme!]
				}
				fontSize={VSP_HEADER_BUTTON_SIZE}
				onPress={this.props.onPress}
			/>
		);
	}
}

/**
 * VSPHeaderMenu
 *
 * Opens side menu
 */
export const VSPHeaderMenu = (navigation: NavigationScreenProp<any>) => (
	<VSPHeaderButton
		icon='menu'
		onPress={() => {
			navigation.openDrawer();
		}}
	/>
);

/**
 * VSPHeaderBack
 *
 * Returns to the previous page
 */
export const VSPHeaderBack = (navigation: NavigationScreenProp<any>) => (
	<VSPHeaderButton
		icon='leftarrow'
		onPress={() => {
			navigation.pop();
		}}
	/>
);
