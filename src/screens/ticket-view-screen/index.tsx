import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
	VSP_TOP_PADDING,
} from '../../types/lib/size';
import { Ticket } from '../../types/data/ticket';
import { TICKET_THEME_COLORS } from '../../types/data/ticket/theme';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';

import PlanTimeline from './plan-timeline';
import PackingList from './packing-list';
import ParticipantsList from './participants-list';
import VSPHeaderButton from '../../components/vsp-header-button';

const DEV_TICKET: Ticket = {
	id: 1,
	title: '나혼자 여행갈꼬얌',
	owner: '0001',
	participants: ['0001', '0002'],
	themeColor: TICKET_THEME_COLORS.blue,
	period: {
		from: new Date('2020-03-14'),
		to: new Date('2020-03-18'),
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
				user: '0001',
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
				user: '0002',
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
	plans: [
		{
			date: new Date('2020-03-14'),
			dayPlans: [
				{
					type: 'REST',
					title: 'test',
					time: {
						at: new Date(2020, 2, 14, 9, 30),
					},
					category: 'wake',
					atPlace: 'test',
				},
				{
					type: 'MEAL',
					title: 'meal test',
					time: {
						at: new Date(2020, 2, 14, 10, 30),
						end: new Date(2020, 2, 14, 11, 30),
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
						at: new Date(2020, 2, 14, 12, 0),
						end: new Date(2020, 2, 14, 13, 30),
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
						at: new Date(2020, 2, 14, 13, 40),
					},
					atPlace: 'what',
				},
				{
					type: 'SIGHTSEEING',
					title: 'meal test',
					time: {
						at: new Date(2020, 2, 14, 17, 0),
						end: new Date(2020, 2, 14, 19, 0),
					},
					note: [
						'타투컨벤션장 입장조건: 샌들, 반바지 금지타투컨벤션장 입장조건: 샌들, 반바지 금지',
					],
				},
			],
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
	],
};

interface ITicketViewScreenProps extends IVSPScreenProps {
	ticket: Ticket;
}

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
						<VSPHeaderButton
							icon='leftarrow'
							theme='white'
							onPress={() => {
								navigation.pop();
							}}
						/>
					}
					headerRight={<VSPHeaderButton icon='trash' theme='white' />}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			headerView: {
				height: HORIZONTAL_UNIT(40),
				backgroundColor: DEV_TICKET.themeColor,
			},

			bottomView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
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
						<ParticipantsList
							participants={DEV_TICKET.participants}
						/>
						<View style={style.bodyCapView} />
					</View>
				</View>
				<View style={style.bodyView}>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						color={DEV_TICKET.themeColor}
						fontWeight='bold'
						marginX={VSP_EDGE_PADDING}
						marginBottom={HORIZONTAL_UNIT(2)}
					>
						{DEV_TICKET.title}
					</VSPText>
					<ScrollView>
						<PackingList
							packings={DEV_TICKET.packings}
							ticketColor={DEV_TICKET.themeColor}
						/>
						<PlanTimeline
							plans={DEV_TICKET.plans}
							ticketColor={DEV_TICKET.themeColor}
						/>
					</ScrollView>
				</View>
			</VSPContainer>
		);
	}
}
