import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { THEME_COLORS, RawColor } from '../types/lib/theme';
import { THEME_FONTSIZE, HORIZONTAL_UNIT } from '../types/lib/size';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

interface IVSPCheckboxProps {
	/**
	 * Size of the checkbox
	 */
	size?: number;

	/**
	 * Raw color of the checkbox
	 */
	color?: RawColor;

	/**
	 * Checkbox is checked if true
	 */
	checked?: boolean;

	/**
	 * Checkbox on the left side if true
	 */
	buttonOnRight?: boolean;
}

/**
 * VSPCheckbox
 *
 * @property
 * - ```size```: Size of the checkbox (by default ```THEME_FONTSIZE```)
 * - ```color```: Raw color of the checkbox (by default ```THEME_COLORS.oceanBlue```)
 * - ```checked```: Checkbox is checked if true (by default ```false```)
 * - ```buttonOnRight```: Checkbox on the left side if true (by default ```false```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPCheckbox extends React.Component<
	IVSPMarginProps<IVSPCheckboxProps>
> {
	public static defaultProps = {
		size: THEME_FONTSIZE,
		color: THEME_COLORS.oceanBlue,
		checked: false,
		buttonOnRight: false,
	};

	public state = {
		checked: this.props.checked!,
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				flexDirection: this.props.buttonOnRight!
					? 'row-reverse'
					: 'row',
				alignItems: 'center',
				...decodeVSPMarginProps(this.props),
			},

			outerCircle: {
				borderRadius: this.props.size!,
				borderWidth: 0.1 * this.props.size!,
				borderColor: this.props.color!,
				padding: 0.2 * this.props.size!,
			},

			innerCircle: {
				borderRadius: this.props.size!,
				width: this.props.size!,
				height: this.props.size!,
				backgroundColor: this.state.checked
					? this.props.color!
					: THEME_COLORS.none,
			},

			bodyView: {
				flex: 1,
				marginLeft: !this.props.buttonOnRight! ? HORIZONTAL_UNIT() : 0,
				marginRight: this.props.buttonOnRight! ? HORIZONTAL_UNIT() : 0,
			},
		});

		return (
			<TouchableOpacity
				style={style.container}
				onPress={() => {
					this.setState({ checked: !this.state.checked });
				}}
			>
				<View style={style.outerCircle}>
					<View style={style.innerCircle} />
				</View>
				<View style={style.bodyView}>{this.props.children}</View>
			</TouchableOpacity>
		);
	}
}
