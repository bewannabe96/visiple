import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { HORIZONTAL_UNIT } from '../types/lib/size';
import { THEME_COLORS, addShadowProperties } from '../types/lib/theme';

interface IVSPVSPDropdownProps extends IVSPMarginProps {
	/**
	 * Button of the dropdown
	 */
	button: React.ReactElement<any>;

	/**
	 * Content of the dropdown
	 */
	content: React.ReactElement<any>;
}

/**
 * VSPDropdown
 *
 * @property
 * - ```button```: Button of the dropdown
 * - ```content```: Content of the dropdown
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPDropdown extends React.Component<IVSPVSPDropdownProps> {
	public state = {
		firstTrigger: true,
		buttonHeight: 0,
		visible: false,
	};

	private _openDropdown = () => {
		this.setState({ ...this.state, visible: true });
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				...decodeVSPMarginProps(this.props),
			},

			dropdown: {
				padding: HORIZONTAL_UNIT(),
				borderRadius: HORIZONTAL_UNIT(),
				backgroundColor: THEME_COLORS.white,
				position: 'absolute',
				right: 0,
				top: this.state.buttonHeight,
				...addShadowProperties(),
			},
		});

		return (
			<View
				style={style.container}
				onLayout={event => {
					this.state.firstTrigger &&
						this.setState({
							...this.state,
							firstTrigger: false,
							buttonHeight: event.nativeEvent.layout.height,
						});
				}}
			>
				{React.cloneElement(this.props.button, {
					...{ onPress: this._openDropdown },
				})}
				{this.state.visible && (
					<View style={style.dropdown}>{this.props.content}</View>
				)}
			</View>
		);
	}
}
