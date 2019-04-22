import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { UserID } from '../../types/data/user';

import VSPText from '../../components/vsp-text';

import SelectFriendModal from './select-friend-modal';

export interface IFriendsSelectorProps {
	/**
	 * Theme color
	 */
	color: string;

	/**
	 * Selected friends
	 */
	friends: UserID[];
}

/**
 * FriendsSelector
 *
 * @property
 * - ```themeColor```(required): Theme color
 * - ```friends```(required): Selected friends
 */
export default class FriendsSelector extends React.Component<
	IFriendsSelectorProps
> {
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
					padding: HORIZONTAL_UNIT(),
					paddingHorizontal: HORIZONTAL_UNIT(2),
				}}
			>
				<Avatar size={HORIZONTAL_UNIT(12)} />
				<VSPText
					marginTop={HORIZONTAL_UNIT()}
					color={THEME_COLORS.grey}
				>
					김윤회
				</VSPText>
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
			container: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
			},

			valueText: {
				color: this.props.color,
				fontSize: THEME_HEADER_FONTSIZE,
				marginHorizontal: HORIZONTAL_UNIT(),
			},
		});

		return (
			<View>
				<View style={style.container}>
					<FlatList
						data={this.props.friends}
						keyExtractor={item => item.toString()}
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
					<VSPText color={THEME_COLORS.grey}>총</VSPText>
					<VSPText style={style.valueText}>{`${
						this.props.friends.length
					}`}</VSPText>
					<VSPText color={THEME_COLORS.grey}>명</VSPText>
				</View>
				<SelectFriendModal
					isVisible={this.state.isModalVisible}
					closeAction={this._closeModal}
					color={this.props.color}
				/>
			</View>
		);
	}
}
