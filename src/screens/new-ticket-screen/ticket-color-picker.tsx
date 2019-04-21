import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	TICKET_HEADER_COLORS_KEYS,
	TICKET_THEME_COLORS,
} from '../../types/data/ticket/theme';
import { HORIZONTAL_UNIT } from '../../types/lib/size';

import { setTicketColor } from '../../actions/new-ticket';

interface ITicketColorPickerProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;

	// ACTION CREATORS
	setTicketColor: typeof setTicketColor;
}

/**
 * TicketColorPicker
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 *
 * @actionCreator
 * - ```setTicketColor```
 */
export default class TicketColorPicker extends React.Component<
	ITicketColorPickerProps
> {
	public render() {
		return (
			<View>
				<ScrollView
					contentContainerStyle={{
						flexDirection: 'row',
					}}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{TICKET_HEADER_COLORS_KEYS.map(colorName => (
						<TouchableOpacity
							key={TICKET_THEME_COLORS[colorName]}
							disabled={
								this.props.themeColor ===
								TICKET_THEME_COLORS[colorName]
							}
							style={{
								height: HORIZONTAL_UNIT(10),
								width: HORIZONTAL_UNIT(10),
								borderRadius: HORIZONTAL_UNIT(5),
								marginHorizontal: HORIZONTAL_UNIT(),
								backgroundColor: TICKET_THEME_COLORS[colorName],
								borderColor: THEME_COLORS.grey,
								borderWidth:
									this.props.themeColor ===
									TICKET_THEME_COLORS[colorName]
										? 3
										: 0,
							}}
							onPress={() => {
								this.props.setTicketColor(
									TICKET_THEME_COLORS[colorName],
								);
							}}
						/>
					))}
				</ScrollView>
			</View>
		);
	}
}
