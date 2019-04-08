import React from 'react';
import { Icon } from 'react-native-elements';
import { NavigationScreenProp, Header } from 'react-navigation';

import { RawColor, THEME_COLORS } from '../types/lib/theme';

const VSP_HEADER_BUTTON_SIZE = Header.HEIGHT * 0.35;

interface IVSPHeaderButtonProps {
	/**
	 * Icon to be displayed
	 */
	iconName: string;

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
 * - ```iconName```(required): Icon to be displayed
 * - ```color```: Raw color of the button (by default ```THEME_COLORS.black```)
 * - ```onPress```: Callback function when button pressed
 */
export default class VSPHeaderButton extends React.Component<
	IVSPHeaderButtonProps
> {
	public static defaultProps = {
		color: THEME_COLORS.black,
	};

	public render() {
		return (
			<Icon
				name={this.props.iconName}
				type='vspicon'
				color={this.props.color!}
				size={VSP_HEADER_BUTTON_SIZE}
				onPress={this.props.onPress}
			/>
		);
	}
}

/**
 * VSPHeaderBack
 *
 * Returns to the previous page
 */
export const VSPHeaderBack = (navigation: NavigationScreenProp<any>) => (
	<VSPHeaderButton
		iconName='left-arrow'
		onPress={() => {
			navigation.pop();
		}}
	/>
);
