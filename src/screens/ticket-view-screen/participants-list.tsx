import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { UserID } from '../../types/data/user';

import VSPRoundIconButton from '../../components/vsp-round-icon-button';

interface IParticipantsListProps {
	/**
	 * Participants of the ticket
	 */
	participants: UserID[];
}

/**
 * ParticipantsList
 *
 * @property
 * - ```participants```(required): Participants of the ticket
 */
export default class ParticipantsList extends React.Component<
	IParticipantsListProps
> {
	public render() {
		const style = StyleSheet.create({
			profilesView: {
				flexDirection: 'row',
				alignItems: 'flex-end',
				marginHorizontal: VSP_EDGE_PADDING,
				marginBottom: HORIZONTAL_UNIT(),
				zIndex: 1,
			},
		});

		return (
			<View style={style.profilesView}>
				{this.props.participants.map((uid: UserID, index: number) => (
					<Avatar
						key={uid}
						size={HORIZONTAL_UNIT(12)}
						containerStyle={{
							left: HORIZONTAL_UNIT(-3 * index),
							zIndex: index,
						}}
					/>
				))}
				<View
					style={{
						left: HORIZONTAL_UNIT(
							-3 * this.props.participants.length,
						),
						zIndex: this.props.participants.length,
					}}
				>
					<VSPRoundIconButton
						icon='plus'
						color={THEME_COLORS.grey}
						size={HORIZONTAL_UNIT(8)}
					/>
				</View>
			</View>
		);
	}
}
