import React from 'react';
import { Button } from 'react-native-elements';
import { NavigationScreenProp, FlatList } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { Ticket } from '../../types/data/ticket';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';

import TicketCard from './tickets-card';

const DEV_TICKETS: Ticket[] = [
	{
		id: 1,
		title: '나혼자 여행갈꼬얌',
		owner: 1,
		participants: [1, 2, 3, 4],
		themeColor: '#73C0F4',
		period: {
			from: DateTime.local(2020, 3, 14),
			to: DateTime.local(2020, 3, 18),
		},
		packings: {
			commonList: [],
			indivLists: [],
		},
		dayPlans: [],
	},
	{
		id: 2,
		title: '두번째 티켓',
		owner: 1,
		participants: [1, 3, 4, 5, 6],
		themeColor: '#AEEAB0',
		period: {
			from: DateTime.local(2020, 3, 14),
			to: DateTime.local(2020, 3, 18),
		},
		packings: {
			commonList: [],
			indivLists: [],
		},
		dayPlans: [],
	},
];

interface ITicketScreenProps {
	tickets: Ticket[];
}

export default class TicketScreen extends React.Component<
	IVSPScreenProps<ITicketScreenProps>
> {
	public static navigationOptions = {
		header: <VSPHeader headerTitle='티켓' />,
	};

	private _onTicketPress() {
		this.props.navigation.navigate('TicketViewScreen');
	}

	public render() {
		return (
			<VSPContainer>
				<FlatList
					data={DEV_TICKETS}
					keyExtractor={item => item.id.toString()}
					ListFooterComponent={
						<Button
							title='새로운 티켓 만들기'
							icon={{
								name: 'plus',
								type: 'vspicon',
								color: THEME_COLORS.grey,
							}}
							type='outline'
							buttonStyle={{
								borderColor: THEME_COLORS.grey,
							}}
							titleStyle={{ color: THEME_COLORS.grey }}
							containerStyle={{
								marginTop: HORIZONTAL_UNIT(5),
								marginHorizontal: VSP_EDGE_PADDING,
							}}
							onPress={() => {
								this.props.navigation.navigate(
									'NewTicketScreen',
								);
							}}
						/>
					}
					renderItem={({ item }) => (
						<TicketCard
							ticket={item}
							onPress={() => {
								this._onTicketPress();
							}}
						/>
					)}
				/>
			</VSPContainer>
		);
	}
}
