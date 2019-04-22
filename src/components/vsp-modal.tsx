import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import { HORIZONTAL_UNIT } from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';
import {
	IVSPPaddingProps,
	decodeVSPPaddingProps,
} from '../types/props/vsp-padding';

import VSPHeader from './vsp-header';

interface IVSPModalProps {
	/**
	 * Title text in the middle of the header
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
	 * Height of the modal
	 *
	 * - ```auto```: Fit the content
	 * - ```full```: Full size modal
	 * - ```minimum```: Minimum size modal
	 */
	heightMode?: 'auto' | 'full' | 'minimum';

	/**
	 * Component to be displayed in the right of the header
	 */
	headerRight?: Element;
}

/**
 * VSPModal
 *
 * @property
 * - ```titleText```(required): Title text in the middle of the header
 * - ```isVisible```(required): Visible if true
 * - ```closeAction```(required): Close action callback
 * - ```heightMode```: Height of the modal (by default ```auto```)
 * - ```headerRight```: Component to be displayed in the right
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingHorizontal```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingVertical```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 * =
 */
export default class VSPModal extends React.Component<
	IVSPPaddingProps<IVSPModalProps>
> {
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
					headerRight={this.props.headerRight}
				/>
				<View style={style.bodyView}>{this.props.children}</View>
			</Modal>
		);
	}
}
