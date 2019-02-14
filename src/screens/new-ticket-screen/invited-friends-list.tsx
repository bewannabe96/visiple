import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { VERTICAL_UNIT } from '../../types/config/size';
import { THEME_MINOR_FONTSIZE } from '../../types/config/theme';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPTextButton from '../../components/vsp-text-button';

export interface InvitedFriendsListProps {
	/**
	 * Color of the ticket
	 */
	ticketColor: string;
}

/**
 * InvitedFriendsList
 *
 * @property
 * - ```ticketColor```(required): Color of the ticket
 */
export default class InvitedFriendsList extends React.Component<
	InvitedFriendsListProps
> {
	private _renderItem() {
		return (
			<View
				style={{
					alignItems: 'center',
					padding: VERTICAL_UNIT,
					marginHorizontal: VERTICAL_UNIT,
				}}
			>
				<VSPProfile />
				<VSPText marginY={VERTICAL_UNIT}>김윤회</VSPText>
				<VSPTextButton
					icon='cancel'
					fontSize={THEME_MINOR_FONTSIZE}
					color={this.props.ticketColor}
				/>
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			friendsScrollView: {
				flexDirection: 'row',
			},
		});

		return (
			<ScrollView
				contentContainerStyle={style.friendsScrollView}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{this._renderItem()}
			</ScrollView>
		);
	}
}
