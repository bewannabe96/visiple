/** @format */

import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import {
	TicketHeaderColorType,
	TICKET_COLORS,
} from '../../types/config/ticket_theme';
import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../types/config/size';
import { THEME_COLORS } from '../../types/config/theme';

import VSPModal from '../../components/vsp-modal';
import VSPTextInput from '../../components/vsp-textinput';
import VSPProfile from '../../components/vsp-profile';
import VSPColoredButton from '../../components/vsp-colored-button';
import VSPText from '../../components/vsp-text';

interface FriendInviteModalProps {
	// STATES
	ticketColor: TicketHeaderColorType;
	inviteModalVisible: boolean;

	// ACTION CREATORS
	closeInviteModal: any;
}

/**
 * FriendInviteModal
 */
export default class FriendInviteModal extends React.Component<
	FriendInviteModalProps
> {
	render() {
		let style = StyleSheet.create({
			friendsList: {
				height: '70%',
			},
		});

		return (
			<VSPModal
				titleText={'친구 초대'}
				isVisible={this.props.inviteModalVisible}
				closeAction={this.props.closeInviteModal}
				padding={4 * VERTICAL_UNIT}
			>
				<VSPTextInput
					placeholder='이름 또는 이메일을 입력하세요'
					rearIcon='search'
					marginBottom={3 * VERTICAL_UNIT}
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
								borderColor: THEME_COLORS['ocean-blue'],
								borderRadius: VERTICAL_UNIT,
								padding: 2 * VERTICAL_UNIT,
								marginVertical: VERTICAL_UNIT,
							}}
						>
							<VSPProfile size={10 * HORIZONTAL_UNIT} />
							<View
								style={{
									flex: 1,
									paddingHorizontal: 2 * HORIZONTAL_UNIT,
								}}
							>
								<VSPText
									fontSize={2.2 * HORIZONTAL_UNIT}
									marginBottom={HORIZONTAL_UNIT}
								>
									{'가씨성'}
								</VSPText>
								<VSPText fontSize={2.3 * HORIZONTAL_UNIT}>
									{'familynamega@gmail.com'}
								</VSPText>
							</View>
							<VSPColoredButton
								text='초대'
								icon='plus'
								fontSize={2 * HORIZONTAL_UNIT}
								color={
									TICKET_COLORS.HEADER[this.props.ticketColor]
								}
							/>
						</View>
					)}
				/>
			</VSPModal>
		);
	}
}
