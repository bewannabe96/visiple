import React from 'react';

import { IconName } from '../assets/icons';

import VSPTextButton from './vsp-text-button';

interface IVSPHeaderButtonProps {
	/**
	 * Icon to be displayed
	 */
	icon: IconName;

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
 * - ```onPress```: Callback function when button pressed
 */
export default class VSPHeaderButton extends React.Component<
	IVSPHeaderButtonProps
> {
	public render() {
		return (
			<VSPTextButton
				icon={this.props.icon}
				theme='brown'
				fontSize={28}
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
