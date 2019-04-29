import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import { Text, Image, Icon } from 'react-native-elements';
import { ScrollView } from 'react-navigation';
import { DateTime } from 'luxon';

import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { TravelLog } from '../../types/data/travel-log';

import VSPContainer from '../../components/vsp-container';
import VSPDivider from '../../components/vsp-divider';
import VSPHeader from '../../components/vsp-header';
import VSPHeaderButton from '../../components/vsp-header-button';

import FriendsSelector from '../../screen-components/friends-selector';
import PeriodSelector from '../../screen-components/period-selector';

const DEV_TRAVEL_LOG: TravelLog = {
	id: 1,
	title: 'Travel Log 1',
	titleImage: '',
	owner: 1,
	participants: [1, 2],
	period: {
		from: DateTime.local().startOf('day'),
		to: DateTime.local()
			.startOf('day')
			.plus({ days: 6 }),
	},
	published: false,
	countryCodes: ['KOR'],
	days: [],
};

interface ISummaryPageProps {
	/**
	 * Title of the travel log
	 */
	title: string;
}

/**
 * SummaryPage
 *
 * @property
 * - ```title```(required): Title of the travel log
 */
class SummaryPage extends React.Component<IVSPScreenProps<ISummaryPageProps>> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					transparent
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

	static defaultProps = {
		title: DEV_TRAVEL_LOG.title,
	};

	public render() {
		const style = StyleSheet.create({
			titleImageView: {
				height: HORIZONTAL_UNIT(55),
			},

			bodyView: {
				flex: 1,
				paddingTop: HORIZONTAL_UNIT(3),
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			headerText: {
				marginBottom: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<VSPContainer>
				<ScrollView>
					<View style={style.titleImageView}>
						<Image
							source={require('../../dev-sample-image/landscape_1.jpeg')}
						/>
						<View
							style={{
								position: 'absolute',
								bottom: 0,
								width: '100%',
								alignItems: 'flex-end',
								padding: HORIZONTAL_UNIT(2),
							}}
						>
							<Icon
								name='photo-camera'
								type='vspicon'
								size={THEME_HEADER_FONTSIZE}
								reverse
								raised
							/>
						</View>
					</View>
					<View style={style.bodyView}>
						<Text h1 style={style.headerText}>
							{this.props.title}
						</Text>

						<Text h2 style={style.headerText}>
							함께하는 친구
						</Text>
						<FriendsSelector />

						<VSPDivider marginVertical={HORIZONTAL_UNIT(6)} />

						<Text h2 style={style.headerText}>
							기간
						</Text>
						<PeriodSelector />
					</View>
				</ScrollView>
			</VSPContainer>
		);
	}
}

export default withNavigation(SummaryPage);
