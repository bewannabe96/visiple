import React from 'react';
import { FlatList, View } from 'react-native';

import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	VSP_TOP_PADDING,
	THEME_MINOR_FONTSIZE,
	THEME_FONTSIZE,
} from '../../types/lib/size';

import VSPModal from '../../components/vsp-modal';
import VSPTextInput from '../../components/vsp-textinput';
import VSPProfile from '../../components/vsp-profile';
import VSPColoredButton from '../../components/vsp-colored-button';
import VSPText from '../../components/vsp-text';

import { closeInviteModal } from '../../actions/new-ticket-screen/ui';

interface IFriendInviteModalProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	/**
	 * The modal is visible if true
	 */
	inviteModalVisible: boolean;

	// ACTION CREATORS
	closeInviteModal: typeof closeInviteModal;
}

/**
 * FriendInviteModal
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 * - ```inviteModalVisible```(required): The modal is visible if true
 */
export default class FriendInviteModal extends React.Component<
	IFriendInviteModalProps
> {
	public render() {
		return (
			<VSPModal
				titleText={'친구 초대'}
				rightButtonText={'취소'}
				rightButtonOnPress={this.props.closeInviteModal}
				isVisible={this.props.inviteModalVisible}
				heightMode='full'
				paddingTop={VSP_TOP_PADDING}
				closeAction={this.props.closeInviteModal}
			>
				<VSPTextInput
					placeholder='이름 또는 이메일을 입력하세요'
					rearIcon='search'
					marginBottom={HORIZONTAL_UNIT(2)}
					marginX={VSP_EDGE_PADDING}
				/>
				<FlatList
					data={[
						{ key: 'a' },
						{ key: 'b' },
						{ key: 'c' },
						{ key: 'd' },
						{ key: 'e' },
						{ key: 'f' },
						{ key: 'g' },
						{ key: 'h' },
						{ key: 'i' },
						{ key: 'j' },
					]}
					renderItem={item => (
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								paddingVertical: HORIZONTAL_UNIT(3),
								paddingHorizontal: VSP_EDGE_PADDING,
							}}
						>
							<VSPProfile size={HORIZONTAL_UNIT(10)} />
							<View
								style={{
									flex: 1,
									paddingHorizontal: HORIZONTAL_UNIT(2),
								}}
							>
								<VSPText
									fontSize={THEME_FONTSIZE}
									marginBottom={HORIZONTAL_UNIT()}
								>
									{'가씨성'}
								</VSPText>
								<VSPText
									fontSize={THEME_MINOR_FONTSIZE}
									theme='grey'
								>
									{'familynamega@gmail.com'}
								</VSPText>
							</View>
							<VSPColoredButton
								text='초대'
								icon='plus'
								fontSize={THEME_MINOR_FONTSIZE}
								color={this.props.themeColor}
							/>
						</View>
					)}
				/>
			</VSPModal>
		);
	}
}
