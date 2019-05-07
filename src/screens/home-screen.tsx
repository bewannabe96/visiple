import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../types/props/vsp-screen';
import { TravelLog } from '../types/data/travel-log';

import VSPContainer from '../components/vsp-container';
import VSPHeader from '../components/vsp-header';
import VSPHeaderButton from '../components/vsp-header-button';

import ProfileScreen from '../screen-components/profile-view';

const DEV_TRAVEL_LOG: TravelLog[] = [
	{
		id: 1,
		title: 'Travel Log 1',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		days: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 2,
		title: 'Travel Log 2',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		days: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 3,
		title: 'Travel Log 3',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		days: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 4,
		title: 'Travel Log 4',
		titleImage: '',
		owner: 1,
		participants: [1, 2],
		period: {
			from: DateTime.local(),
			to: DateTime.local(),
		},
		days: [],
		published: false,
		countryCodes: ['KOR'],
	},
];

export default class HomeScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerRight={
						<VSPHeaderButton
							iconName='inbox'
							onPress={() => {
								navigation.navigate('TravelLogsScreen');
							}}
						/>
					}
					transparent
				/>
			),
		};
	};

	public state = {
		headerViewOpacity: undefined,
	};

	public render() {
		return (
			<VSPContainer wrapSafeAreaView>
				<ProfileScreen travelLogs={DEV_TRAVEL_LOG} />
			</VSPContainer>
		);
	}
}
