import React from 'react';
import { StyleSheet, View, GestureResponderEvent } from 'react-native';
import Modal from 'react-native-modal';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../types/lib/size';
import { THEME_COLORS, addShadowProperties } from '../types/lib/theme';
import {
	IVSPPaddingProps,
	decodeVSPPaddingProps,
} from '../types/props/vsp-padding';
import { IconName } from '../types/lib/icon';

import VSPText from './vsp-text';
import VSPTextButton from './vsp-text-button';

interface IVSPModalProps extends IVSPPaddingProps {
	/**
	 * Visible if true
	 */
	isVisible: boolean;

	/**
	 * Close action
	 */
	closeAction: () => {};

	/**
	 * Title text in the middle of the header
	 */
	titleText: string;

	/**
	 * Button in the right side of the header
	 */
	rightButton?: IconName;

	/**
	 * Callback function when right button pressed
	 */
	rightButtonOnPress?: (event: GestureResponderEvent) => void;
}

/**
 * VSPModal
 *
 * @property
 * - ```isVisible```(required): Visible if true
 * - ```closeAction```(required): Close action
 * - ```titleText```(required): Title text in the middle of the header
 * - ```rightButton```: Button in the right side of the header
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
	public render() {
		const style = StyleSheet.create({
			container: {
				width: '95%',
				alignSelf: 'center',
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
			},

			headerRightView: {
				flex: 2,
				alignItems: 'flex-end',
			},

			bodyView: {
				borderBottomLeftRadius: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
				...decodeVSPPaddingProps(this.props),
			},

			resultView: {
				flex: 1,
			},
		});

		return (
			<Modal isVisible={this.props.isVisible} avoidKeyboard={true}>
				<View style={style.container}>
					<View style={style.headerView}>
						<View style={style.headerLeftView}>
							<VSPTextButton
								icon='previous'
								theme='brown'
								marginLeft={HORIZONTAL_UNIT(4)}
								onPress={this.props.closeAction}
							/>
						</View>
						<View style={style.headerTitleView}>
							<VSPText
								fontSize={THEME_HEADER_FONTSIZE}
								theme='brown'
							>
								{this.props.titleText}
							</VSPText>
						</View>
						<View style={style.headerRightView}>
							{!!this.props.rightButton && (
								<VSPTextButton
									icon={this.props.rightButton}
									marginRight={HORIZONTAL_UNIT(4)}
									onPress={this.props.rightButtonOnPress}
								/>
							)}
						</View>
					</View>
					<View style={style.bodyView}>{this.props.children}</View>
				</View>
			</Modal>
		);
	}
}
