import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPBottomBar from '../../components/vsp-bottombar';
import VSPHeaderTitle from '../../components/vsp-header-title';
import VSPHeaderButton, {
	VSPHeaderMenu,
} from '../../components/vsp-header-button';
import TicketsList from './tickets-list';

const DEV_TICKETS = [
	{
		id: 1,
		title: '나혼자 여행갈꼬얌',
		owner: 'user01',
		participants: ['user01'],
		period: {
			from: new Date('2019-09-20'),
			to: new Date('2019-09-27'),
		},
		plans: [],
		themeColor: '#B09DFF',
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
					<TicketsList tickets={DEV_TICKETS} />
				</ScrollView>
				<VSPBottomBar />
			</VSPContainer>
		);
	}
}
