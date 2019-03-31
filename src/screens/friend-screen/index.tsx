import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-navigation';

import { addShadowProperties } from '../../types/lib/theme';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { User } from '../../types/data/user';

import VSPContainer from '../../components/vsp-container';
import VSPHeader from '../../components/vsp-header';
import VSPText from '../../components/vsp-text';
import VSPProfile from '../../components/vsp-profile';
import VSPRoundIconButton from '../../components/vsp-round-icon-button';
import VSPIcon from '../../components/vsp-icon';
import VSPDivider from '../../components/vsp-divider';

import AddFriendModal from './add-friend-modal';

const DEV_FRIENDS: User[] = [
	{ userID: '0001', userName: '홍길동', userEmail: 'testtest23@nate.com' },
	{ userID: '0002', userName: '홍길동', userEmail: 'testtest2323@nate.com' },
	{ userID: '0003', userName: '홍길동', userEmail: 'testtest263@nate.com' },
	{ userID: '0004', userName: '홍길동', userEmail: 'testtest2353@nate.com' },
	{ userID: '0005', userName: '홍길동', userEmail: 'testtest213@nate.com' },
	{ userID: '0006', userName: '홍길동', userEmail: 'testtest223@nate.com' },
	{ userID: '0007', userName: '홍길동', userEmail: 'testtest233@nate.com' },
	{ userID: '0008', userName: '홍길동', userEmail: 'testtest243@nate.com' },
];

export default class FriendScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = {
		header: <VSPHeader headerTitle='친구' />,
	};

	private _renderFriendsList() {
		const style = StyleSheet.create({
			itemView: {
				flexDirection: 'row',
				alignItems: 'center',
				paddingVertical: HORIZONTAL_UNIT(3),
				paddingHorizontal: VSP_EDGE_PADDING,
			},
		});

		return (
			<View>
				{DEV_FRIENDS.map((friend: User) => (
					<TouchableOpacity key={friend.userID} activeOpacity={0.6}>
						<View style={style.itemView}>
							<VSPProfile
								size={HORIZONTAL_UNIT(10)}
								marginRight={HORIZONTAL_UNIT(3)}
							/>
							<View style={{ flex: 1 }}>
								<VSPText marginBottom={HORIZONTAL_UNIT()}>
									{friend.userName}
								</VSPText>
								<VSPText
									fontSize={THEME_MINOR_FONTSIZE}
									theme='grey'
								>
									{friend.userEmail}
								</VSPText>
							</View>
							<VSPIcon iconName='next' theme='grey' />
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			addFriendButtonView: {
				position: 'absolute',
				bottom: HORIZONTAL_UNIT(5),
				right: HORIZONTAL_UNIT(6),
				...addShadowProperties(),
			},
		});

		return (
			<VSPContainer>
				<SearchBar
					placeholder='검색'
					containerStyle={{
						marginHorizontal: VSP_EDGE_PADDING,
						marginBottom: HORIZONTAL_UNIT(3),
					}}
				/>
				<ScrollView>
					<VSPDivider
						text='친구 10'
						orientation='far-left'
						marginHorizontal={VSP_EDGE_PADDING}
					/>
					{this._renderFriendsList()}
				</ScrollView>

				<View style={style.addFriendButtonView}>
					<VSPRoundIconButton
						icon='plus'
						size={HORIZONTAL_UNIT(10)}
						theme='brown'
						onPress={() => {
							this.setState({ modalVisible: true });
						}}
					/>
				</View>
				<AddFriendModal />
			</VSPContainer>
		);
	}
}
