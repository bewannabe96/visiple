import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { UserID } from '../../types/data/user';

import VSPText from '../../components/vsp-text';

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
			contentContainer: {
				flexDirection: 'row',
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
			},

			valueText: {
				color: this.props.themeColor,
				fontSize: THEME_HEADER_FONTSIZE,
				marginHorizontal: HORIZONTAL_UNIT(),
			},
		});

		return (
			<View>
				<ScrollView
					contentContainerStyle={style.contentContainer}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{this.props.participants.map(this._renderParticipant)}
				</ScrollView>
				<View style={style.footerView}>
					<VSPText color={THEME_COLORS.grey}>총</VSPText>
					<VSPText style={style.valueText}>{`${
						this.props.participants.length
					}`}</VSPText>
					<VSPText color={THEME_COLORS.grey}>명</VSPText>
				</View>
			</View>
		);
	}
}
