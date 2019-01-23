import React from 'react';
import { Image, StyleSheet, StyleProp, ImageSourcePropType } from 'react-native';

interface VSPImageProps {
    /**
     * Source of the image
     */
    source: ImageSourcePropType,

    /**
     * Height of the image (by default '100%')
     */
    height?: string | number

    /**
     * Width of the image (by default '100%')
     */
    width?: string | number
}

/**
 * VSPImage
 * 
 * @property
 * - 'source' (required): Source of the image
 * - 'height': Height of the image (by default '100%')
 * - 'width': Width of the image (by default '100%')
 */
export default class VSPImage extends React.Component<VSPImageProps> {
    private _fixed_style: StyleProp<any>;

    public static defaultProps = {
        height: '100%',
        width: '100%',
    };

    constructor(props: VSPImageProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            image: {
                height: props.height!,
                width: props.width!,
                resizeMode: 'cover',
            }
        })
    }
    render() {
        return (
            <Image
                style={this._fixed_style.image}
                source={this.props.source}
            />
        );
    }
}