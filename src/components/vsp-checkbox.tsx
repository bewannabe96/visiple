import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { THEME_COLORS, ThemeColor } from '../types/lib/theme';
import { THEME_FONTSIZE } from '../types/lib/size';
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
	 * Theme color of the checkbox
	 */
	theme?: ThemeColor;

	/**
	 * Checkbox is checked if true
	 */
	checked?: boolean;
}

/**
 * VSPCheckbox
 *
 * @property
 * - ```size```: Size of the checkbox (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the checkbox (by default ```oceanBlue```)
 * - ```checked```: Checkbox is checked if true (by default ```false```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
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
		theme: 'oceanBlue',
		checked: false,
	};

	public state = {
		checked: this.props.checked!,
	};

	public render() {
		const style = StyleSheet.create({
			touchableopacity: {
				borderRadius: this.props.size!,
				borderWidth: 0.1 * this.props.size!,
				borderColor: THEME_COLORS[this.props.theme!],
				padding: 0.2 * this.props.size!,
				...decodeVSPMarginProps(this.props),
			},

			innerCircle: {
				borderRadius: this.props.size!,
				width: this.props.size!,
				height: this.props.size!,
				backgroundColor: this.state.checked
					? THEME_COLORS[this.props.theme!]
					: THEME_COLORS.none,
			},
		});

		return (
			<TouchableOpacity
				style={style.touchableopacity}
				onPress={() => {
					this.setState({ checked: !this.state.checked });
				}}
			>
				<View style={style.innerCircle} />
			</TouchableOpacity>
		);
	}
}
