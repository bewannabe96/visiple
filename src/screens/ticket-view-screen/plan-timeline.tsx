/** @format */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
	THEME_HEADER_FONTSIZE,
	THEME_COLORS,
	addShadowProperties,
} from '../../types/config/theme';
import {
	HORIZONTAL_UNIT,
	VERTICAL_UNIT,
	VSP_EDGE_PADDING,
} from '../../types/config/size';
import { formatDateString } from '../../types/lib/vsp-date';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';

interface PlanTimelineProps {
	// STATES
	plans: {}[];
	ticketColor: any;
}

/**
 * PlanTimeline
 */
export default class PlanTimeline extends React.Component<PlanTimelineProps> {
	_render_plans() {
		let style = StyleSheet.create({
			container: {
				marginTop: 4 * HORIZONTAL_UNIT,
			},

			itemContainer: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			bulletLine: {
				height: '100%',
				width: 2 * HORIZONTAL_UNIT,
				position: 'absolute',
				left: 2 * HORIZONTAL_UNIT,
				bottom: -HORIZONTAL_UNIT,
				backgroundColor: this.props.ticketColor,
			},

			bottomCap: {
				height: 2 * HORIZONTAL_UNIT,
				width: 2 * HORIZONTAL_UNIT,
				borderBottomRightRadius: HORIZONTAL_UNIT,
				borderBottomLeftRadius: HORIZONTAL_UNIT,
				marginLeft: 2 * HORIZONTAL_UNIT,
				backgroundColor: this.props.ticketColor,
			},

			bulletDot: {
				height: 6 * HORIZONTAL_UNIT,
				width: 6 * HORIZONTAL_UNIT,
				borderRadius: 3 * HORIZONTAL_UNIT,
				marginRight: 2 * HORIZONTAL_UNIT,
				backgroundColor: this.props.ticketColor,
			},

			bulletDash: {
				height: HORIZONTAL_UNIT,
				width: 3 * HORIZONTAL_UNIT,
				borderRadius: HORIZONTAL_UNIT,
				marginLeft: 3 * HORIZONTAL_UNIT,
				marginRight: 2 * HORIZONTAL_UNIT,
				backgroundColor: this.props.ticketColor,
			},
		});

		return (
			<View style={style.container}>
				{this.props.plans.map((plan: any, index: number) => (
					<View key={plan.date}>
						<View style={style.bulletLine} />
						<VSPExpandable
							marginTop={index === 0 ? 0 : 4 * HORIZONTAL_UNIT}
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
										<VSPText marginY={2 * HORIZONTAL_UNIT}>
											여행
										</VSPText>
									</View>
									<View style={style.itemContainer}>
										<View style={style.bulletDash} />
										<VSPText marginY={2 * HORIZONTAL_UNIT}>
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

	render() {
		let style = StyleSheet.create({
			categoryView: {
				marginVertical: 2 * VERTICAL_UNIT,
				backgroundColor: THEME_COLORS['grey-white'],
				borderRadius: 2 * VERTICAL_UNIT,
				padding: 4 * HORIZONTAL_UNIT,
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
						theme='ocean-blue'
					/>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						marginLeft={2 * HORIZONTAL_UNIT}
					>
						일정
					</VSPText>
				</View>
				{this._render_plans()}
			</View>
		);
	}
}
