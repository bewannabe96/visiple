import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	VSP_EDGE_PADDING,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import {
	Packings,
	PackingItem,
	IndividualPacking,
} from '../../types/data/ticket/packing';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPCheckbox from '../../components/vsp-checkbox';
import VSPProfile from '../../components/vsp-profile';

interface IPackingListProps {
	/**
	 * Theme color of the ticket
	 */
	ticketColor: string;

	/**
	 * Packing lists of the ticket
	 */
	packings: Packings;
}

/**
 * PackingList
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
 * - ```packings```(required): Packing lists of the ticket
 */
export default class PackingList extends React.Component<IPackingListProps> {
	private _renderPackings(packings: Packings) {
		const style = StyleSheet.create({
			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			packingItem: {
				flexDirection: 'row',
				alignItems: 'center',
				paddingLeft: VSP_EDGE_PADDING,
				marginTop: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<View>
				<VSPExpandable
					header={
						<View style={style.headerView}>
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
							{packings.commonList.map(
								(item: PackingItem, index: number) => (
									<View key={index} style={style.packingItem}>
										<VSPCheckbox
											marginRight={HORIZONTAL_UNIT(2)}
										/>
										<VSPText>{item.name}</VSPText>
									</View>
								),
							)}
						</View>
					}
					color={this.props.ticketColor}
					marginTop={HORIZONTAL_UNIT(4)}
				/>
				{packings.indivLists.map((indivList: IndividualPacking) => (
					<VSPExpandable
						key={indivList.user}
						header={
							<View style={style.headerView}>
								<VSPProfile
									size={HORIZONTAL_UNIT(6)}
									marginRight={HORIZONTAL_UNIT()}
								/>
								<VSPText
									color={this.props.ticketColor}
									fontSize={THEME_HEADER_FONTSIZE}
								>
									{indivList.user}
								</VSPText>
							</View>
						}
						body={
							<View>
								{indivList.list.map(
									(item: PackingItem, index: number) => (
										<View
											key={index}
											style={style.packingItem}
										>
											<VSPCheckbox
												marginRight={HORIZONTAL_UNIT(2)}
											/>
											<VSPText>{item.name}</VSPText>
										</View>
									),
								)}
							</View>
						}
						color={this.props.ticketColor}
						marginTop={HORIZONTAL_UNIT(4)}
					/>
				))}
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
				{this._renderPackings(this.props.packings)}
			</View>
		);
	}
}
