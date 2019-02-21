import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

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
		const style = StyleSheet.create({
			friendsList: {
				height: '70%',
			},
		});

		return (
			<VSPModal
				titleText={'친구 초대'}
				isVisible={this.props.inviteModalVisible}
				closeAction={this.props.closeInviteModal}
				padding={HORIZONTAL_UNIT(4)}
			>
				<VSPTextInput
					placeholder='이름 또는 이메일을 입력하세요'
					rearIcon='search'
					marginBottom={HORIZONTAL_UNIT(3)}
				/>
				<FlatList
					style={style.friendsList}
					data={[
						{ key: 'a' },
						{ key: 'b' },
						{ key: 'c' },
						{ key: 'd' },
						{ key: 'e' },
					]}
					renderItem={item => (
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								borderWidth: 1,
								borderColor: THEME_COLORS.oceanBlue,
								borderRadius: HORIZONTAL_UNIT(),
								padding: HORIZONTAL_UNIT(2),
								marginVertical: HORIZONTAL_UNIT(),
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
									fontSize={HORIZONTAL_UNIT(2)}
									marginBottom={HORIZONTAL_UNIT()}
								>
									{'가씨성'}
								</VSPText>
								<VSPText fontSize={HORIZONTAL_UNIT(2)}>
									{'familynamega@gmail.com'}
								</VSPText>
							</View>
							<VSPColoredButton
								text='초대'
								icon='plus'
								fontSize={HORIZONTAL_UNIT(2)}
								color={this.props.themeColor}
							/>
						</View>
					)}
				/>
			</VSPModal>
		);
	}
}
