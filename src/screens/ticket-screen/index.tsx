import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { Ticket } from '../../types/data/ticket';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';

import TicketCard from './tickets-card';

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
		dayPlans: [],
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
		dayPlans: [],
	},
];

interface ITicketScreenProps {
	tickets: Ticket[];
}

export default class TicketScreen extends React.Component<
	IVSPScreenProps<ITicketScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: <VSPHeader headerTitle='티켓' />,
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
					<TouchableOpacity
						style={{
							height: HORIZONTAL_UNIT(31),
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: HORIZONTAL_UNIT(5),
							marginHorizontal: VSP_EDGE_PADDING,
							borderRadius: HORIZONTAL_UNIT(2),
							borderColor: THEME_COLORS.grey,
							borderWidth: 1,
						}}
						onPress={() => {
							this.props.navigation.navigate('NewTicketScreen');
						}}
					>
						<Icon
							name='plus'
							type='vspicon'
							color={THEME_COLORS.grey}
						/>
						<VSPText color={THEME_COLORS.grey} fontWeight='bold'>
							새로운 티켓 만들기
						</VSPText>
					</TouchableOpacity>
				</ScrollView>
			</VSPContainer>
		);
	}
}
