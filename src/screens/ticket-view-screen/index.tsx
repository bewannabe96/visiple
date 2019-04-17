import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { Ticket } from '../../types/data/ticket';
import { TICKET_THEME_COLORS } from '../../types/data/ticket/theme';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import VSPHeaderButton from '../../components/vsp-header-button';
import VSPHeaderDropdown from '../../components/vsp-header-dropdown';

import PlanTimeline from './dayplan-timeline';
import PackingList from './packing-list';
import ParticipantsList from './participants-list';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const DEV_TICKET: Ticket = {
	id: 1,
	title: '나혼자 여행갈꼬얌',
	owner: 1,
	participants: [1, 2],
	themeColor: TICKET_THEME_COLORS.blue,
	period: {
		from: DateTime.local(2020, 3, 14),
		to: DateTime.local(2020, 3, 18),
	},
	packings: {
		commonList: [
			{
				name: 'Item1',
				ready: false,
			},
			{
				name: 'Item2',
				ready: true,
			},
		],
		indivLists: [
			{
				user: 1,
				list: [
					{
						name: 'Item3',
						ready: true,
					},
					{
						name: 'Item4',
						ready: false,
					},
				],
			},
			{
				user: 2,
				list: [
					{
						name: 'Item5',
						ready: false,
					},
					{
						name: 'Item6',
						ready: false,
					},
				],
			},
		],
	},
	dayPlans: [
		{
			date: DateTime.local(2020, 3, 14),
			plans: [
				{
					type: 'REST',
					title: 'test',
					time: {
						at: DateTime.local(2020, 3, 14, 9, 30),
					},
					category: 'wake',
					atPlace: 'test',
				},
				{
					type: 'MEAL',
					title: 'meal test',
					time: {
						at: DateTime.local(2020, 3, 14, 10, 30),
						end: DateTime.local(2020, 3, 14, 11, 30),
					},
					category: 'bar',
					cost: {
						value: 2000,
						currency: 'KRW',
					},
					note: [
						'타투컨벤션장 입장조건: 샌들, 반바지 금지타투컨벤션장 입장조건: 샌들, 반바지 금지',
						'second',
					],
				},
				{
					type: 'TRAVEL',
					title: 'test',
					time: {
						at: DateTime.local(2020, 3, 14, 12, 0),
						end: DateTime.local(2020, 3, 14, 13, 30),
					},
					mean: 'walk',
					move: {
						from: 'here',
						to: 'there',
					},
				},
				{
					type: 'ACTIVITY',
					title: 'activity test',
					time: {
						at: DateTime.local(2020, 3, 14, 13, 40),
					},
					atPlace: 'what',
				},
				{
					type: 'SIGHTSEEING',
					title: 'meal test',
					time: {
						at: DateTime.local(2020, 3, 14, 17, 30),
						end: DateTime.local(2020, 3, 14, 19, 30),
					},
					note: [
						'타투컨벤션장 입장조건: 샌들, 반바지 금지타투컨벤션장 입장조건: 샌들, 반바지 금지',
					],
				},
			],
		},
		{
			date: DateTime.local(2020, 3, 15),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 16),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 17),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 18),
			plans: [],
		},
	],
};

interface ITicketViewScreenProps {
	ticket: Ticket;
}

/**
 * TicketViewScreen
 */
export default class TicketViewScreen extends React.Component<
	IVSPScreenProps<ITicketViewScreenProps>
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
					headerRight={
						<VSPHeaderDropdown
							iconName='more'
							color={THEME_COLORS.white}
							contents={[
								{ title: '기록 생성' },
								{
									icon: {
										name: 'trash-can',
										type: 'vspicon',
									},
									title: '삭제',
								},
							]}
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
				justifyContent: 'flex-end',
				backgroundColor: DEV_TICKET.themeColor,
				padding: VSP_EDGE_PADDING,
			},

			bodyView: {
				flex: 1,
				backgroundColor: THEME_COLORS.white,
				paddingTop: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<VSPContainer>
				<View style={style.headerView}>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						color={THEME_COLORS.white}
					>
						{DEV_TICKET.title}
					</VSPText>
				</View>
				<View style={style.bodyView}>
					<ScrollableTabView
						tabBarActiveTextColor={THEME_COLORS.black}
						tabBarInactiveTextColor={THEME_COLORS.grey}
						tabBarUnderlineStyle={{
							height: 3,
							backgroundColor: THEME_COLORS.brown,
						}}
					>
						<ParticipantsList
							tabLabel='함께하는 친구'
							participants={DEV_TICKET.participants}
						/>
						<PackingList
							tabLabel='준비물품'
							packings={DEV_TICKET.packings}
							ticketColor={DEV_TICKET.themeColor}
						/>
						<PlanTimeline
							tabLabel='일정'
							dayPlans={DEV_TICKET.dayPlans}
							ticketColor={DEV_TICKET.themeColor}
						/>
					</ScrollableTabView>
				</View>
			</VSPContainer>
		);
	}
}
