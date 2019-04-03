import React from 'react';
import { FlatList, View } from 'react-native';
import { SearchBar, Avatar } from 'react-native-elements';

import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_MINOR_FONTSIZE,
	THEME_FONTSIZE,
} from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';

import VSPModal from '../components/vsp-modal';
import VSPColoredButton from '../components/vsp-colored-button';
import VSPText from '../components/vsp-text';

import { closeInviteModal } from '../actions/screens/new-ticket-screen';

interface IFriendInviteModalProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	/**
	 * The modal is visible if true
	 */
	isVisible: boolean;

	// ACTION CREATORS
	closeInviteModal: typeof closeInviteModal;
}

/**
 * FriendInviteModal
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 * - ```isVisible```(required): The modal is visible if true
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
				isVisible={this.props.isVisible}
				heightMode='full'
				closeAction={this.props.closeInviteModal}
			>
				<SearchBar
					placeholder='이름 또는 이메일을 입력하세요'
					containerStyle={{
						marginHorizontal: VSP_EDGE_PADDING,
						marginBottom: HORIZONTAL_UNIT(2),
					}}
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
							<Avatar size={HORIZONTAL_UNIT(10)} />
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
									color={THEME_COLORS.grey}
								>
									{'familynamega@gmail.com'}
								</VSPText>
							</View>
							<VSPColoredButton
								text='초대'
								icon={{ name: 'plus', type: 'vspicon' }}
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
