import React from 'react';
import { Text, StyleProp } from 'react-native';

import { THEME_FONT, THEME_FONTSIZE, THEME_COLORS } from '../types/config/theme';

interface VSPTextProps {
    /**
     * Size of the font (by default ```THEME_FONTSIZE```)
     */
    fontSize?: number;

    /**
     * Style of the text (by default ```THEME_FONT```, ```ocean-blue```)
     */
    style?: StyleProp<any>;
}

/**
 * VSPText
 * 
 * @property
 * - ```fontSize```: Size of the font (by default ```THEME_FONTSIZE```)
 * - ```style```: Style of the text (by default ```THEME_FONT```, ```ocean-blue```)
 */
export default class VSPText extends React.Component<VSPTextProps> {
    render() {
        return (
            <Text
                style={
                    {
                        fontSize: this.props.fontSize ? this.props.fontSize : THEME_FONTSIZE,
                        fontFamily: THEME_FONT,
                        color: THEME_COLORS['ocean-blue'],
                        ...this.props.style,
                    }
                }
            >
                {this.props.children}
            </Text>
        );
    }
}