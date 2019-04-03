import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { IconProps, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

import { RawColor, THEME_COLORS } from '../types/lib/theme';
import { HORIZONTAL_UNIT, DEVICE_WIDTH } from '../types/lib/size';

import VSPHeaderButton from './vsp-header-button';
import VSPText from './vsp-text';

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
	 * Drop down contents
	 */
	contents: { icon?: IconProps; title: string; onPress?: () => any }[];
}

/**
 * VSPDropdown
 *
 * @property
 * - ```iconName```(required): Icon to be displayed
 * - ```contents```(required): Drop down contents
 * - ```color```: Raw color of the button (by default ```THEME_COLORS.brown```)
 */
export default class VSPHeaderDropdown extends React.Component<
	IVSPVSPDropdownProps
> {
	public static defaultProps = {
		color: THEME_COLORS.brown,
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
			modal: {
				position: 'absolute',
				right: 0,
				margin: 0,
			},

			dropdownContainer: {
				paddingVertical: HORIZONTAL_UNIT(),
				alignItems: 'stretch',
				width: DEVICE_WIDTH * 0.45,
				backgroundColor: THEME_COLORS.white,
				borderRadius: HORIZONTAL_UNIT(),
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
					iconName={this.props.iconName}
					color={this.props.color}
					onPress={this._openDropdown}
				/>
				<Modal
					isVisible={this.state.visible}
					style={style.modal}
					onBackdropPress={this._closeDropdown}
					backdropColor={THEME_COLORS.none}
					animationIn='fadeIn'
					animationOut='fadeOut'
					useNativeDriver={true}
				>
					<SafeAreaView>
						<View style={style.dropdownContainer}>
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
										<Icon
											{...content.icon}
											containerStyle={{
												marginRight: HORIZONTAL_UNIT(),
											}}
										/>
									)}
									<VSPText>{content.title}</VSPText>
								</TouchableOpacity>
							))}
						</View>
					</SafeAreaView>
				</Modal>
			</View>
		);
	}
}
