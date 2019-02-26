import React from 'react';
import { StyleSheet, StyleProp, Image, View } from 'react-native';

import { addShadowProperties } from '../types/lib/theme';
import { HORIZONTAL_UNIT } from '../types/lib/size';
import {
	decodeVSPMarginProps,
	IVSPMarginProps,
} from '../types/props/vsp-margin';
import VSPText from './vsp-text';

interface IVSPProfileProps extends IVSPMarginProps {
	/**
	 * Size of the icon
	 */
	size?: number;

	/**
	 * Overlaid text with the profile blurred
	 */
	overlaidText?: string;

	/**
	 * Casts shadow if true
	 */
	castShadow?: boolean;

	/**
	 * Style of the text
	 */
	style?: StyleProp<any>;
}

/**
 * VSPProfile
 *
 * @property
 * - ```size```: Size of the icon (by default ```12HU```)
 * - ```overlaidText```: Overlaid text with the profile blurred
 * - ```castShadow```: Casts shadow if true (by default ```false```)
 * - ```style```: Style of the text (by default ```THEME_FONT```, ```ocean-blue```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPProfile extends React.Component<IVSPProfileProps> {
	public static defaultProps = {
		size: HORIZONTAL_UNIT(12),
		blur: false,
		castShadow: false,
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				height: this.props.size!,
				width: this.props.size!,
				...(this.props.castShadow! ? addShadowProperties() : null),
				...decodeVSPMarginProps(this.props),
				...this.props.style,
			},

			image: {
				width: '100%',
				height: '100%',
				borderRadius: 0.5 * this.props.size!,
			},

			overlaidTextView: {
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
			},
		});

		return (
			<View style={style.container}>
				<Image
					source={require('../dev-sample-image/profile_1.png')}
					blurRadius={
						!!this.props.overlaidText ? this.props.size! / 3 : 0
					}
					style={style.image}
				/>
				{!!this.props.overlaidText && (
					<View style={style.overlaidTextView}>
						<VSPText theme='white'>
							{this.props.overlaidText}
						</VSPText>
					</View>
				)}
			</View>
		);
	}
}
