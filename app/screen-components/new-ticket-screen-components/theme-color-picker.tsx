import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { THEME_COLORS } from "../../config/theme";
import { TICKET_COLORS, TICKET_HEADER_COLORS_KEYS, TicketHeaderColorType } from '../../config/ticket_theme';
import { VERTICAL_UNIT } from '../../config/size';

interface ThemeColorPickerProps {
    /**
     * Color that is selected
     */
    selectedColor: TicketHeaderColorType,

    /**
     * setThemeColor action dispatcher
     */
    setThemeColor: any,
}

/**
 * ThemeColorPicker
 * 
 * @property
 * - ```selectedColor```(required): Color that is selected
 */
export default class ThemeColorPicker extends React.Component<ThemeColorPickerProps> {
    render() {
        return (
            <ScrollView
                contentContainerStyle={
                    {
                        flexDirection: 'row',
                        marginTop: VERTICAL_UNIT,
                    }
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    TICKET_HEADER_COLORS_KEYS.map(colorName => (
                        <TouchableOpacity
                            key={colorName}
                            style={
                                {
                                    height: 10*VERTICAL_UNIT,
                                    width: 10*VERTICAL_UNIT,
                                    borderRadius: 5*VERTICAL_UNIT,
                                    marginHorizontal: VERTICAL_UNIT,
                                    backgroundColor: TICKET_COLORS.HEADER[colorName],
                                    borderColor: THEME_COLORS['grey'],
                                    borderWidth: this.props.selectedColor===colorName ? 3 : 0,
                                }
                            }
                            onPress={()=>{this.props.setThemeColor(colorName)}}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}