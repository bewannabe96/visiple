import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { DateTime } from 'luxon';

import { HORIZONTAL_UNIT } from '../../types/lib/size';
import { Period } from '../../types/data/datetime';

import VSPText from '../../components/vsp-text';

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
		});

		return (
			<View style={style.periodView}>
				<TouchableOpacity
					style={{ flex: 2 }}
					activeOpacity={0.6}
					onPress={this._openModalWithFromtab}
				>
					<VSPText
						marginVertical={HORIZONTAL_UNIT()}
						color={this.props.themeColor}
					>
						{this.props.period.from.toLocaleString(
							DateTime.DATE_MED,
						)}
					</VSPText>
					<VSPText color={this.props.themeColor}>
						{`${this.props.period.from.toLocaleString(
							DateTime.TIME_24_SIMPLE,
						)} (${this.props.period.from.offsetNameShort})`}
					</VSPText>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ flex: 2 }}
					activeOpacity={0.6}
					onPress={this._openModalWithTotab}
				>
					<VSPText
						marginVertical={HORIZONTAL_UNIT()}
						color={this.props.themeColor}
					>
						{this.props.period.to.toLocaleString(DateTime.DATE_MED)}
					</VSPText>
					<VSPText color={this.props.themeColor}>
						{`${this.props.period.to.toLocaleString(
							DateTime.TIME_24_SIMPLE,
						)} (${this.props.period.to.offsetNameShort})`}
					</VSPText>
				</TouchableOpacity>
			</View>
		);
	}
}
