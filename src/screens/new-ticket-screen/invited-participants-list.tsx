import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { UserID } from '../../types/data/user';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPRoundIconButton from '../../components/vsp-round-icon-button';

export interface IInvitedParticipantsListProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	/**
	 * Participants of the ticket
	 */
	participants: UserID[];
}

/**
 * InvitedParticipantsList
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 * - ```participants```(required): Participants of the ticket
 */
export default class InvitedParticipantsList extends React.Component<
	IInvitedParticipantsListProps
> {
	private _renderParticipant(pid: UserID) {
		return (
			<View
				key={pid}
				style={{
					alignItems: 'center',
					padding: HORIZONTAL_UNIT(),
					marginHorizontal: HORIZONTAL_UNIT(),
					marginVertical: HORIZONTAL_UNIT(),
				}}
			>
				<VSPProfile />
				<VSPText marginTop={HORIZONTAL_UNIT()} theme='grey'>
					김윤회
				</VSPText>
				<View
					style={{
						position: 'absolute',
						right: 0,
					}}
				>
					<VSPRoundIconButton
						icon='cancel'
						size={THEME_HEADER_FONTSIZE}
						theme='grey'
					/>
				</View>
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			contentContainer: {
				flexDirection: 'row',
			},
		});

		return (
			<ScrollView
				contentContainerStyle={style.contentContainer}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{this.props.participants.map(this._renderParticipant)}
			</ScrollView>
		);
	}
}
