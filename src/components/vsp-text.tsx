import React from 'react';
import { Text, StyleProp } from 'react-native';

import { THEME_FONT, THEME_FONTSIZE, THEME_COLORS } from '../types/config/theme';

interface VSPTextProps {
    /**
     * Style of the text (by default ```THEME_FONTSIZE```, ```THEME_FONT```, ```ocean-blue```)
     */
    style?: StyleProp<any>;
}

/**
 * VSPText
 * 
 * @property
 * - ```style```: Style of the text (by default ```THEME_FONTSIZE```, ```THEME_FONT```, ```ocean-blue```)
 */
export default class VSPText extends React.Component<VSPTextProps> {
    render() {
        return (
            <Text
                style={
                    {
                        fontSize: THEME_FONTSIZE,
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