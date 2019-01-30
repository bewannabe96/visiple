import React from 'react';
import { View, SafeAreaView, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, ThemeColorType } from '../config/theme';
import { decodeVSPPaddingProps, VSPPaddingProps } from '../types/props/vsp-padding';

interface VSPContainerProps extends VSPPaddingProps {
    /**
     * Justify Content (by default ```flex-start```)
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

    /**
     * Background color
     */
    background?: ThemeColorType;
}

/**
 * VSPContainer
 * 
 * @property
 * - ```justifyContent```: Justify Content (by default ```flex-start```)
 * - ```background```: Background color (by default ```none```)
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */
export default class VSPContainer extends React.Component<VSPContainerProps> {
    private _fixed_style: StyleProp<any>;

    public static defaultProps = {
        justifyContent: 'flex-start',
        background: 'none',
    };

    constructor(props: VSPContainerProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: THEME_COLORS[props.background!],
            },
    
            innerView: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: props.justifyContent!,
                alignItems: 'stretch',
                ...decodeVSPPaddingProps(props),
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={this._fixed_style.container}>
                <View style={this._fixed_style.innerView}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}