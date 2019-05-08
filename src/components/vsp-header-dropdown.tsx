import React from 'react';
import { View } from 'react-native';

import { RawColor } from '../types/lib/theme';

import VSPHeaderButton from './vsp-header-button';
import VSPDropdownModal from './vsp-dropdown-modal';

interface IVSPVSPDropdownProps {
	/**
	 * Icon to be displayed
	 */
	iconName: string;

	/**
	 * Raw color of the button
	 */
	color?: RawColor;

	/**
	 * Title text of the header
	 */
	titleText: string;
}

/**
 * VSPDropdown
 *
 * @property
 * - ```iconName```(required): Icon to be displayed
 * - ```color```: Raw color of the button (by default ```THEME_COLORS.black```)
 * - ```titleText```(required): Title text of the header
 */
export default class VSPHeaderDropdown extends React.Component<
	IVSPVSPDropdownProps
> {
	public state = {
		isModalVisible: false,
	};

	private _openModal = () => {
		this.setState({
			...this.state,
			isModalVisible: true,
		});
	};

	private _closeModal = () => {
		this.setState({ ...this.state, isModalVisible: false });
	};

	public render() {
		return (
			<View>
				<VSPHeaderButton
					iconName={this.props.iconName}
					color={this.props.color}
					onPress={this._openModal}
				/>
				<VSPDropdownModal
					titleText={this.props.titleText}
					isVisible={this.state.isModalVisible}
					closeAction={this._closeModal}
				>
					{this.props.children}
				</VSPDropdownModal>
			</View>
		);
	}
}
