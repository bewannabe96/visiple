import React from 'react';
import { StyleSheet, View, GestureResponderEvent } from 'react-native';
import Modal from 'react-native-modal';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';
import {
	IVSPPaddingProps,
	decodeVSPPaddingProps,
} from '../types/props/vsp-padding';
import { IconName } from '../types/lib/icon';

import VSPText from './vsp-text';
import VSPTextButton from './vsp-text-button';
import VSPHeader from './vsp-header';

interface IVSPModalProps extends IVSPPaddingProps {
	/**
	 * Visible if true
	 */
	isVisible: boolean;

	/**
	 * Height of the modal
	 *
	 * - ```auto```: Fit the content
	 * - ```full```: Full size modal
	 * - ```minimum```: Minimum size modal
	 */
	heightMode?: 'auto' | 'full' | 'minimum';

	/**
	 * Close action
	 */
	closeAction: () => any;

	/**
	 * Title text in the middle of the header
	 */
	titleText: string;

	/**
	 * Icon of the right button
	 */
	rightButtonIcon?: IconName;

	/**
	 * Text of the right button
	 */
	rightButtonText?: string;

	/**
	 * Callback function when right button pressed
	 */
	rightButtonOnPress?: (event: GestureResponderEvent) => void;

	/**
	 * Icon of the left button
	 */
	leftButtonIcon?: IconName;

	/**
	 * Text of the left button
	 */
	leftButtonText?: string;

	/**
	 * Callback function when left button pressed
	 */
	leftButtonOnPress?: (event: GestureResponderEvent) => void;
}

/**
 * VSPModal
 *
 * @property
 * - ```isVisible```(required): Visible if true
 * - ```heightMode```: Height of the modal (by default ```auto```)
 * - ```closeAction```(required): Close action
 * - ```titleText```(required): Title text in the middle of the header
 * - ```rightButtonIcon```: Icon of the right button
 * - ```rightButtonText```: Text of the right button
 * - ```rightButtonOnPress```: Callback function when right button pressed
 * - ```leftButtonIcon```: Icon of the left button
 * - ```leftButtonText```: Text of the left button
 * - ```leftButtonOnPress```: Callback function when left button pressed
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 * =
 */
export default class VSPModal extends React.Component<IVSPModalProps> {
	public static defaultProps = {
		heightMode: 'auto',
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				justifyContent: 'flex-end',
				width: '100%',
				margin: 0,
				alignItems: 'stretch',
			},

			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
				height: HORIZONTAL_UNIT(12),
				borderTopLeftRadius: HORIZONTAL_UNIT(2),
				borderTopRightRadius: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
				borderBottomWidth: 0.5,
				borderColor: THEME_COLORS.brown,
			},

			headerTitleView: {
				flex: 3,
				alignItems: 'center',
			},

			headerLeftView: {
				flex: 2,
				alignItems: 'flex-start',
				marginLeft: HORIZONTAL_UNIT(4),
			},

			headerRightView: {
				flex: 2,
				alignItems: 'flex-end',
				marginRight: HORIZONTAL_UNIT(4),
			},

			bodyView: {
				backgroundColor: THEME_COLORS.white,
				height:
					this.props.heightMode! === 'full'
						? '85%'
						: this.props.heightMode! === 'minimum'
						? '30%'
						: undefined,
				...decodeVSPPaddingProps(this.props),
			},
		});

		return (
			<Modal
				isVisible={this.props.isVisible}
				avoidKeyboard={true}
				style={style.container}
				hideModalContentWhileAnimating={true}
				useNativeDriver={true}
				onBackButtonPress={this.props.closeAction}
				onBackdropPress={this.props.closeAction}
			>
				<VSPHeader
					headerTitle={this.props.titleText}
					headerLeft={
						!!this.props.leftButtonIcon ||
						(!!this.props.leftButtonText && (
							<VSPTextButton
								icon={this.props.leftButtonIcon}
								text={this.props.leftButtonText}
								theme='brown'
								underline={false}
								onPress={this.props.leftButtonOnPress}
							/>
						))
					}
					headerRight={
						!!this.props.rightButtonIcon ||
						(!!this.props.rightButtonText && (
							<VSPTextButton
								icon={this.props.rightButtonIcon}
								text={this.props.rightButtonText}
								theme='brown'
								underline={false}
								onPress={this.props.rightButtonOnPress}
							/>
						))
					}
				/>
				<View style={style.bodyView}>{this.props.children}</View>
			</Modal>
		);
	}
}
