import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { UserID } from '../../types/data/user';

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
					<Icon
						name='plus'
						type='vspicon'
						color={THEME_COLORS.grey}
						size={HORIZONTAL_UNIT(4)}
						onPress={() => {}}
						reverse
					/>
				</View>
			</View>
		);
	}
}
