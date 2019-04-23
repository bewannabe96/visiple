import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, FlatList } from 'react-navigation';
import { Text, Image } from 'react-native-elements';
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
import VSPDivider from '../../components/vsp-divider';

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
		events: [],
		published: false,
		countryCodes: ['KOR'],
	},
	{
		id: 5,
		title: 'Travel Log 5',
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
				flexDirection: 'row',
				paddingVertical: HORIZONTAL_UNIT(3),
			}}
		>
			<View
				style={{
					width: HORIZONTAL_UNIT(30),
					height: HORIZONTAL_UNIT(32),
				}}
			>
				<Image
					source={require('../../dev-sample-image/landscape_1.jpeg')}
					style={{ borderRadius: HORIZONTAL_UNIT(2) }}
				/>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
					marginLeft: HORIZONTAL_UNIT(2),
					paddingVertical: HORIZONTAL_UNIT(2),
				}}
			>
				<Text h2>{item.title}</Text>
				<View
					style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
				>
					<View
						style={{
							alignItems: 'flex-end',
							marginRight: HORIZONTAL_UNIT(),
						}}
					>
						<Text h3>FROM</Text>
						<Text h3>TO</Text>
					</View>
					<View>
						<Text
							h3
							style={{
								color: THEME_COLORS.grey,
							}}
						>
							{`${item.period.from.toLocaleString(
								DateTime.DATE_FULL,
							)}`}
						</Text>
						<Text
							h3
							style={{
								color: THEME_COLORS.grey,
							}}
						>
							{`${item.period.to.toLocaleString(
								DateTime.DATE_FULL,
							)}`}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);

	public render() {
		return (
			<VSPContainer wrapSafeAreaView>
				<FlatList
					data={DEV_TRAVEL_LOG}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={
						<VSPDivider
							text={`작성중인 로그 ${DEV_TRAVEL_LOG.length}`}
							orientation='far-left'
						/>
					}
					renderItem={this._renderTravelLog}
					contentContainerStyle={{
						paddingHorizontal: VSP_EDGE_PADDING,
					}}
				/>
			</VSPContainer>
		);
	}
}
