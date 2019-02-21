import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_MINOR_FONTSIZE,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { User } from '../../types/data/user';

import VSPContainer from '../../components/vsp-container';
import VSPHeader from '../../components/vsp-header';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPBadge from '../../components/vsp-badge';
import VSPBottomBar from '../../components/vsp-bottombar';
import VSPProfile from '../../components/vsp-profile';
import VSPTextButton from '../../components/vsp-text-button';
import VSPHeaderTitle from '../../components/vsp-header-title';
import { VSPHeaderMenu } from '../../components/vsp-header-button';

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
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle={<VSPHeaderTitle text='친구' />}
					headerLeft={VSPHeaderMenu(navigation)}
				/>
			),
		};
	};

	private _renderFriendsList() {
		const style = StyleSheet.create({
			friendsView: {
				paddingBottom: HORIZONTAL_UNIT(2),
			},

			itemView: {
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: THEME_COLORS.white,
				borderWidth: 0.5,
				borderColor: THEME_COLORS.oceanBlue,
				borderRadius: HORIZONTAL_UNIT(),
				paddingHorizontal: HORIZONTAL_UNIT(4),
				paddingVertical: HORIZONTAL_UNIT(2),
				marginTop: HORIZONTAL_UNIT(2),
				marginHorizontal: VSP_EDGE_PADDING,
			},

			infoView: {
				flex: 1,
			},

			nameText: {
				fontWeight: 'bold',
				marginBottom: HORIZONTAL_UNIT(),
			},

			emailText: {
				fontSize: THEME_MINOR_FONTSIZE,
			},
		});

		return (
			<ScrollView contentContainerStyle={style.friendsView}>
				{DEV_FRIENDS.map((friend: User) => (
					<TouchableOpacity
						key={friend.userID}
						activeOpacity={0.6}
						style={style.itemView}
					>
						<VSPProfile marginRight={HORIZONTAL_UNIT(4)} />
						<View style={style.infoView}>
							<VSPText style={style.nameText}>
								{friend.userName}
							</VSPText>
							<VSPText style={style.emailText}>
								{friend.userEmail}
							</VSPText>
						</View>
						<VSPTextButton
							icon='next'
							fontSize={THEME_HEADER_FONTSIZE}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
		);
	}

	public render() {
		const style = StyleSheet.create({
			searchView: {
				justifyContent: 'center',
				backgroundColor: THEME_COLORS.greyWhite,
				height: HORIZONTAL_UNIT(10),
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			friendLabelView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: THEME_COLORS.oceanBlue,
				paddingHorizontal: VSP_EDGE_PADDING,
				paddingVertical: HORIZONTAL_UNIT(),
			},
		});

		return (
			<VSPContainer>
				<View style={style.searchView}>
					<VSPTextInput
						placeholder='검색'
						frontIcon='search'
						displayUnderline={false}
					/>
				</View>
				<View style={style.friendLabelView}>
					<VSPText theme='white'>친구</VSPText>
					<VSPBadge value={10} theme='brown' />
				</View>
				{this._renderFriendsList()}
				<VSPBottomBar />
				<AddFriendModal />
			</VSPContainer>
		);
	}
}
