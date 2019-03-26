import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

/**
 * Image ratio which is WIDTH divided by HEIGHT
 */
const IMAGE_RATIO = 8 / 5;

interface IVSPTitleLogoProps {
	/**
	 * Direction to fit the title logo
	 *
	 * - ```X```: Fit the title logo in horizontal direction
	 * - ```Y```: Fit the title logo in vertical direction
	 */
	fillDirection: 'X' | 'Y';

	/**
	 * Ratio by which will rescale the title logo abide
	 */
	rescaleRatio?: string;
}

/**
 * VSPTitleLogo
 *
 * @property
 * - ```fillDirection```(required): Direction to fit the title logo
 * - ```rescaleRatio```: Ratio by which will rescale the title logo abide (by default ```100%```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPTitleLogo extends React.Component<
	IVSPMarginProps<IVSPTitleLogoProps>
> {
	public static defaultProps = {
		rescaleRatio: '100%',
	};

	public state = {
		firstTrigger: true,
		logoWidth: 0,
		logoHeight: 0,
	};

	public render() {
		const logosource = require('../assets/logo/logo.png');

		const style = StyleSheet.create({
			container: {
				width: this.state.firstTrigger
					? this.props.fillDirection === 'X'
						? this.props.rescaleRatio!
						: 0
					: this.state.logoWidth,
				height: this.state.firstTrigger
					? this.props.fillDirection === 'Y'
						? this.props.rescaleRatio!
						: 0
					: this.state.logoHeight,
				...decodeVSPMarginProps(this.props),
			},

			image: {
				width: this.state.logoWidth,
				height: this.state.logoHeight,
				resizeMode: 'contain',
			},
		});

		return (
			<View
				style={style.container}
				onLayout={event => {
					this.state.firstTrigger &&
						this.setState({
							firstTrigger: false,
							logoWidth:
								this.props.fillDirection === 'X'
									? event.nativeEvent.layout.width
									: event.nativeEvent.layout.height *
									  IMAGE_RATIO,
							logoHeight:
								this.props.fillDirection === 'Y'
									? event.nativeEvent.layout.height
									: event.nativeEvent.layout.width *
									  (1 / IMAGE_RATIO),
						});
				}}
			>
				<Image style={style.image} source={logosource} />
			</View>
		);
	}
}
