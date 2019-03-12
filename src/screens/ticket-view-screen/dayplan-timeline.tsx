import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import { DayPlans, Plan, DayPlan } from '../../types/data/ticket/plan';
import { IconName } from '../../types/lib/icon';
import { CURRENCY } from '../../types/data/currency';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPDivider from '../../components/vsp-divider';

interface IPlanTimelineProps {
	/**
	 * Theme color of the ticket
	 */
	ticketColor: string;

	/**
	 * Plans of the ticket
	 */
	dayPlans: DayPlans;
}

/**
 * PlanTimeline
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
 * - ```plans```(required): Plans of the ticket
 */
export default class PlanTimeline extends React.Component<IPlanTimelineProps> {
	private _renderPlanTitle(plan: Plan) {
		const style = StyleSheet.create({
			container: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			bulletDash: {
				height: HORIZONTAL_UNIT(),
				width: HORIZONTAL_UNIT(3),
				borderRadius: HORIZONTAL_UNIT(),
				marginLeft: HORIZONTAL_UNIT(3),
				marginRight: HORIZONTAL_UNIT(2),
				backgroundColor: this.props.ticketColor,
			},
		});

		let icon: IconName = 'information';

		switch (plan.type) {
			case 'MEAL':
				icon = 'dinner';
				break;
			case 'REST':
				icon = 'bed';
				break;
			case 'TRAVEL':
				plan.mean === 'automobile' && (icon = 'car');
				plan.mean === 'bike' && (icon = 'bicycle');
				plan.mean === 'bus' && (icon = 'bus');
				plan.mean === 'motorcycle' && (icon = 'motorbike');
				plan.mean === 'plane' && (icon = 'plane');
				plan.mean === 'ship' && (icon = 'boat');
				plan.mean === 'subway' && (icon = 'subway');
				plan.mean === 'taxi' && (icon = 'taxi');
				plan.mean === 'train' && (icon = 'train');
				plan.mean === 'tram' && (icon = 'tram');
				plan.mean === 'walk' && (icon = 'walk');
				break;
			case 'ACTIVITY':
				icon = 'campingtent';
				break;
			case 'SIGHTSEEING':
				icon = 'egyptpyramid';
				break;
		}

		return (
			<View style={style.container}>
				<View style={style.headerView}>
					<View style={style.bulletDash} />
					<VSPText frontIcon={icon} marginLeft={HORIZONTAL_UNIT()}>
						{plan.title}
					</VSPText>
				</View>
				<VSPText fontSize={THEME_MINOR_FONTSIZE} theme='grey'>
					{plan.time.at.toLocaleString(DateTime.TIME_SIMPLE)}
				</VSPText>
			</View>
		);
	}

	private _renderPlanDetail(plan: Plan) {
		const style = StyleSheet.create({
			container: {
				marginTop: HORIZONTAL_UNIT(2),
				paddingLeft: HORIZONTAL_UNIT(11),
			},
		});

		return (
			<View>
				{'atPlace' in plan && plan.atPlace !== undefined && (
					<View style={style.container}>
						<VSPText
							frontIcon='placeholder'
							fontSize={THEME_MINOR_FONTSIZE}
							theme='grey'
						>
							{plan.atPlace}
						</VSPText>
					</View>
				)}
				{'move' in plan && (
					<View style={style.container}>
						<View style={{ flexDirection: 'row' }}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								marginRight={HORIZONTAL_UNIT(2)}
								fontWeight='bold'
								theme='grey'
							>
								FROM
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{plan.move.from}
							</VSPText>
						</View>
						<VSPIcon
							iconName='downarrow'
							theme='grey'
							size={THEME_MINOR_FONTSIZE}
							marginY={HORIZONTAL_UNIT()}
						/>
						<View style={{ flexDirection: 'row' }}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								marginRight={HORIZONTAL_UNIT(2)}
								fontWeight='bold'
								theme='grey'
							>
								TO
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{plan.move.to}
							</VSPText>
						</View>
					</View>
				)}
				{'cost' in plan && plan.cost !== undefined && (
					<View style={style.container}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<VSPText
								frontIcon='money'
								fontSize={THEME_MINOR_FONTSIZE}
								marginRight={HORIZONTAL_UNIT()}
								theme='grey'
								fontWeight='bold'
							>
								{plan.cost.currency}
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{plan.cost.currency in CURRENCY
									? `${
											CURRENCY[plan.cost.currency]
												.symbol_native
									  } ${plan.cost.value.toLocaleString()}`
									: `$ ${plan.cost.value.toLocaleString()}`}
							</VSPText>
						</View>
						{plan.cost.currency in CURRENCY && (
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{`(${CURRENCY[plan.cost.currency].name})`}
							</VSPText>
						)}
					</View>
				)}
				{plan.note !== undefined &&
					plan.note.map((note: string, index: number) => (
						<View key={index} style={style.container}>
							<VSPText
								frontIcon='information'
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
								style={{
									flex: 1,
									textAlign: 'justify',
								}}
							>
								{note}
							</VSPText>
						</View>
					))}
			</View>
		);
	}

	private _renderEndTime(plan: Plan) {
		return (
			<VSPDivider
				text={
					plan.time.end !== undefined
						? plan.time.end.toLocaleString(DateTime.TIME_SIMPLE)
						: undefined
				}
				fontSize={THEME_MINOR_FONTSIZE}
				theme='grey'
				orientation='far-right'
				marginTop={HORIZONTAL_UNIT()}
				marginLeft={HORIZONTAL_UNIT(8)}
			/>
		);
	}

	private _renderDayPlans() {
		const style = StyleSheet.create({
			container: {
				marginTop: HORIZONTAL_UNIT(4),
			},

			itemContainer: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			dayplanView: {
				marginVertical: HORIZONTAL_UNIT(2),
				alignItems: 'stretch',
			},

			bulletLine: {
				height: '100%',
				width: HORIZONTAL_UNIT(2),
				position: 'absolute',
				left: HORIZONTAL_UNIT(2),
				bottom: -HORIZONTAL_UNIT(),
				backgroundColor: this.props.ticketColor,
			},

			bottomCap: {
				height: HORIZONTAL_UNIT(2),
				width: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(),
				borderBottomLeftRadius: HORIZONTAL_UNIT(),
				marginLeft: HORIZONTAL_UNIT(2),
				backgroundColor: this.props.ticketColor,
			},

			bulletDot: {
				height: HORIZONTAL_UNIT(6),
				width: HORIZONTAL_UNIT(6),
				borderRadius: HORIZONTAL_UNIT(3),
				marginRight: HORIZONTAL_UNIT(2),
				backgroundColor: this.props.ticketColor,
			},
		});

		return (
			<View style={style.container}>
				{this.props.dayPlans.map((dayPlan: DayPlan, index: number) => (
					<View key={dayPlan.date.toISO()}>
						<View style={style.bulletLine} />
						<VSPExpandable
							marginTop={index === 0 ? 0 : HORIZONTAL_UNIT(4)}
							header={
								<View style={style.itemContainer}>
									<View style={style.bulletDot} />
									<VSPText color={this.props.ticketColor}>
										{dayPlan.date.toLocaleString(
											DateTime.DATE_FULL,
										)}
									</VSPText>
								</View>
							}
							body={
								<View>
									{dayPlan.plans.map(
										(plan: Plan, index: number) => (
											<View
												key={index}
												style={style.dayplanView}
											>
												{this._renderPlanTitle(plan)}
												{this._renderPlanDetail(plan)}
												{this._renderEndTime(plan)}
											</View>
										),
									)}
								</View>
							}
							color={this.props.ticketColor}
						/>
					</View>
				))}
				<View style={style.bottomCap} />
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			categoryView: {
				marginVertical: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
				borderRadius: HORIZONTAL_UNIT(2),
				padding: HORIZONTAL_UNIT(4),
				marginHorizontal: VSP_EDGE_PADDING,
				...addShadowProperties(),
			},
		});

		return (
			<View style={style.categoryView}>
				<VSPText frontIcon='planning' fontSize={THEME_HEADER_FONTSIZE}>
					일정
				</VSPText>
				{this._renderDayPlans()}
			</View>
		);
	}
}
