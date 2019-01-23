import React from 'react';
import { View, Image, ImageSourcePropType, StyleProp, StyleSheet } from 'react-native';

import { VSPMarginProps, decodeVSPMarginProps } from '../../props/vsp-margin';

/**
 * Image ratio which is WIDTH divided by HEIGHT
 */
const IMAGE_RATIO = 8 / 5;

interface VSPTitleLogoProps extends VSPMarginProps {
    /**
     * Direction to fit the title logo
     * 
     * - 'X': Fit the title logo in horizontal direction
     * - 'Y: Fit the title logo in vertical direction
     */
    fillDirection: 'X' | 'Y';

    /**
     * Ratio by which will rescale the title logo abide (by default '100%')
     */
    rescaleRatio?: string;
}

/**
 * VSPTitleLogo
 * 
 * @property
 * - 'fillDirection' (required): Direction to fit the title logo
 * - 'rescaleRatio': Ratio by which will rescale the title logo abide (by default '100%')
 */
export default class VSPTitleLogo extends React.Component<VSPTitleLogoProps> {
    private _logosource: ImageSourcePropType;
    private _fixed_style: StyleProp<any>;
    private _variable_style: StyleProp<any>;

    public static defaultProps = {
        rescaleRatio: '100%',
    };

    state = {
        firstTrigger: true,
        logoWidth: 0,
        logoHeight: 0,
    }

    constructor(props: VSPTitleLogoProps) {
        super(props);
        
        this._logosource = require('./src/logo.png');

        this._fixed_style = StyleSheet.create({
            container: {
                width: (props.fillDirection==='X' ? props.rescaleRatio! : 0),
                height: (props.fillDirection==='Y' ? props.rescaleRatio! : 0),
                ...decodeVSPMarginProps(props)
            },
        });
    }

    render() {
        this._variable_style = StyleSheet.create({
            container: {
                width: this.state.logoWidth,
                height: this.state.logoHeight,
            },

            image: {
                width: this.state.logoWidth,
                height: this.state.logoHeight,
                resizeMode: 'contain',
            }
        });

        return (
            <View
                style={[
                    this._fixed_style.container,
                    !this.state.firstTrigger ? this._variable_style.container : null,
                ]}
                onLayout={event=>{
                    this.state.firstTrigger &&
                    this.setState({
                        firstTrigger: false,
                        logoWidth: (this.props.fillDirection==='X'
                            ? event.nativeEvent.layout.width
                            : event.nativeEvent.layout.height * IMAGE_RATIO),
                        logoHeight: (this.props.fillDirection==='Y'
                            ? event.nativeEvent.layout.height
                            : event.nativeEvent.layout.width * (1 / IMAGE_RATIO))
                    });
                }}
            >
                <Image
                    style={this._variable_style.image}
                    source={this._logosource}
                />
            </View>
        );
    }
}