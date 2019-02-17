import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPCheckbox from '../../components/vsp-checkbox';

interface IPackingListProps {
	/**
	 * Theme color of the ticket
	 */
	ticketColor: string;
}

/**
 * PackingList
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
 */
export default class PackingList extends React.Component<IPackingListProps> {
	private _renderPackingList() {
		const style = StyleSheet.create({
			packingItem: {
				flexDirection: 'row',
				alignItems: 'center',
				paddingLeft: VSP_EDGE_PADDING,
				marginTop: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<VSPExpandable
				header={
					<View style={{ flexDirection: 'row' }}>
						<VSPIcon
							iconName='teamwork'
							size={THEME_HEADER_FONTSIZE}
							marginRight={HORIZONTAL_UNIT()}
							color={this.props.ticketColor}
						/>
						<VSPText
							color={this.props.ticketColor}
							fontSize={THEME_HEADER_FONTSIZE}
						>
							공통
						</VSPText>
					</View>
				}
				body={
					<View>
						<View style={style.packingItem}>
							<VSPCheckbox marginRight={HORIZONTAL_UNIT(2)} />
							<VSPText>커피포트</VSPText>
						</View>
						<View style={style.packingItem}>
							<VSPCheckbox marginRight={HORIZONTAL_UNIT(2)} />
							<VSPText>요가메트</VSPText>
						</View>
						<View style={style.packingItem}>
							<VSPCheckbox marginRight={HORIZONTAL_UNIT(2)} />
							<VSPText>헬멧</VSPText>
						</View>
					</View>
				}
				color={this.props.ticketColor}
				marginTop={HORIZONTAL_UNIT(4)}
			/>
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
						iconName='backpack'
						size={THEME_HEADER_FONTSIZE}
						theme='oceanBlue'
					/>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						marginLeft={HORIZONTAL_UNIT(2)}
					>
						준비물품
					</VSPText>
				</View>
				{this._renderPackingList()}
			</View>
		);
	}
}
