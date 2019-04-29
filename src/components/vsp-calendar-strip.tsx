import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { DateTime } from 'luxon';

import { IVSPMarginProps } from '../types/props/vsp-margin';
import { THEME_COLORS, RawColor } from '../types/lib/theme';
import { Period } from '../types/data/datetime';
import { THEME_HEADER_FONTSIZE, HORIZONTAL_UNIT } from '../types/lib/size';

interface IVSPCalendarStripProps {
	/**
	 * Period of the calendar
	 */
	period: Period;

	/**
	 * Theme color of the VSPCalendarStrip
	 */
	color?: RawColor;
}

/**
 * VSPCalendarStrip
 *
 * @property
 * - ```period```(required): Period of the calendar
 * - ```color```: Theme color of the VSPCalendarStrip (by default ```THEME_COLORS.oceanBlue```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPCalendarStrip extends React.Component<
	IVSPMarginProps<IVSPCalendarStripProps>
> {
	private _scrollView: ScrollView | null = null;
	private _MAX_WEEKS: number = 0;
	private _MONTHS: string[] = [];

	public static defaultProps = {
		color: THEME_COLORS.oceanBlue,
	};

	public state = {
		firstTrigger: true,
		dayTextWidth: 0,
		currentWeek: 0,
		currentDate: this.props.period!.from,
	};

	private _previousWeek = () => {
		if (this.state.currentWeek <= 0) return;

		let changedWeek = this.state.currentWeek - 1;
		if (this._scrollView)
			this._scrollView.scrollTo({
				x: changedWeek * this.state.dayTextWidth * 7,
				y: 0,
				animated: true,
			});

		this.setState({
			...this.state,
			currentWeek: changedWeek,
		});
	};

	private _nextWeek = () => {
		if (this.state.currentWeek >= this._MAX_WEEKS) return;

		let changedWeek = this.state.currentWeek + 1;
		if (this._scrollView)
			this._scrollView.scrollTo({
				x: changedWeek * this.state.dayTextWidth * 7,
				y: 0,
				animated: true,
			});

		this.setState({
			...this.state,
			currentWeek: changedWeek,
		});
	};

	public render() {
		const style = StyleSheet.create({
			dateItem: {
				justifyContent: 'center',
				alignItems: 'center',
				width: this.state.dayTextWidth,
				height: this.state.dayTextWidth,
				borderRadius: HORIZONTAL_UNIT(),
			},
		});

		let minDisplayDate = this.props.period!.from.plus({
			days: -this.props.period!.from.weekday + 1,
		});
		let maxDisplayDate = this.props.period!.to.plus({
			days: 7 - this.props.period!.to.weekday,
		});
		this._MAX_WEEKS =
			minDisplayDate.until(maxDisplayDate).count('days') / 7 - 1;

		for (
			let i = 0, p = minDisplayDate;
			i <= this._MAX_WEEKS;
			i++, p = p.plus({ days: 7 })
		) {
			let endDay = p.plus({ days: 6 });
			let startMonth = p.month;
			let endMonth = endDay.month;
			let startYear = p.year;
			let endYear = endDay.year;

			let title = `${startYear}년 `;
			title += `${startMonth}월`;
			if (startYear != endYear) {
				title += ` / ${endYear}년 ${endMonth}월`;
			} else if (startMonth != endMonth) {
				title += ` / ${endMonth}월`;
			}

			this._MONTHS.push(title);
		}

		let dateItems: Element[] = [];
		for (
			let p = minDisplayDate;
			p <= maxDisplayDate;
			p = p.plus({ days: 1 })
		) {
			if (p >= this.props.period!.from && p <= this.props.period!.to) {
				let isActive = +p === +this.state.currentDate;
				dateItems.push(
					<TouchableOpacity
						key={p.toISODate()}
						style={{
							...style.dateItem,
							backgroundColor: isActive
								? this.props.color
								: THEME_COLORS.none,
						}}
						activeOpacity={0.6}
						disabled={isActive}
						onPress={() => {
							this.setState({
								...this.state,
								currentDate: p,
							});
						}}
					>
						<Text
							h3
							style={{
								color: isActive
									? THEME_COLORS.white
									: THEME_COLORS.grey,
							}}
						>
							{p.weekdayShort}
						</Text>
						<Text
							h2
							style={{
								color: isActive
									? THEME_COLORS.white
									: THEME_COLORS.grey,
							}}
						>
							{p.day}
						</Text>
					</TouchableOpacity>,
				);
			} else {
				dateItems.push(
					<View key={p.toISODate()} style={style.dateItem}>
						<Text
							h3
							style={{
								color: THEME_COLORS.greyWhite,
							}}
						>
							{p.weekdayShort}
						</Text>
						<Text h2 style={{ color: THEME_COLORS.greyWhite }}>
							{p.day}
						</Text>
					</View>,
				);
			}
		}

		return (
			<View
				onLayout={event => {
					this.state.firstTrigger &&
						this.setState({
							firstTrigger: false,
							dayTextWidth: event.nativeEvent.layout.width / 7,
						});
				}}
			>
				<View />
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: HORIZONTAL_UNIT(2),
						paddingHorizontal: HORIZONTAL_UNIT(),
					}}
				>
					<Icon
						name='angle-left'
						type='vspicon'
						size={THEME_HEADER_FONTSIZE}
						color={
							this.state.currentWeek <= 0
								? THEME_COLORS.greyWhite
								: THEME_COLORS.black
						}
						onPress={this._previousWeek}
					/>
					<Text h2>{this._MONTHS[this.state.currentWeek]}</Text>
					<Icon
						name='angle-right'
						type='vspicon'
						size={THEME_HEADER_FONTSIZE}
						color={
							this.state.currentWeek >= this._MAX_WEEKS
								? THEME_COLORS.greyWhite
								: THEME_COLORS.black
						}
						onPress={this._nextWeek}
					/>
				</View>
				<ScrollView
					ref={element => {
						this._scrollView = element;
					}}
					showsHorizontalScrollIndicator={false}
					horizontal
					scrollEnabled={false}
				>
					{dateItems}
				</ScrollView>
			</View>
		);
	}
}
