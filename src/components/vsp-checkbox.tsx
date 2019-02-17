import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { THEME_COLORS, ThemeColorType } from '../types/lib/theme';
import { THEME_FONTSIZE } from '../types/lib/size';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

import VSPIcon from './vsp-icon';

interface IVSPCheckboxProps extends IVSPMarginProps {
	/**
	 * Size of the checkbox
	 */
	size?: number;

	/**
	 * Theme color of the checkbox
	 */
	theme?: ThemeColorType;
}

/**
 * VSPCheckbox
 *
 * @property
 * - ```size```: Size of the checkbox (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the checkbox (by default ```oceanBlue```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPCheckbox extends React.Component<IVSPCheckboxProps> {
	public static defaultProps = {
		size: THEME_FONTSIZE,
		theme: 'oceanBlue',
	};

	public state = {
		checked: false,
	};

	public render() {
		const style = StyleSheet.create({
			touchableopacity: {
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 0.2 * this.props.size!,
				borderWidth: this.state.checked ? 0 : 0.1 * this.props.size!,
				borderColor: THEME_COLORS[this.props.theme!],
				backgroundColor:
					THEME_COLORS[
						this.state.checked ? this.props.theme! : 'none'
					],
				width: this.props.size!,
				height: this.props.size!,
				...decodeVSPMarginProps(this.props),
			},
		});

		return (
			<TouchableOpacity
				style={style.touchableopacity}
				onPress={() => {
					this.setState({ checked: !this.state.checked });
				}}
			>
				<VSPIcon
					iconName='check'
					size={this.props.size! * 0.6}
					color={
						THEME_COLORS[
							!this.state.checked ? this.props.theme! : 'white'
						]
					}
				/>
			</TouchableOpacity>
		);
	}
}
