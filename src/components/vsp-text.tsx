import React from 'react';
import { Text, StyleProp } from 'react-native';

import { THEME_FONT, THEME_FONTSIZE, THEME_COLORS } from '../types/config/theme';
import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';

interface VSPTextProps extends VSPMarginProps {
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
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
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
                        ...decodeVSPMarginProps(this.props),
                        ...this.props.style,
                    }
                }
            >
                {this.props.children}
            </Text>
        );
    }
}