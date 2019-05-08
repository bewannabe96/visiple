import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
	NavigationScreenProp,
	withNavigation,
	ScrollView,
} from 'react-navigation';
import { Text, Image, Icon, Input } from 'react-native-elements';
import { DateTime } from 'luxon';

import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
	THEME_TITLE_FONTSIZE,
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
import CountrySelector from '../../screen-components/country-selector';

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

	public state = {
		titleOnEdit: false,
	};

	public render() {
		const style = StyleSheet.create({
			titleImageView: {
				height: HORIZONTAL_UNIT(55),
			},

			bodyView: {
				paddingVertical: HORIZONTAL_UNIT(3),
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			titleView: {
				flexDirection: 'row',
				alignItems: 'center',
				marginBottom: HORIZONTAL_UNIT(10),
			},

			headerText: {
				marginBottom: HORIZONTAL_UNIT(2),
			},
		});

		const titleElement = this.state.titleOnEdit ? (
			<View style={style.titleView}>
				<Input
					value={this.props.title}
					inputStyle={{ fontSize: THEME_TITLE_FONTSIZE }}
					containerStyle={{ flex: 1 }}
				/>
				<Icon
					name='check'
					type='vspicon'
					color={THEME_COLORS.grey}
					containerStyle={{ marginLeft: HORIZONTAL_UNIT(4) }}
					onPress={() => {
						this.setState({ ...this.state, titleOnEdit: false });
					}}
				/>
			</View>
		) : (
			<View style={style.titleView}>
				<Text h1>{this.props.title}</Text>
				<Icon
					name='pencil'
					type='vspicon'
					color={THEME_COLORS.grey}
					containerStyle={{ marginLeft: HORIZONTAL_UNIT(4) }}
					onPress={() => {
						this.setState({ ...this.state, titleOnEdit: true });
					}}
				/>
			</View>
		);

		return (
			<VSPContainer>
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
				<ScrollView contentContainerStyle={style.bodyView}>
					{titleElement}

					<PeriodSelector />

					<VSPDivider marginVertical={HORIZONTAL_UNIT(8)} />

					<Text h2 style={style.headerText}>
						여행 국가
					</Text>
					<CountrySelector />

					<VSPDivider marginVertical={HORIZONTAL_UNIT(8)} />

					<Text h2 style={style.headerText}>
						함께하는 친구
					</Text>
					<FriendsSelector />
				</ScrollView>
			</VSPContainer>
		);
	}
}

export default withNavigation(SummaryPage);
