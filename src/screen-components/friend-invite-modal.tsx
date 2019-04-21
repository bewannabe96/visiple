import React from 'react';
import { FlatList } from 'react-native';
import { SearchBar, Button, ListItem } from 'react-native-elements';

import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_MINOR_FONTSIZE,
} from '../types/lib/size';
import { THEME_COLORS } from '../types/lib/theme';
import { User } from '../types/data/user';
import { Action } from '../types/lib/redux';

import VSPModal from '../components/vsp-modal';

const DEV_FRIENDS: User[] = [
	{ id: 1, name: '홍길동', email: 'testtest23@nate.com' },
	{ id: 2, name: '홍길동', email: 'testtest2323@nate.com' },
	{ id: 3, name: '홍길동', email: 'testtest263@nate.com' },
	{ id: 4, name: '홍길동', email: 'testtest2353@nate.com' },
	{ id: 5, name: '홍길동', email: 'testtest213@nate.com' },
	{ id: 6, name: '홍길동', email: 'testtest223@nate.com' },
	{ id: 7, name: '홍길동', email: 'testtest233@nate.com' },
	{ id: 8, name: '홍길동', email: 'testtest243@nate.com' },
];

interface IFriendInviteModalProps {
	/**
	 * Color
	 */
	color: string;

	/**
	 * The modal is visible if true
	 */
	isVisible: boolean;

	// ACTION CREATORS
	closeInviteModal: Action;
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
				headerRight={
					<Button
						title='닫기'
						type='clear'
						titleStyle={{ color: THEME_COLORS.black }}
						onPress={this.props.closeInviteModal}
					/>
				}
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
					data={DEV_FRIENDS}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<ListItem
							leftAvatar={{
								size: HORIZONTAL_UNIT(10),
							}}
							containerStyle={{
								paddingHorizontal: VSP_EDGE_PADDING,
								paddingVertical: HORIZONTAL_UNIT(3),
							}}
							title={item.name}
							subtitle={item.email}
							rightElement={
								<Button
									title='초대'
									icon={{
										name: 'plus',
										type: 'vspicon',
										size: THEME_MINOR_FONTSIZE,
										color: THEME_COLORS.white,
										containerStyle: {
											paddingRight: HORIZONTAL_UNIT(),
										},
									}}
									buttonStyle={{
										backgroundColor: this.props.color,
										padding: HORIZONTAL_UNIT(),
									}}
									titleStyle={{
										fontSize: THEME_MINOR_FONTSIZE,
									}}
								/>
							}
						/>
					)}
				/>
			</VSPModal>
		);
	}
}
