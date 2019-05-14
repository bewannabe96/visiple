import React from 'react';
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native';
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
	THEME_TITLE_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { TravelLog } from '../../types/data/travel-log';

import VSPContainer from '../../components/vsp-container';
import VSPDivider from '../../components/vsp-divider';
import VSPHeader, {
	VSP_PURE_HEADER_HEIGHT,
	VSP_STATUS_BAR_HEIGHT,
} from '../../components/vsp-header';
import { VSPHeaderBack } from '../../components/vsp-header-button';

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

const TITLE_IMAGE_HEIGHT = HORIZONTAL_UNIT(70);
const TITLE_IMAGE_DISPLAY_HEIGHT = HORIZONTAL_UNIT(40);
const TITLE_TRANSITION_RANGE = HORIZONTAL_UNIT(10);

const COLLAPSIBLE_HEADER_MIN_HEIGHT =
	VSP_PURE_HEADER_HEIGHT + VSP_STATUS_BAR_HEIGHT;
const COLLAPSIBLE_HEADER_MAX_HEIGHT =
	TITLE_IMAGE_DISPLAY_HEIGHT + COLLAPSIBLE_HEADER_MIN_HEIGHT;

const HEADER_TRANSITION_POINT = 0.8;

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
					headerLeft={<VSPHeaderBack navigation={navigation} />}
					transparent
				/>
			),
		};
	};

	static defaultProps = {
		title: DEV_TRAVEL_LOG.title,
	};

	public state = {
		scrollY: new Animated.Value(0),
		titleOnEdit: false,
	};

	private _renderTitleElement() {
		const animatedTitleViewOpacity = this.state.scrollY.interpolate({
			inputRange: [
				TITLE_IMAGE_DISPLAY_HEIGHT,
				TITLE_IMAGE_DISPLAY_HEIGHT + TITLE_TRANSITION_RANGE,
			],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});

		return this.state.titleOnEdit ? (
			<Animated.View
				style={[style.titleView, { opacity: animatedTitleViewOpacity }]}
			>
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
			</Animated.View>
		) : (
			<Animated.View
				style={[style.titleView, { opacity: animatedTitleViewOpacity }]}
			>
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
			</Animated.View>
		);
	}

	public render() {
		const animatedCollapsibleHeaderHeight = this.state.scrollY.interpolate({
			inputRange: [0, TITLE_IMAGE_DISPLAY_HEIGHT],
			outputRange: [
				COLLAPSIBLE_HEADER_MAX_HEIGHT,
				COLLAPSIBLE_HEADER_MIN_HEIGHT,
			],
			extrapolate: 'clamp',
		});

		const animatedTitleImageOpacity = this.state.scrollY.interpolate({
			inputRange: [
				TITLE_IMAGE_DISPLAY_HEIGHT * HEADER_TRANSITION_POINT,
				TITLE_IMAGE_DISPLAY_HEIGHT,
			],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});

		const animatedCollapsibleHeaderOpacity = this.state.scrollY.interpolate(
			{
				inputRange: [
					TITLE_IMAGE_DISPLAY_HEIGHT,
					TITLE_IMAGE_DISPLAY_HEIGHT + TITLE_TRANSITION_RANGE,
				],
				outputRange: [0, 1],
				extrapolate: 'clamp',
			},
		);

		return (
			<VSPContainer>
				<SafeAreaView style={style.titleImageView}>
					<Animated.View
						style={[
							style.titleImage,
							{ opacity: animatedTitleImageOpacity },
						]}
					>
						<Image
							source={require('../../dev-sample-image/landscape_1.jpeg')}
						/>
					</Animated.View>
					<Animated.View
						style={[
							style.collapsibleHeader,
							{
								height: animatedCollapsibleHeaderHeight,
								opacity: animatedCollapsibleHeaderOpacity,
								borderBottomWidth: 0.4,
								borderColor: THEME_COLORS.grey,
							},
						]}
					>
						<Text h3>{this.props.title}</Text>
					</Animated.View>
					<View style={style.titleImageMask} />
				</SafeAreaView>

				<SafeAreaView>
					<ScrollView
						style={style.scrollView}
						scrollEventThrottle={1}
						onScroll={Animated.event([
							{
								nativeEvent: {
									contentOffset: { y: this.state.scrollY },
								},
							},
						])}
						showsVerticalScrollIndicator={false}
						overScrollMode='never'
					>
						<View style={style.bodyView}>
							{this._renderTitleElement()}

							<PeriodSelector />

							<VSPDivider marginVertical={HORIZONTAL_UNIT(10)} />

							<Text h2 style={style.headerText}>
								여행 국가
							</Text>
							<CountrySelector />

							<VSPDivider marginVertical={HORIZONTAL_UNIT(10)} />

							<Text h2 style={style.headerText}>
								함께하는 친구
							</Text>
							<FriendsSelector />
						</View>
					</ScrollView>
				</SafeAreaView>
				{/* <Icon
					name='photo-camera'
					type='vspicon'
					size={THEME_HEADER_FONTSIZE}
					Component={TouchableOpacity}
					reverse
					raised
				/> */}
			</VSPContainer>
		);
	}
}

const style = StyleSheet.create({
	titleImageView: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%',
	},

	titleImage: {
		position: 'absolute',
		top: 0,
		height: TITLE_IMAGE_HEIGHT,
		width: '100%',
	},

	collapsibleHeader: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: VSP_STATUS_BAR_HEIGHT,
	},

	titleImageMask: {
		flex: 1,
		backgroundColor: THEME_COLORS.white,
	},

	scrollView: {
		marginTop: COLLAPSIBLE_HEADER_MIN_HEIGHT,
	},

	bodyView: {
		marginTop: TITLE_IMAGE_DISPLAY_HEIGHT,
		paddingBottom: HORIZONTAL_UNIT(10),
		paddingHorizontal: VSP_EDGE_PADDING,
		backgroundColor: THEME_COLORS.white,
	},

	titleView: {
		flexDirection: 'row',
		alignItems: 'center',
		height: TITLE_TRANSITION_RANGE * 2,
	},

	headerText: {
		marginBottom: HORIZONTAL_UNIT(2),
	},
});

export default withNavigation(SummaryPage);
