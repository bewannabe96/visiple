import React from 'react';
import { View, FlatList } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';
import { TabProps } from 'react-native-scrollable-tab-view';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
	VSP_EDGE_PADDING,
} from '../../types/lib/size';
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
export default class PackingList extends React.Component<
	TabProps<IPackingListProps>
> {
	private _rendercommonList() {
		return (
			<VSPExpandable
				header={
					<View style={{ flexDirection: 'row' }}>
						<Icon
							name='team'
							type='vspicon'
							color={this.props.ticketColor}
							size={THEME_HEADER_FONTSIZE}
							containerStyle={{
								marginRight: HORIZONTAL_UNIT(),
							}}
						/>
						<Text h2>공통</Text>
					</View>
				}
				body={
					<View>
						{this.props.packings.commonList.map(
							(item: PackingItem, index: number) => (
								<VSPCheckbox
									key={index}
									marginRight={HORIZONTAL_UNIT(2)}
									color={THEME_COLORS.grey}
									marginTop={HORIZONTAL_UNIT(3)}
									marginLeft={HORIZONTAL_UNIT(5)}
								>
									<VSPText color={THEME_COLORS.grey}>
										{item.name}
									</VSPText>
								</VSPCheckbox>
							),
						)}
					</View>
				}
				color={this.props.ticketColor}
				expanded={true}
			/>
		);
	}

	private _renderIndivPacking({ item }: { item: IndividualPacking }) {
		return (
			<VSPExpandable
				key={item.user}
				header={
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
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
							{item.user}
						</VSPText>
					</View>
				}
				body={
					<View>
						{item.list.map((item: PackingItem, index: number) => (
							<VSPCheckbox
								key={index}
								marginRight={HORIZONTAL_UNIT(2)}
								color={THEME_COLORS.grey}
								marginTop={HORIZONTAL_UNIT(3)}
								marginLeft={HORIZONTAL_UNIT(5)}
							>
								<VSPText color={THEME_COLORS.grey}>
									{item.name}
								</VSPText>
							</VSPCheckbox>
						))}
					</View>
				}
				color={this.props.ticketColor}
				marginTop={HORIZONTAL_UNIT(5)}
				expanded={true}
			/>
		);
	}

	public render() {
		return (
			<FlatList
				data={this.props.packings.indivLists}
				keyExtractor={item => item.user.toString()}
				ListHeaderComponent={this._rendercommonList()}
				renderItem={this._renderIndivPacking.bind(this)}
				contentContainerStyle={{
					padding: VSP_EDGE_PADDING,
				}}
			/>
		);
	}
}
