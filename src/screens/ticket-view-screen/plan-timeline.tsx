import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { formatDateString, formatISODate } from '../../types/lib/date';
import { Plans, Plan } from '../../types/data/ticket/plan';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';

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
	private _renderPlans() {
		const style = StyleSheet.create({
			container: {
				marginTop: HORIZONTAL_UNIT(4),
			},

			itemContainer: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			bulletLine: {
				height: '100%',
				width: HORIZONTAL_UNIT(2),
				position: 'absolute',
				left: HORIZONTAL_UNIT(2),
				bottom: -HORIZONTAL_UNIT,
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

			bulletDash: {
				height: HORIZONTAL_UNIT(),
				width: HORIZONTAL_UNIT(3),
				borderRadius: HORIZONTAL_UNIT(),
				marginLeft: HORIZONTAL_UNIT(3),
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
									<View style={style.itemContainer}>
										<View style={style.bulletDash} />
										<VSPText marginY={HORIZONTAL_UNIT(2)}>
											여행
										</VSPText>
									</View>
									<View style={style.itemContainer}>
										<View style={style.bulletDash} />
										<VSPText marginY={HORIZONTAL_UNIT(2)}>
											여행
										</VSPText>
									</View>
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
				backgroundColor: THEME_COLORS.greyWhite,
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
					<VSPIcon
						iconName='planning'
						size={THEME_HEADER_FONTSIZE}
						theme='oceanBlue'
					/>
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
