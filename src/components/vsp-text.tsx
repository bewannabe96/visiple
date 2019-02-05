import React from 'react';
import { Text, StyleProp } from 'react-native';

import { THEME_FONT, THEME_FONTSIZE, THEME_COLORS, ThemeColorType, RawColorType } from '../types/config/theme';
import { VSPMarginProps, decodeVSPMarginProps } from '../types/props/vsp-margin';

interface VSPTextProps extends VSPMarginProps {
    /**
     * Size of the font (by default ```THEME_FONTSIZE```)
     */
    fontSize?: number;

    /**
     * Weight of the font (by default ```normal```)
     */
    fontWeight?: 'normal' | 'bold';

    /**
     * Theme color of the text
     */
    theme?: ThemeColorType;

    /**
     * Raw color of the text
     */
    color?: RawColorType;

    /**
     * Style of the text
     */
    style?: StyleProp<any>;
}

/**
 * VSPText
 * 
 * @property
 * - ```fontSize```: Size of the font (by default ```THEME_FONTSIZE```)
 * - ```fontWeight```: Weight of the font (by default ```normal```)
 * - ```theme```: Theme color of the button (by default ```ocean-blue```)
 * - ```color```: Raw color of the button
 * - ```style```: Style of the text
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPText extends React.Component<VSPTextProps> {
    public static defaultProps = {
        fontSize: THEME_FONTSIZE,
        theme: 'ocean-blue',
        fontWeight: 'normal',
    };

    render() {
        return (
            <Text
                style={
                    {
                        fontSize: this.props.fontSize!,
                        fontFamily: THEME_FONT,
                        fontWeight: this.props.fontWeight!,
                        color: this.props.color ?
                            this.props.color : THEME_COLORS[this.props.theme!],
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