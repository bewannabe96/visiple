import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar, Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-navigation';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_FONTSIZE,
} from '../../types/lib/size';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { User } from '../../types/data/user';

import VSPContainer from '../../components/vsp-container';
import VSPHeader from '../../components/vsp-header';
import VSPDivider from '../../components/vsp-divider';

import AddFriendModal from './add-friend-modal';

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

export default class FriendScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = {
		header: <VSPHeader headerTitle='친구' />,
	};

	public render() {
		const style = StyleSheet.create({
			addFriendButtonView: {
				position: 'absolute',
				bottom: HORIZONTAL_UNIT(4),
				right: HORIZONTAL_UNIT(4),
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
				<FlatList
					data={DEV_FRIENDS}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={
						<VSPDivider
							text={`친구 ${DEV_FRIENDS.length}`}
							orientation='far-left'
						/>
					}
					renderItem={({ item }) => (
						<ListItem
							leftAvatar={{
								size: HORIZONTAL_UNIT(10),
							}}
							containerStyle={{
								paddingVertical: HORIZONTAL_UNIT(3),
							}}
							title={item.name}
							subtitle={item.email}
							rightIcon={{
								name: 'angle-right',
								type: 'vspicon',
								size: THEME_FONTSIZE,
							}}
						/>
					)}
					contentContainerStyle={{
						paddingHorizontal: VSP_EDGE_PADDING,
					}}
				/>
				<View style={style.addFriendButtonView}>
					<Icon
						name='plus'
						type='vspicon'
						size={HORIZONTAL_UNIT(5)}
						color={THEME_COLORS.brown}
						onPress={() => {
							this.setState({ modalVisible: true });
						}}
						reverse
						raised
					/>
				</View>
				<AddFriendModal />
			</VSPContainer>
		);
	}
}
