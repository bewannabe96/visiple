import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TabProps } from 'react-native-scrollable-tab-view';

import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_FONTSIZE,
} from '../../types/lib/size';
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
	TabProps<IParticipantsListProps>
> {
	public render() {
		return (
			<FlatList
				data={this.props.participants}
				keyExtractor={item => item.toString()}
				renderItem={({ item }) => (
					<ListItem
						leftAvatar={{
							size: HORIZONTAL_UNIT(10),
						}}
						containerStyle={{
							paddingVertical: HORIZONTAL_UNIT(3),
						}}
						title={'홍길동'}
						subtitle={'testuser01@naver.com'}
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
		);
	}
}
