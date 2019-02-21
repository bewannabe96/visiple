import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	TICKET_COLORS,
	TICKET_HEADER_COLORS_KEYS,
} from '../../types/data/ticket/theme';
import { HORIZONTAL_UNIT } from '../../types/lib/size';

interface ITicketColorPickerProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	// ACTION CREATORS
	setTicketColor: any;
}

/**
 * TicketColorPicker
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 */
export default class TicketColorPicker extends React.Component<
	ITicketColorPickerProps
> {
	public render() {
		return (
			<ScrollView
				contentContainerStyle={{
					flexDirection: 'row',
					marginTop: HORIZONTAL_UNIT(),
				}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{TICKET_HEADER_COLORS_KEYS.map(colorName => (
					<TouchableOpacity
						key={TICKET_COLORS.THEME[colorName]}
						disabled={
							this.props.themeColor ===
							TICKET_COLORS.THEME[colorName]
						}
						style={{
							height: HORIZONTAL_UNIT(10),
							width: HORIZONTAL_UNIT(10),
							borderRadius: HORIZONTAL_UNIT(5),
							marginHorizontal: HORIZONTAL_UNIT(),
							backgroundColor: TICKET_COLORS.THEME[colorName],
							borderColor: THEME_COLORS.grey,
							borderWidth:
								this.props.themeColor ===
								TICKET_COLORS.THEME[colorName]
									? 3
									: 0,
						}}
						onPress={() => {
							this.props.setTicketColor(
								TICKET_COLORS.THEME[colorName],
							);
						}}
					/>
				))}
			</ScrollView>
		);
	}
}
