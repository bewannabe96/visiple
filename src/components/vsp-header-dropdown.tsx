import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { IVSPMarginProps } from '../types/props/vsp-margin';
import { ThemeColor, RawColor, THEME_COLORS } from '../types/lib/theme';
import { IconName } from '../types/lib/icon';
import {
	HORIZONTAL_UNIT,
	DEVICE_WIDTH,
	VSP_TOP_PADDING,
} from '../types/lib/size';

import VSPHeaderButton from './vsp-header-button';
import VSPIcon from './vsp-icon';
import VSPText from './vsp-text';

interface IVSPVSPDropdownProps extends IVSPMarginProps {
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
	 * Drop down contents
	 */
	contents: { icon?: IconName; title: string; onPress?: () => any }[];
}

/**
 * VSPDropdown
 *
 * @property
 * - ```icon```(required): Icon to be displayed
 * - ```theme```: Theme color of the button (by default ```brown```)
 * - ```color```: Raw color of the button
 */
export default class VSPHeaderDropdown extends React.Component<
	IVSPVSPDropdownProps
> {
	public static defaultProps = {
		theme: 'brown',
	};

	public state = {
		visible: false,
	};

	private _openDropdown = () => {
		this.setState({ ...this.state, visible: true });
	};

	private _closeDropdown = () => {
		this.setState({ ...this.state, visible: false });
	};

	public render() {
		const style = StyleSheet.create({
			dropdownContainer: {
				position: 'absolute',
				right: VSP_TOP_PADDING,
				top: 50,
				borderRadius: HORIZONTAL_UNIT(),
				backgroundColor: THEME_COLORS.white,
				width: DEVICE_WIDTH * 0.45,
				alignItems: 'stretch',
				paddingVertical: HORIZONTAL_UNIT(),
				margin: 0,
			},

			contentItem: {
				flexDirection: 'row',
				paddingHorizontal: HORIZONTAL_UNIT(3),
				paddingVertical: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<View>
				<VSPHeaderButton
					icon={this.props.icon}
					theme={this.props.theme}
					color={this.props.color}
					onPress={this._openDropdown}
				/>
				<Modal
					isVisible={this.state.visible}
					style={style.dropdownContainer}
					onBackdropPress={this._closeDropdown}
					backdropColor={THEME_COLORS.none}
					animationIn='zoomIn'
					animationOut='zoomOut'
					useNativeDriver={true}
				>
					{this.props.contents.map((content, index) => (
						<TouchableOpacity
							key={index}
							style={style.contentItem}
							onPress={() => {
								!!content.onPress && content.onPress();
								this._closeDropdown();
							}}
						>
							{!!content.icon && (
								<VSPIcon
									iconName={content.icon}
									marginRight={HORIZONTAL_UNIT()}
								/>
							)}
							<VSPText>{content.title}</VSPText>
						</TouchableOpacity>
					))}
				</Modal>
			</View>
		);
	}
}
