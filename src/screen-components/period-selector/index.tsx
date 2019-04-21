import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { Period } from '../../types/data/datetime';
import { THEME_COLORS } from '../../types/lib/theme';
import { Action } from '../../types/lib/redux';
import { FromToTab } from '../../types/redux/screens/new-ticket-screen';

import SelectPeriodModal from './select-period-modal';

export interface IPeriodSelectorProps {
	/**
	 * Theme color
	 */
	color: string;

	/**
	 * Period of the ticket
	 */
	period: Period;

	/**
	 * The modal is visible if true
	 */
	isModalVisible: boolean;

	/**
	 * Focused from/to tab
	 */
	fromtoTab: FromToTab;

	// ACTION CREATORS
	openPeriodModal: Action;
	switchFromToTab: Action;
	closePeriodModal: Action;
	setFromDate: Action;
	setToDate: Action;
}

/**
 * PeriodSelector
 *
 * @property
 * - ```color```(required): Theme color
 * - ```period```(required): Period of the ticket
 * - ```isModalVisible```(required):The modal is visible if true
 * - ```fromtoTab```(required): Focused from/to tab
 *
 * @actionCreator
 * - ```openPeriodModal```
 * - ```switchFromToTab```
 * - ```closePeriodModal```
 * - ```setFromDate```
 * - ```setToDate```
 */
export default class PeriodSelector extends React.Component<
	IPeriodSelectorProps
> {
	private _openModalWithFromtab = () => {
		this.props.switchFromToTab('from-tab');
		this.props.openPeriodModal();
	};

	private _openModalWithTotab = () => {
		this.props.switchFromToTab('to-tab');
		this.props.openPeriodModal();
	};

	public render() {
		const style = StyleSheet.create({
			periodView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			button: {
				flex: 1,
				alignItems: 'center',
				borderWidth: 1,
				borderColor: this.props.color,
				paddingVertical: HORIZONTAL_UNIT(3),
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				marginTop: HORIZONTAL_UNIT(),
			},

			valueText: {
				color: this.props.color,
				marginHorizontal: HORIZONTAL_UNIT(),
			},
		});

		return (
			<View>
				<View style={style.periodView}>
					<TouchableOpacity
						style={style.button}
						activeOpacity={0.6}
						onPress={this._openModalWithFromtab}
					>
						<Text
							h3
							style={{
								color: THEME_COLORS.grey,
							}}
						>
							{`${this.props.period.from.toLocaleString(
								DateTime.DATE_FULL,
							)}`}
						</Text>
					</TouchableOpacity>
					<Icon
						name='right-arrow'
						type='vspicon'
						size={THEME_HEADER_FONTSIZE}
						color={THEME_COLORS.grey}
						containerStyle={{
							marginHorizontal: HORIZONTAL_UNIT(2),
						}}
					/>
					<TouchableOpacity
						style={style.button}
						activeOpacity={0.6}
						onPress={this._openModalWithTotab}
					>
						<Text
							h3
							style={{
								color: THEME_COLORS.grey,
							}}
						>
							{`${this.props.period.to.toLocaleString(
								DateTime.DATE_FULL,
							)}`}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={style.footerView}>
					<Text h3 style={{ color: THEME_COLORS.grey }}>
						시간대
					</Text>
					<Text h3 style={style.valueText}>{`${
						this.props.period.to.offsetNameShort
					}`}</Text>
				</View>
				<SelectPeriodModal
					color={this.props.color}
					period={this.props.period}
					isVisible={this.props.isModalVisible}
					fromtoTab={this.props.fromtoTab}
					switchFromToTab={this.props.switchFromToTab}
					closePeriodModal={this.props.closePeriodModal}
					setFromDate={this.props.setFromDate}
					setToDate={this.props.setToDate}
				/>
			</View>
		);
	}
}
