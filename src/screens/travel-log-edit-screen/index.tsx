import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { TravelLog } from '../../types/data/travel-log';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { THEME_COLORS } from '../../types/lib/theme';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';

import VSPHeader from '../../components/vsp-header';
import VSPHeaderButton from '../../components/vsp-header-button';
import VSPContainer from '../../components/vsp-container';

const DEV_TRAVEL_LOG: TravelLog = {
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
};

interface ITravelLogEditScreenProps {}

/**
 * TravelLogEditScreen
 */
export default class TravelLogEditScreen extends React.Component<
	IVSPScreenProps<ITravelLogEditScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					transparent={true}
					headerLeft={
						<VSPHeaderButton
							iconName='left-arrow'
							color={THEME_COLORS.white}
							onPress={() => {
								navigation.pop();
							}}
						/>
					}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			titleImageView: {
				height: HORIZONTAL_UNIT(50),
			},

			bodyView: {
				flex: 1,
				paddingTop: HORIZONTAL_UNIT(3),
				paddingHorizontal: VSP_EDGE_PADDING,
			},
		});

		return (
			<VSPContainer>
				<View style={style.titleImageView}>
					<Image
						source={require('../../dev-sample-image/landscape_1.jpeg')}
					/>
				</View>
				<View style={style.bodyView}>
					<Text h2>{DEV_TRAVEL_LOG.title}</Text>
				</View>
			</VSPContainer>
		);
	}
}
