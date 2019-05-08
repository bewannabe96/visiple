import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Modal from 'react-native-modal';

import { THEME_COLORS } from '../types/lib/theme';

import VSPHeader from './vsp-header';
import VSPHeaderButton from './vsp-header-button';

interface IVSPDropdownModalProps {
	/**
	 * Title text of the header
	 */
	titleText: string;

	/**
	 * Visible if true
	 */
	isVisible: boolean;

	/**
	 * Close action callback
	 */
	closeAction: () => any;

	/**
	 * Component to be displayed in the right of the header
	 */
	headerRight?: Element;
}

/**
 * VSPDropdownModal
 *
 * @property
 * - ```titleText```(required): Title text of the header
 * - ```isVisible```(required): Visible if true
 * - ```closeAction```(required): Close action callback
 * - ```headerRight```: Component to be displayed in the right
 * =
 */
export default class VSPDropdownModal extends React.Component<
	IVSPDropdownModalProps
> {
	public render() {
		const style = StyleSheet.create({
			container: {
				justifyContent: 'flex-start',
				width: '100%',
				margin: 0,
				alignItems: 'stretch',
			},

			bodyView: {
				backgroundColor: THEME_COLORS.white,
			},
		});

		return (
			<Modal
				isVisible={this.props.isVisible}
				avoidKeyboard={true}
				style={style.container}
				hideModalContentWhileAnimating={true}
				useNativeDriver={true}
				animationIn='slideInDown'
				animationOut='slideOutUp'
				backdropOpacity={0.3}
				onBackButtonPress={this.props.closeAction}
				onBackdropPress={this.props.closeAction}
			>
				<VSPHeader
					headerLeft={
						<VSPHeaderButton
							iconName='left-arrow'
							onPress={this.props.closeAction}
						/>
					}
					headerTitle={
						<Text h2 style={{ fontWeight: 'bold' }}>
							{this.props.titleText}
						</Text>
					}
					headerRight={this.props.headerRight}
				/>
				<View style={style.bodyView}>{this.props.children}</View>
			</Modal>
		);
	}
}
