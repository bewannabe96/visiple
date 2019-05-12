import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FlatList, Header } from 'react-navigation';
import { Avatar, Text, Image } from 'react-native-elements';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
	DEVICE_WIDTH,
} from '../../types/lib/size';
import { TravelLog } from '../../types/data/travel-log';

import VSPText from '../../components/vsp-text';

const PROFILE_VIEW_HEIGHT = HORIZONTAL_UNIT(35);
const SUMMARY_VIEW_HEIGHT = HORIZONTAL_UNIT(15);

const COLLAPSIBLE_HEADER_MIN_HEIGHT = Header.HEIGHT;
const COLLAPSIBLE_HEADER_MAX_HEIGHT =
	PROFILE_VIEW_HEIGHT + COLLAPSIBLE_HEADER_MIN_HEIGHT;

const HEADER_TRANSITION_POINT = 0.8;

export interface IProfileViewProps {
	/**
	 * Travel logs of the user
	 */
	travelLogs: TravelLog[];
}

/**
 * ProfileView
 *
 * @property
 * - ```travelLogs```(required): Travel logs of the user
 */
export default class ProfileView extends React.Component<IProfileViewProps> {
	public state = {
		scrollY: new Animated.Value(0),
	};

	private _renderHeader() {
		const mapScrollYToOneZero = this.state.scrollY.interpolate({
			inputRange: [0, PROFILE_VIEW_HEIGHT],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		});

		const animatedProfileViewHeight = mapScrollYToOneZero.interpolate({
			inputRange: [0, 1],
			outputRange: [PROFILE_VIEW_HEIGHT, 0],
			extrapolate: 'clamp',
		});

		const animatedProfileViewOpacity = mapScrollYToOneZero.interpolate({
			inputRange: [0, HEADER_TRANSITION_POINT],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});

		const animatedTitleOpacity = mapScrollYToOneZero.interpolate({
			inputRange: [HEADER_TRANSITION_POINT, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		});

		return (
			<View style={style.collapsibleHeader}>
				<Animated.View
					style={[
						style.collapsedHeader,
						{ opacity: animatedTitleOpacity },
					]}
				>
					<Text h3>홍길동</Text>
					<Text
						h4
						style={{
							color: THEME_COLORS.oceanBlue,
						}}
					>
						testuser@gmail.com
					</Text>
				</Animated.View>
				<Animated.View
					style={[
						style.profileView,
						{
							height: animatedProfileViewHeight,
							opacity: animatedProfileViewOpacity,
						},
					]}
				>
					<Avatar size={HORIZONTAL_UNIT(25)} />
					<Text h2 style={{ marginTop: HORIZONTAL_UNIT(2) }}>
						홍길동
					</Text>
					<Text
						h3
						style={{
							color: THEME_COLORS.oceanBlue,
							marginTop: HORIZONTAL_UNIT(),
						}}
					>
						testuser@gmail.com
					</Text>
				</Animated.View>
				<View style={style.summaryView}>
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
						<VSPText style={style.summaryItemTitleText}>
							로그
						</VSPText>
					</View>
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
						<VSPText style={style.summaryItemTitleText}>
							친구
						</VSPText>
					</View>
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
						<VSPText style={style.summaryItemTitleText}>
							팔로워
						</VSPText>
					</View>
				</View>
			</View>
		);
	}

	public render() {
		return (
			<View>
				<FlatList
					data={this.props.travelLogs}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={
						<View style={style.scrollPaddingSpacer} />
					}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={style.logItemContainer}
							activeOpacity={0.6}
							onPress={() => {}}
						>
							<View style={style.logImageView}>
								<Image
									source={require('../../dev-sample-image/landscape_1.jpeg')}
								/>
							</View>
							<View style={style.logTitleView}>
								<VSPText
									fontSize={THEME_HEADER_FONTSIZE}
									color={THEME_COLORS.white}
								>
									{item.title}
								</VSPText>
							</View>
						</TouchableOpacity>
					)}
					scrollEventThrottle={1}
					onScroll={Animated.event([
						{
							nativeEvent: {
								contentOffset: { y: this.state.scrollY },
							},
						},
					])}
					showsVerticalScrollIndicator={false}
				/>
				{this._renderHeader()}
			</View>
		);
	}
}

const style = StyleSheet.create({
	collapsibleHeader: {
		position: 'absolute',
		top: 0,
		width: '100%',
		backgroundColor: THEME_COLORS.white,
	},

	collapsedHeader: {
		height: COLLAPSIBLE_HEADER_MIN_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},

	profileView: {
		paddingHorizontal: VSP_EDGE_PADDING,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	summaryView: {
		flexDirection: 'row',
		paddingVertical: HORIZONTAL_UNIT(4),
		height: SUMMARY_VIEW_HEIGHT,
	},

	scrollPaddingSpacer: {
		height: COLLAPSIBLE_HEADER_MAX_HEIGHT + SUMMARY_VIEW_HEIGHT,
	},

	summaryItemView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	summaryItemValueText: {
		color: THEME_COLORS.black,
		marginBottom: 5,
	},

	summaryItemTitleText: {
		fontWeight: 'bold',
		color: THEME_COLORS.oceanBlue,
	},

	logItemContainer: {
		backgroundColor: THEME_COLORS.black,
	},

	logImageView: {
		opacity: 0.7,
		height: DEVICE_WIDTH * 0.6,
	},

	logTitleView: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		padding: HORIZONTAL_UNIT(3),
	},
});
