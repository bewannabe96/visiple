import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { Period } from '../../types/data/datetime';
import { THEME_COLORS } from '../../types/lib/theme';
import { Action, EMPTY_ACTION } from '../../types/lib/redux';

import SelectPeriodModal, { FromToTab } from './select-period-modal';

export interface IPeriodSelectorProps {
	/**
	 * Theme color
	 */
	color: string;

	/**
	 * Period of the ticket
	 */
	period: Period;

	// ACTION CREATORS
	setFromDate?: Action;
	setToDate?: Action;
}

/**
 * PeriodSelector
 *
 * @property
 * - ```color```: Theme color
 * - ```period```: Period of the ticket
 *
 * @actionCreator
 * - ```setFromDate```
 * - ```setToDate```
 */
export default class PeriodSelector extends React.Component<
	IPeriodSelectorProps
> {
	public static defaultProps: IPeriodSelectorProps = {
		color: THEME_COLORS.oceanBlue,
		period: { from: DateTime.local(), to: DateTime.local() },
		setFromDate: EMPTY_ACTION,
		setToDate: EMPTY_ACTION,
	};

	public state = {
		isModalVisible: false,
		fromtoTab: 'from-tab' as FromToTab,
	};

	private _openModalWithFromtab = () => {
		this.setState({
			...this.state,
			isModalVisible: true,
			fromtoTab: 'from-tab' as FromToTab,
		});
	};

	private _openModalWithTotab = () => {
		this.setState({
			...this.state,
			isModalVisible: true,
			fromtoTab: 'to-tab' as FromToTab,
		});
	};

	private _closeModal = () => {
		this.setState({ ...this.state, isModalVisible: false });
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
					isVisible={this.state.isModalVisible}
					initalTab={this.state.fromtoTab}
					closeAction={this._closeModal}
					color={this.props.color}
					period={this.props.period}
					setFromDate={this.props.setFromDate!}
					setToDate={this.props.setToDate!}
				/>
			</View>
		);
	}
}
