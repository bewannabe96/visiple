import React from 'react';
import { TouchableOpacity, StyleProp, StyleSheet } from 'react-native';

import { THEME_COLORS, ThemeColorType, THEME_FONTSIZE } from '../config/theme';
import { VSPMarginProps } from '../props/vsp-margin';

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
    private _style: StyleProp<any>;

    public static defaultProps = {
        size: THEME_FONTSIZE,
        theme: 'ocean-blue',
    };

    state = {
        checked: false
    }

    constructor(props: VSPCheckboxProps) {
        super(props);

        this._style = StyleSheet.create({
            touchableopacity_normal: {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0.2*props.size!,
                borderWidth: 0.1*props.size!,
                borderColor: THEME_COLORS[props.theme!],
                width: props.size!, 
                height: props.size!,
                marginRight: 0.7*props.size!,
            },
    
            touchableopacity_checked: {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0.2*props.size!,
                backgroundColor: THEME_COLORS[props.theme!],
                width: props.size!, 
                height: props.size!,
                marginRight: 0.7*props.size!,
            },
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={this.state.checked ?
                    this._style.touchableopacity_checked: this._style.touchableopacity_normal}
                onPress={()=>{this.setState({ ...this.state, checked: !this.state.checked })}}
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