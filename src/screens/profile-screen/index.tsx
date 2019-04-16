import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Text, Button, Image } from 'react-native-elements';
import { DateTime } from 'luxon';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_MINOR_FONTSIZE,
	THEME_HEADER_FONTSIZE,
	DEVICE_WIDTH,
} from '../../types/lib/size';
import { TravelLog } from '../../types/data/travel-log';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPContainer from '../../components/vsp-container';
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

export default class ProfileScreen extends React.Component<IVSPScreenProps> {
	public render() {
		const style = StyleSheet.create({
			profileView: {
				flexDirection: 'row',
				paddingHorizontal: VSP_EDGE_PADDING,
				paddingVertical: HORIZONTAL_UNIT(4),
			},

			profileInfoView: {
				flex: 1,
				paddingTop: HORIZONTAL_UNIT(2),
				paddingLeft: VSP_EDGE_PADDING,
				justifyContent: 'space-between',
			},

			profileButtonView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
			},

			summaryView: {
				flexDirection: 'row',
			},

			summaryItemView: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: HORIZONTAL_UNIT(2),
				paddingBottom: HORIZONTAL_UNIT(4),
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
				width: DEVICE_WIDTH,
				height: DEVICE_WIDTH * 0.6,
			},

			logTitleView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				padding: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<VSPContainer>
				<View style={style.profileView}>
					<Avatar size={HORIZONTAL_UNIT(20)} />
					<View style={style.profileInfoView}>
						<View>
							<Text h2>홍길동</Text>
							<Text
								h3
								style={{
									color: THEME_COLORS.oceanBlue,
									marginTop: HORIZONTAL_UNIT(),
								}}
							>
								testuser@gmail.com
							</Text>
						</View>
						<View style={style.profileButtonView}>
							<Button
								icon={{
									name: 'add-user',
									type: 'vspicon',
									color: THEME_COLORS.brown,
									size: THEME_MINOR_FONTSIZE,
								}}
								title='친구 추가'
								type='outline'
								titleStyle={{
									fontSize: THEME_MINOR_FONTSIZE,
									color: THEME_COLORS.brown,
								}}
								buttonStyle={{
									borderColor: THEME_COLORS.brown,
									height: HORIZONTAL_UNIT(6.5),
								}}
								containerStyle={{
									marginRight: HORIZONTAL_UNIT(),
									flex: 1,
								}}
							/>
							<Button
								title='팔로우'
								titleStyle={{
									fontSize: THEME_MINOR_FONTSIZE,
								}}
								buttonStyle={{
									backgroundColor: THEME_COLORS.brown,
									height: HORIZONTAL_UNIT(6.5),
								}}
								containerStyle={{
									flex: 1,
								}}
							/>
						</View>
					</View>
				</View>
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
				<FlatList
					data={DEV_TRAVEL_LOG}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity
							key={item.id}
							style={style.logItemContainer}
							activeOpacity={0.6}
							onPress={() => {
								this.props.navigation.navigate(
									'NewTravelLogScreen',
								);
							}}
						>
							<Image
								style={style.logImageView}
								source={require('../../dev-sample-image/landscape_1.jpeg')}
							/>
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
				/>
			</VSPContainer>
		);
	}
}
