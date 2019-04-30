import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { UserID } from '../../types/data/user';

import SelectFriendModal from './select-friend-modal';

export interface IFriendsSelectorProps {
	/**
	 * Theme color
	 */
	color?: string;

	/**
	 * Selected friends
	 */
	friends: UserID[];
}

/**
 * FriendsSelector
 *
 * @property
 * - ```color```: Theme color (by default ```THEME_COLORS.oceanBlue```)
 * - ```friends```: Selected friends
 */
export default class FriendsSelector extends React.Component<
	IFriendsSelectorProps
> {
	public static defaultProps: IFriendsSelectorProps = {
		color: THEME_COLORS.oceanBlue,
		friends: [1, 2, 3, 4, 5, 6],
	};

	public state = {
		isModalVisible: false,
	};

	private _openModal = () => {
		this.setState({
			...this.state,
			isModalVisible: true,
		});
	};

	private _closeModal = () => {
		this.setState({ ...this.state, isModalVisible: false });
	};

	private _renderParticipant({ item }: { item: UserID }) {
		return (
			<View
				style={{
					alignItems: 'center',
				}}
			>
				<Avatar size={HORIZONTAL_UNIT(12)} />
				<Text
					h3
					style={{
						color: THEME_COLORS.grey,
						marginTop: HORIZONTAL_UNIT(),
					}}
				>
					김윤회
				</Text>
				<View
					style={{
						position: 'absolute',
						right: 0,
					}}
				>
					<Icon
						name='cancel'
						type='vspicon'
						size={THEME_HEADER_FONTSIZE / 2}
						color={THEME_COLORS.grey}
						onPress={() => {}}
						reverse
					/>
				</View>
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			bodyView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'center',
				marginTop: HORIZONTAL_UNIT(1.5),
			},
		});

		return (
			<View>
				<View style={style.bodyView}>
					<FlatList
						data={this.props.friends}
						keyExtractor={item => item.toString()}
						ListEmptyComponent={
							<Text
								h3
								style={{
									color: this.props.color,
								}}
							>
								친구를 초대 하십시오.
							</Text>
						}
						ItemSeparatorComponent={() => (
							<View style={{ width: HORIZONTAL_UNIT(3) }} />
						)}
						renderItem={this._renderParticipant}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
					<Icon
						name='plus'
						type='vspicon'
						color={this.props.color}
						reverse
						onPress={this._openModal}
					/>
				</View>
				<View style={style.footerView}>
					<Text h3 style={{ color: THEME_COLORS.grey }}>
						총
					</Text>
					<Text
						h3
						style={{
							color: this.props.color,
							marginHorizontal: HORIZONTAL_UNIT(),
						}}
					>
						{`${this.props.friends.length} 명`}
					</Text>
				</View>
				<SelectFriendModal
					isVisible={this.state.isModalVisible}
					closeAction={this._closeModal}
					color={this.props.color!}
				/>
			</View>
		);
	}
}
