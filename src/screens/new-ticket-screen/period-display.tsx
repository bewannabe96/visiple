import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import { Period } from '../../types/data/datetime';
import { THEME_COLORS } from '../../types/lib/theme';

import {
	openPeriodModal,
	switchFromToTab,
} from '../../actions/screens/new-ticket-screen';

export interface IPeriodDisplayProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	/**
	 * Period of the ticket
	 */
	period: Period;

	// ACTION CREATORS
	openPeriodModal: typeof openPeriodModal;
	switchFromToTab: typeof switchFromToTab;
}

/**
 * PeriodDisplay
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 * - ```period```(required): Period of the ticket
 */
export default class PeriodDisplay extends React.Component<
	IPeriodDisplayProps
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
				flex: 2,
				alignItems: 'center',
				borderWidth: 1,
				borderColor: this.props.themeColor,
				paddingVertical: HORIZONTAL_UNIT(2),
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				marginTop: HORIZONTAL_UNIT(),
			},

			valueText: {
				color: this.props.themeColor,
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
							h2
							style={{
								color: this.props.themeColor,
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
							h2
							style={{
								color: this.props.themeColor,
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
			</View>
		);
	}
}
