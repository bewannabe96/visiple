import React from 'react';
import { TouchableOpacity, StyleProp, StyleSheet } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { THEME_COLORS } from '../../config/theme';
import { VSP_EDGE_PADDING } from '../../config/size';

import VSPText from '../vsp-text';
import VSPIcon from '../vsp-icon';

interface SideDrawerItemProps extends NavigationInjectedProps{
    /**
     * Title of the item
     */
    title: string,

    /**
     * Destination route name to which it navigate
     */
    desinationRouteName?: string;
}

/**
 * SideDrawerItem
 * 
 * Props
 * - ```title```(required): Title of the item
 * - ```desinationRouteName```: Destination route name to which it navigate
 */
class SideDrawerItem extends React.Component<SideDrawerItemProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: SideDrawerItemProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: THEME_COLORS['white'],
                padding: VSP_EDGE_PADDING,
                marginBottom: 1,
            },
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={this._fixed_style.container}
                onPress={
                    ()=>{
                        !!this.props.desinationRouteName &&
                        this.props.navigation.navigate(this.props.desinationRouteName)
                    }
                }
            >
                <VSPText>
                    {this.props.title}
                </VSPText>
                <VSPIcon
                    iconName='next'
                    theme='ocean-blue'
                />
            </TouchableOpacity>
        );
    }
};

export default withNavigation(SideDrawerItem);