import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import {
	formatDateString,
	formatISODate,
	formatTimeString,
} from '../../types/lib/date';
import { Plans, Plan, DayPlan } from '../../types/data/ticket/plan';
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
	plans: Plans;
}

/**
 * PlanTimeline
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
 * - ```plans```(required): Plans of the ticket
 */
export default class PlanTimeline extends React.Component<IPlanTimelineProps> {
	private _renderDayPlanTitle(dayPlan: DayPlan) {
		const style = StyleSheet.create({
			rowView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
			},

			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			textView: {
				flexDirection: 'row',
				alignItems: 'flex-end',
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

		switch (dayPlan.type) {
			case 'MEAL':
				icon = 'dinner';
				break;
			case 'REST':
				icon = 'bed';
				break;
			case 'TRAVEL':
				dayPlan.mean === 'automobile' && (icon = 'car');
				dayPlan.mean === 'bike' && (icon = 'bicycle');
				dayPlan.mean === 'bus' && (icon = 'bus');
				dayPlan.mean === 'motorcycle' && (icon = 'motorbike');
				dayPlan.mean === 'plane' && (icon = 'plane');
				dayPlan.mean === 'ship' && (icon = 'boat');
				dayPlan.mean === 'subway' && (icon = 'subway');
				dayPlan.mean === 'taxi' && (icon = 'taxi');
				dayPlan.mean === 'train' && (icon = 'train');
				dayPlan.mean === 'tram' && (icon = 'tram');
				dayPlan.mean === 'walk' && (icon = 'walk');
				break;
			case 'ACTIVITY':
				icon = 'campingtent';
				break;
			case 'SIGHTSEEING':
				icon = 'egyptpyramid';
				break;
		}

		return (
			<View style={style.rowView}>
				<View style={style.headerView}>
					<View style={style.bulletDash} />
					<View style={style.textView}>
						<VSPIcon iconName={icon} />
						<VSPText marginLeft={HORIZONTAL_UNIT()}>
							{dayPlan.title}
						</VSPText>
					</View>
				</View>
				<View style={style.textView}>
					<VSPText fontSize={THEME_MINOR_FONTSIZE} theme='grey'>
						{formatTimeString(dayPlan.time.at)}
					</VSPText>
				</View>
			</View>
		);
	}

	private _renderDayPlanDetail(dayPlan: DayPlan) {
		const style = StyleSheet.create({
			rowView: {
				flexDirection: 'row',
				alignItems: 'flex-start',
				marginTop: HORIZONTAL_UNIT(2),
				paddingLeft: HORIZONTAL_UNIT(11),
				paddingRight: HORIZONTAL_UNIT(2),
			},

			fromtoFixedView: {
				alignItems: 'flex-end',
			},

			fromtoView: {
				marginLeft: HORIZONTAL_UNIT(),
			},
		});

		return (
			<View>
				{'atPlace' in dayPlan && dayPlan.atPlace !== undefined && (
					<View style={style.rowView}>
						<VSPIcon
							iconName='placeholder'
							theme='grey'
							size={THEME_MINOR_FONTSIZE}
						/>
						<VSPText
							marginLeft={HORIZONTAL_UNIT()}
							fontSize={THEME_MINOR_FONTSIZE}
						>
							{dayPlan.atPlace}
						</VSPText>
					</View>
				)}
				{'move' in dayPlan && (
					<View style={style.rowView}>
						<View style={style.fromtoFixedView}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								fontWeight='bold'
								theme='grey'
							>
								FROM
							</VSPText>
							<VSPIcon
								iconName='downarrow'
								theme='grey'
								size={THEME_MINOR_FONTSIZE}
								marginY={HORIZONTAL_UNIT()}
							/>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								fontWeight='bold'
								theme='grey'
							>
								TO
							</VSPText>
						</View>
						<View style={style.fromtoView}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{dayPlan.move.from}
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
								marginTop={
									THEME_MINOR_FONTSIZE + HORIZONTAL_UNIT(2)
								}
							>
								{dayPlan.move.to}
							</VSPText>
						</View>
					</View>
				)}
				{'cost' in dayPlan && dayPlan.cost !== undefined && (
					<View style={style.rowView}>
						<VSPIcon
							iconName='money'
							theme='grey'
							size={THEME_MINOR_FONTSIZE}
							marginRight={HORIZONTAL_UNIT()}
						/>
						<View
							style={{
								flex: 1,
								alignItems: 'stretch',
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<VSPText
									fontSize={THEME_MINOR_FONTSIZE}
									marginRight={HORIZONTAL_UNIT()}
									theme='grey'
									fontWeight='bold'
								>
									{dayPlan.cost.currency}
								</VSPText>
								{dayPlan.cost.currency in CURRENCY && (
									<VSPText
										fontSize={THEME_MINOR_FONTSIZE}
										theme='grey'
									>
										{`(${
											CURRENCY[dayPlan.cost.currency].name
										})`}
									</VSPText>
								)}
							</View>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
								style={{
									textAlign: 'right',
								}}
							>
								{dayPlan.cost.currency in CURRENCY
									? dayPlan.cost.value.toLocaleString(
											undefined,
											{
												style: 'currency',
												currency: dayPlan.cost.currency,
											},
									  )
									: `$${dayPlan.cost.value.toLocaleString()}`}
							</VSPText>
						</View>
					</View>
				)}
				{dayPlan.note !== undefined &&
					dayPlan.note.map((note: string, index: number) => (
						<View key={index} style={style.rowView}>
							<VSPIcon
								iconName='information'
								theme='grey'
								size={THEME_MINOR_FONTSIZE}
							/>
							<VSPText
								marginLeft={HORIZONTAL_UNIT()}
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

	private _renderEndTime(dayPlan: DayPlan) {
		return (
			<VSPDivider
				text={
					dayPlan.time.end !== undefined
						? formatTimeString(dayPlan.time.end)
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

	private _renderPlans() {
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
				{this.props.plans.map((plan: Plan, index: number) => (
					<View key={formatISODate(plan.date)}>
						<View style={style.bulletLine} />
						<VSPExpandable
							marginTop={index === 0 ? 0 : HORIZONTAL_UNIT(4)}
							header={
								<View style={style.itemContainer}>
									<View style={style.bulletDot} />
									<VSPText color={this.props.ticketColor}>
										{formatDateString(plan.date)}
									</VSPText>
								</View>
							}
							body={
								<View>
									{plan.dayPlans.map(
										(dayPlan: DayPlan, index: number) => (
											<View
												key={index}
												style={style.dayplanView}
											>
												{this._renderDayPlanTitle(
													dayPlan,
												)}
												{this._renderDayPlanDetail(
													dayPlan,
												)}
												{this._renderEndTime(dayPlan)}
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

			categoryTitleView: {
				flexDirection: 'row',
			},
		});

		return (
			<View style={style.categoryView}>
				<View style={style.categoryTitleView}>
					<VSPIcon iconName='planning' size={THEME_HEADER_FONTSIZE} />
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						marginLeft={HORIZONTAL_UNIT(2)}
					>
						일정
					</VSPText>
				</View>
				{this._renderPlans()}
			</View>
		);
	}
}
