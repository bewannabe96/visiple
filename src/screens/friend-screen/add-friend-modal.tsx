import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { addShadowProperties, THEME_COLORS } from '../../types/lib/theme';

import VSPRoundIconButton from '../../components/vsp-round-icon-button';
import VSPText from '../../components/vsp-text';
import VSPTextButton from '../../components/vsp-text-button';
import VSPTextInput from '../../components/vsp-textinput';

/**
 * AddFriendModal
 */
export default class AddFriendModal extends React.Component {
	public state = {
		modalVisible: false,
	};

	public render() {
		const style = StyleSheet.create({
			overlayView: {
				position: 'absolute',
				bottom: HORIZONTAL_UNIT(5),
				right: HORIZONTAL_UNIT(6),
				...addShadowProperties(),
			},

			container: {
				height: '50%',
				width: '90%',
				alignSelf: 'center',
			},

			headerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'center',
				height: HORIZONTAL_UNIT(12),
				borderTopLeftRadius: HORIZONTAL_UNIT(2),
				borderTopRightRadius: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.greyWhite,
				...addShadowProperties(),
			},

			headerTitleView: {
				width: '40%',
				alignItems: 'center',
			},

			headerTitleText: {
				fontSize: THEME_HEADER_FONTSIZE,
				color: THEME_COLORS.brown,
			},

			headerRightView: {
				width: '30%',
				alignItems: 'flex-end',
			},

			bodyView: {
				flex: 1,
				padding: HORIZONTAL_UNIT(4),
				borderBottomLeftRadius: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
			},

			resultView: {
				flex: 1,
			},
		});

		return (
			<View style={style.overlayView}>
				<VSPRoundIconButton
					icon='plus'
					size={HORIZONTAL_UNIT(10)}
					theme='brown'
					onPress={() => {
						this.setState({ modalVisible: true });
					}}
				/>
				<Modal isVisible={this.state.modalVisible} avoidKeyboard={true}>
					<View style={style.container}>
						<View style={style.headerView}>
							<View style={style.headerTitleView}>
								<VSPText style={style.headerTitleText}>
									친구 추가
								</VSPText>
							</View>
							<View style={style.headerRightView}>
								<VSPTextButton
									icon='cancel'
									marginRight={HORIZONTAL_UNIT(4)}
									onPress={() => {
										this.setState({ modalVisible: false });
									}}
								/>
							</View>
						</View>
						<View style={style.bodyView}>
							<VSPTextInput
								placeholder='이메일을 입력하세요'
								rearIcon='search'
								textContentType='emailAddress'
							/>
							<View style={style.resultView} />
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}
