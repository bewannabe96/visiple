import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { Ticket } from '../../types/data/ticket';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPHeaderButton, {
	VSPHeaderMenu,
} from '../../components/vsp-header-button';

import TicketCard from './tickets-card';
import { DateTime } from 'luxon';

const DEV_TICKETS: Ticket[] = [
	{
		id: 1,
		title: '나혼자 여행갈꼬얌',
		owner: '0001',
		participants: ['0001', '0002', '0004', '0005'],
		themeColor: '#73C0F4',
		period: {
			from: DateTime.local(2020, 3, 14),
			to: DateTime.local(2020, 3, 18),
		},
		packings: {
			commonList: [],
			indivLists: [],
		},
		plans: [],
	},
	{
		id: 2,
		title: '두번째 티켓',
		owner: '0001',
		participants: ['0001', '0003', '0004', '0005', '0006'],
		themeColor: '#AEEAB0',
		period: {
			from: DateTime.local(2020, 3, 14),
			to: DateTime.local(2020, 3, 18),
		},
		packings: {
			commonList: [],
			indivLists: [],
		},
		plans: [],
	},
];

interface ITicketScreenProps extends IVSPScreenProps {
	tickets: Ticket[];
}

export default class TicketScreen extends React.Component<ITicketScreenProps> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='티켓'
					headerLeft={VSPHeaderMenu(navigation)}
					headerRight={
						<VSPHeaderButton
							icon='plus'
							onPress={() => {
								navigation.navigate('NewTicketScreen');
							}}
						/>
					}
				/>
			),
		};
	};

	private _onTicketPress() {
		this.props.navigation.navigate('TicketViewScreen');
	}

	public render() {
		return (
			<VSPContainer>
				<ScrollView>
					{DEV_TICKETS.map((ticket: Ticket) => (
						<TicketCard
							key={ticket.id}
							ticket={ticket}
							onPress={() => {
								this._onTicketPress();
							}}
						/>
					))}
				</ScrollView>
			</VSPContainer>
		);
	}
}
