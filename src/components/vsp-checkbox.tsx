import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { THEME_COLORS, ThemeColorType, THEME_FONTSIZE } from '../types/config/theme';
import { VSPMarginProps } from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';

interface VSPCheckboxProps extends VSPMarginProps {
    /**
     * Size of the checkbox (by default ```THEME_FONTSIZE```)
     */
    size?: number;

    /**
     * Theme color of the checkbox (by default ```ocean-blue```)
     */
    theme?: ThemeColorType;
}

/**
 * VSPCheckbox
 * 
 * @property
 * - ```size```: Size of the checkbox (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the checkbox (by default ```ocean-blue```)
 */
export default class VSPCheckbox extends React.Component<VSPCheckboxProps> {
    public static defaultProps = {
        size: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    state = {
        checked: false
    }

    render() {
        let style = StyleSheet.create({
            touchableopacity: {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0.2*this.props.size!,
                borderWidth: this.state.checked ? 0.1*this.props.size! : 0,
                borderColor: THEME_COLORS[this.props.theme!],
                backgroundColor: THEME_COLORS[this.state.checked ? 'none' :this.props.theme!],
                width: this.props.size!, 
                height: this.props.size!,
                marginRight: 0.7*this.props.size!,
            },
        });

        return (
            <TouchableOpacity
                style={style.touchableopacity}
                onPress={()=>{this.setState({ checked: !this.state.checked })}}
            >
                <VSPIcon
                    iconName='check'
                    size={this.props.size! * 0.6}
                    color={THEME_COLORS[!this.state.checked ? this.props.theme! : 'white']}
                />
            </TouchableOpacity>
        );
    }
}