import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, FlatList } from 'react-navigation';
import { Card, Text } from 'react-native-elements';
import { DateTime } from 'luxon';

import { TravelLog } from '../../types/data/travel-log';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { THEME_COLORS } from '../../types/lib/theme';
import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/lib/size';

import VSPContainer from '../../components/vsp-container';
import VSPHeader from '../../components/vsp-header';
import VSPHeaderButton, {
	VSPHeaderBack,
} from '../../components/vsp-header-button';

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
		events: [],
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
		events: [],
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
		events: [],
		published: false,
		countryCodes: ['KOR'],
	},
];

interface IEditableTravelLogsScreenProps {}

/**
 * NewTravelLogScreen
 */
export default class EditableTravelLogsScreen extends React.Component<
	IVSPScreenProps<IEditableTravelLogsScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='로그'
					headerLeft={VSPHeaderBack(navigation)}
					headerRight={
						<VSPHeaderButton
							iconName='plus'
							onPress={() => {
								navigation.navigate('NewTravelLogScreen');
							}}
						/>
					}
				/>
			),
		};
	};

	private _renderTravelLog = ({ item }: { item: TravelLog }) => (
		<View
			style={{
				paddingVertical: HORIZONTAL_UNIT(2),
			}}
		>
			<Card
				title={item.title}
				image={require('../../dev-sample-image/landscape_1.jpeg')}
				containerStyle={{
					borderRadius: HORIZONTAL_UNIT(2),
				}}
			>
				<Text
					h3
					style={{
						color: THEME_COLORS.grey,
					}}
				>{`${item.period.from.toLocaleString(
					DateTime.DATE_FULL,
				)} ~ ${item.period.to.toLocaleString(
					DateTime.DATE_FULL,
				)}`}</Text>
			</Card>
		</View>
	);

	public render() {
		return (
			<VSPContainer wrapSafeAreaView>
				<FlatList
					data={DEV_TRAVEL_LOG}
					keyExtractor={item => item.id.toString()}
					renderItem={this._renderTravelLog}
					contentContainerStyle={{
						paddingHorizontal: VSP_EDGE_PADDING,
					}}
				/>
			</VSPContainer>
		);
	}
}
