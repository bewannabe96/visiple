import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	VSP_TOP_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { TICKET_COLORS } from '../../types/data/ticket/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPTextButton from '../../components/vsp-text-button';
import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';

import PlanTimeline from './plan-timeline';
import PackingList from './packing-list';

const DEV_TICKET_COLOR = TICKET_COLORS.THEME.blue;
const DEV_PLANS = [
	{
		date: new Date('2020-03-14'),
		dayPlans: [],
	},
	{
		date: new Date('2020-03-15'),
		dayPlans: [],
	},
	{
		date: new Date('2020-03-16'),
		dayPlans: [],
	},
	{
		date: new Date('2020-03-17'),
		dayPlans: [],
	},
	{
		date: new Date('2020-03-18'),
		dayPlans: [],
	},
];

interface ITicketViewScreenProps extends IVSPScreenProps {}

/**
 * TicketViewScreen
 */
export default class TicketViewScreen extends React.Component<
	ITicketViewScreenProps
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
						<VSPTextButton
							icon='leftarrow'
							theme='white'
							fontSize={28}
							onPress={() => {
								navigation.pop();
							}}
						/>
					}
					headerRight={
						<VSPTextButton
							icon='more'
							theme='white'
							fontSize={28}
						/>
					}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			headerView: {
				height: HORIZONTAL_UNIT(40),
				backgroundColor: DEV_TICKET_COLOR,
			},

			bottomView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
			},

			profilesView: {
				flexDirection: 'row',
				marginHorizontal: VSP_EDGE_PADDING,
				marginBottom: HORIZONTAL_UNIT(),
				zIndex: 1,
			},

			stackedProfile: {
				left: HORIZONTAL_UNIT(-3 * 1),
				zIndex: 1,
			},

			bodyCapView: {
				position: 'absolute',
				bottom: 0,
				height: HORIZONTAL_UNIT(5),
				width: '100%',
				backgroundColor: THEME_COLORS.white,
			},

			bodyView: {
				flex: 1,
				backgroundColor: THEME_COLORS.white,
				paddingTop: VSP_TOP_PADDING,
			},
		});

		return (
			<VSPContainer>
				<View style={style.headerView}>
					<View style={style.bottomView}>
						<View style={style.profilesView}>
							<VSPProfile />
							<VSPProfile style={style.stackedProfile} />
						</View>
						<View style={style.bodyCapView} />
					</View>
				</View>
				<View style={style.bodyView}>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						color={DEV_TICKET_COLOR}
						fontWeight='bold'
						marginX={VSP_EDGE_PADDING}
						marginBottom={HORIZONTAL_UNIT(2)}
					>
						{'나혼자 여행갈꼬얌'}
					</VSPText>
					<ScrollView>
						<PackingList ticketColor={DEV_TICKET_COLOR} />
						<PlanTimeline
							plans={DEV_PLANS}
							ticketColor={DEV_TICKET_COLOR}
						/>
					</ScrollView>
				</View>
			</VSPContainer>
		);
	}
}
