import React from 'react';
import { Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface VSPImageProps {
    /**
     * Source of the image
     */
    source: ImageSourcePropType,

    /**
     * Height of the image (by default ```100%```)
     */
    height?: string | number

    /**
     * Width of the image (by default ```100%```)
     */
    width?: string | number
}

/**
 * VSPImage
 * 
 * @property
 * - ```source```(required): Source of the image
 * - ```height```: Height of the image (by default ```100%```)
 * - ```width```: Width of the image (by default ```100%```)
 */
export default class VSPImage extends React.Component<VSPImageProps> {
    public static defaultProps = {
        height: '100%',
        width: '100%',
    };

    render() {
        let style = StyleSheet.create({
            image: {
                height: this.props.height!,
                width: this.props.width!,
                resizeMode: 'cover',
            }
        });

        return (
            <Image
                style={style.image}
                source={this.props.source}
            />
        );
    }
}