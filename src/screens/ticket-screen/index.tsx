import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { Ticket } from '../../types/data/ticket';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPHeaderTitle from '../../components/vsp-header-title';
import VSPHeaderButton, {
	VSPHeaderMenu,
} from '../../components/vsp-header-button';

import TicketCard from './tickets-card';

const DEV_TICKETS: Ticket[] = [
	{
		id: 1,
		title: '나혼자 여행갈꼬얌',
		owner: '0001',
		participants: ['0001', '0002'],
		themeColor: '#73C0F4',
		period: {
			from: new Date('2020-03-14'),
			to: new Date('2020-03-18'),
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
		participants: ['0001', '0003', '0004'],
		themeColor: '#AEEAB0',
		period: {
			from: new Date('2020-03-14'),
			to: new Date('2020-03-18'),
		},
		packings: {
			commonList: [],
			indivLists: [],
		},
		plans: [],
	},
];

export default class TicketScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle={<VSPHeaderTitle text='티켓' />}
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
