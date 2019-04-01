import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import { THEME_COLORS } from '../../types/lib/theme';
import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';
import {
	Packings,
	PackingItem,
	IndividualPacking,
} from '../../types/data/ticket/packing';

import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPCheckbox from '../../components/vsp-checkbox';

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
				paddingLeft: HORIZONTAL_UNIT(5),
				marginTop: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<View>
				<VSPExpandable
					header={
						<VSPText
							frontIcon='teamwork'
							color={this.props.ticketColor}
							fontSize={THEME_HEADER_FONTSIZE}
						>
							공통
						</VSPText>
					}
					body={
						<View>
							{packings.commonList.map(
								(item: PackingItem, index: number) => (
									<View key={index} style={style.packingItem}>
										<VSPCheckbox
											marginRight={HORIZONTAL_UNIT(2)}
											color={THEME_COLORS.grey}
										/>
										<VSPText color={THEME_COLORS.grey}>
											{item.name}
										</VSPText>
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
								<Avatar
									size={HORIZONTAL_UNIT(5)}
									containerStyle={{
										marginRight: HORIZONTAL_UNIT(),
									}}
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
												color={THEME_COLORS.grey}
												marginRight={HORIZONTAL_UNIT(2)}
											/>
											<VSPText color={THEME_COLORS.grey}>
												{item.name}
											</VSPText>
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
		return (
			<View>
				<VSPText frontIcon='backpack' fontSize={THEME_HEADER_FONTSIZE}>
					준비물품
				</VSPText>
				{this._renderPackings(this.props.packings)}
			</View>
		);
	}
}
