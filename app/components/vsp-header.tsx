import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { THEME_COLORS, addShadowProperties } from '../config/theme';
import { VSP_HEADER_PADDING } from '../config/size';

import VSPButton from './vsp-button';
import VSPText from './vsp-text';

import { IconNameType } from './vsp-icon/src';

interface VSPHeaderTitleProps {
    /**
     * Title text
     */
    text: string;
}

/**
 * VSPHeaderTitle
 * 
 * @property
 * - 'text' (required): Title text
 */
class VSPHeaderTitle extends React.Component<VSPHeaderTitleProps> {
    render() {
        return (
            <VSPText
                style={
                    {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: THEME_COLORS['brown'],
                    }
                }
            >
                {this.props.text}
            </VSPText>
        );
    }
}

interface VSPHeaderButtonProps {
    /**
     * Icon to be displayed
     */
    icon: IconNameType;

    /**
     * Callback function when button pressed
     */
    onPress?: () => void;
}

/**
 * VSPHeaderButton
 * 
 * @property
 * - 'icon' (required): Icon to be displayed
 * - 'onPress': Callback function when button pressed
 */
class VSPHeaderButton extends React.Component<VSPHeaderButtonProps> {
    render() {
        return (
            <VSPButton
                icon={this.props.icon}
                buttonStyle='text-only'
                theme='brown'
                fontSize={28}
                onPress={this.props.onPress}
            />
        );
    }
}

interface VSPHeaderProps extends NavigationInjectedProps {
    /**
     * Title or component to be displayed in the center
     */
    headerTitle?: string | React.ReactElement<any>,

    /**
     * Component to be diplayed in the left (by default 'menu')
     */
    headerLeft?: React.ReactElement<any>,

    /**
     * Component to be displayed in the right
     */
    headerRight?: React.ReactElement<any>,
}

/**
 * VSPHeader
 * 
 * @property
 * - 'headerTitle': Title or component to be displayed in the center
 * - 'headerLeft': Component to be diplayed in the left (by default 'menu')
 * - 'headerRight': Component to be displayed in the right
 */
class VSPHeader extends React.Component<VSPHeaderProps> {
    render() {
        return (
            <SafeAreaView
                style={
                    {
                        backgroundColor: THEME_COLORS['grey-white'],
                        zIndex: 1,
                        ...addShadowProperties(),
                    }
                }
            >
                <View
                    style={
                        {
                            height: 55,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                        }
                    }
                >
                    <View
                        style={
                            {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                paddingLeft: VSP_HEADER_PADDING,
                            }
                        }
                    >
                        {
                            !!this.props.headerLeft ?
                            this.props.headerLeft :
                            (
                                <VSPHeaderButton
                                    icon='menu'
                                    onPress={()=>{this.props.navigation.openDrawer()}}
                                />
                            )
                        }
                    </View>
                    <View
                        style={
                            {
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        }
                    >
                        {this.props.headerTitle}
                    </View>
                    <View
                        style={
                            {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                paddingRight: VSP_HEADER_PADDING,
                            }
                        }
                    >
                        {this.props.headerRight}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

export default withNavigation(VSPHeader);
export { VSPHeaderTitle, VSPHeaderButton }