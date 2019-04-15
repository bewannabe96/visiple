import React from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
} from 'react-native';
import { withNavigation, FlatList } from 'react-navigation';
import { DateTime } from 'luxon';

import { TravelLog } from '../../types/data/travel-log';
import { THEME_HEADER_FONTSIZE, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPText from '../../components/vsp-text';

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

interface ILogsListProps {}

/**
 * LogsList
 *
 * @property
 */
class LogsList extends React.Component<IVSPScreenProps<ILogsListProps>> {
	public render() {
		const style = StyleSheet.create({
			container: {
				backgroundColor: THEME_COLORS.black,
			},

			imageView: {
				opacity: 0.7,
				width: '100%',
				height: Dimensions.get('window').width * 0.6,
			},

			titleView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				padding: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<FlatList
				data={DEV_TRAVEL_LOG}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						key={item.id}
						style={style.container}
						activeOpacity={0.6}
						onPress={() => {
							this.props.navigation.navigate(
								'NewTravelLogScreen',
							);
						}}
					>
						<Image
							style={style.imageView}
							source={require('../../dev-sample-image/landscape_1.jpeg')}
						/>
						<View style={style.titleView}>
							<VSPText
								fontSize={THEME_HEADER_FONTSIZE}
								color={THEME_COLORS.white}
							>
								{item.title}
							</VSPText>
						</View>
					</TouchableOpacity>
				)}
			/>
		);
	}
}

export default withNavigation(LogsList);
