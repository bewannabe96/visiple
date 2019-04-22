import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { NewtravelLog } from '../../types/data/travel-log';

import VSPHeader from '../../components/vsp-header';
import { VSPHeaderBack } from '../../components/vsp-header-button';
import VSPContainer from '../../components/vsp-container';

import PeriodSelector from '../../screen-components/period-selector';
import CountrySelector from '../../screen-components/country-selector';
import FriendsSelector from '../../screen-components/friends-selector';

const DEV_NEWTRAVELLOG: NewtravelLog = {
	title: '타이틀',
	owner: 1,
	participants: [1, 2],
	countryCodes: ['KOR'],
	period: { from: DateTime.local(), to: DateTime.local() },
};

interface INewTravelLogScreenProps {}

/**
 * NewTravelLogScreen
 */
export default class NewTravelLogScreen extends React.Component<
	IVSPScreenProps<INewTravelLogScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='새로운 로그'
					headerLeft={VSPHeaderBack(navigation)}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				flex: 1,
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			categoryView: {
				marginTop: HORIZONTAL_UNIT(5),
			},

			titleText: {
				marginBottom: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<VSPContainer wrapSafeAreaView>
				<ScrollView contentContainerStyle={style.container}>
					<Input
						placeholder='제목'
						inputStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
					/>
					<View style={style.categoryView}>
						<Text h2 style={style.titleText}>
							기간
						</Text>
						<PeriodSelector
							color={THEME_COLORS.oceanBlue}
							period={DEV_NEWTRAVELLOG.period}
							setFromDate={() => ({
								type: 'test',
							})}
							setToDate={() => ({
								type: 'test',
							})}
						/>
					</View>
					<View style={style.categoryView}>
						<Text h2 style={style.titleText}>
							국가
						</Text>
						<CountrySelector />
					</View>
					<View style={style.categoryView}>
						<Text h2 style={style.titleText}>
							함께하는 친구
						</Text>
						<FriendsSelector
							color={THEME_COLORS.oceanBlue}
							friends={DEV_NEWTRAVELLOG.participants}
						/>
					</View>
				</ScrollView>
				<Button
					title='완료'
					buttonStyle={{
						borderRadius: 0,
						backgroundColor: THEME_COLORS.oceanBlue,
					}}
					titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
				/>
			</VSPContainer>
		);
	}
}
