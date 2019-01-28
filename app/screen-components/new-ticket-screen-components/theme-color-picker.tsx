import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { RawColorType, THEME_COLORS } from "../../config/theme";
import { TICKET_COLORS } from '../../config/ticket_theme';
import { VERTICAL_UNIT } from '../../config/size';

export interface ThemeColorPickerProps {
    /**
     * Color that is selected
     */
    selectedColor: RawColorType,
}

/**
 * ThemeColorPicker
 * 
 * @property
 * ```selectedColor```: Color that is selected
 */
export default class ThemeColorPicker extends React.Component<ThemeColorPickerProps> {
    private _colors: string[] = Object.keys(TICKET_COLORS.HEADER);
    private _colorview_style: (color: RawColorType, selected: boolean)=>{};

    constructor(props: ThemeColorPickerProps) {
        super(props);

        this._colorview_style = (color: RawColorType, selected: boolean) => ({
                height: 10*VERTICAL_UNIT,
                width: 10*VERTICAL_UNIT,
                borderRadius: 5*VERTICAL_UNIT,
                marginHorizontal: VERTICAL_UNIT,
                backgroundColor: color,
                borderColor: THEME_COLORS['grey'],
                borderWidth: selected ? 3 : 0,
        });
    }

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
                    this._colors.map(color => (
                        <TouchableOpacity
                            key={color}
                            style={this._colorview_style(TICKET_COLORS.HEADER[color],
                                this.props.selectedColor===color)}
                            onPress={()=>{this.setState({selected: color})}}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}