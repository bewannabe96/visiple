import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../types/config/theme';
import { decodeVSPPaddingProps, VSPPaddingProps } from '../types/props/vsp-padding';

interface VSPContainerProps extends VSPPaddingProps {
    /**
     * Justify Content (by default ```flex-start```)
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

    /**
     * Background color
     */
    background?: string;
}

/**
 * VSPContainer
 * 
 * @property
 * - ```justifyContent```: Justify Content (by default ```flex-start```)
 * - ```background```: Background color
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */
export default class VSPContainer extends React.Component<VSPContainerProps> {
    public static defaultProps = {
        justifyContent: 'flex-start',
    };

    render() {
        let style = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: this.props.background,
            },

            innerView: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: this.props.justifyContent!,
                alignItems: 'stretch',
                ...decodeVSPPaddingProps(this.props),
            }
        });

        return (
            <SafeAreaView style={style.container}>
                <View style={style.innerView}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}