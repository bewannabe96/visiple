import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { RawColor, THEME_COLORS } from '../types/lib/theme';
import { THEME_FONTSIZE } from '../types/lib/size';
import {
	decodeVSPMarginProps,
	IVSPMarginProps,
} from '../types/props/vsp-margin';

interface IVSPExpandableProps {
	/**
	 * Header component of the expandable
	 */
	header: React.ReactElement<any>;

	/**
	 * Body of the expandable
	 */
	body: React.ReactElement<any>;

	/**
	 * Raw color of the toggle button
	 */
	color?: RawColor;

	/**
	 * Expanded if true
	 */
	expanded?: boolean;
}

/**
 * VSPExpandable
 *
 * @property
 * - ```header```(required): Header component of the expandable
 * - ```body```(required): Body of the expandable
 * - ```color```: Raw color of the toggle button (by default ```THEME_COLORS.oceanBlue```)
 * - ```expanded```: Expanded if true (by default ```false```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPExpandable extends React.Component<
	IVSPMarginProps<IVSPExpandableProps>
> {
	public static defaultProps = {
		color: THEME_COLORS.oceanBlue,
		expanded: false,
	};

	public state = {
		expanded: this.props.expanded,
	};

	private _toggleExpand = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				...decodeVSPMarginProps(this.props),
			},

			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			header: {
				flex: 1,
			},

			body: {},
		});

		return (
			<View style={style.container}>
				<View style={style.headerView}>
					<View style={style.header}>{this.props.header}</View>
					<Icon
						name={this.state.expanded ? 'angle-down' : 'plus'}
						type='vspicon'
						size={THEME_FONTSIZE}
						onPress={this._toggleExpand}
						color={this.props.color!}
					/>
				</View>
				<View style={style.body}>
					{this.state.expanded && this.props.body}
				</View>
			</View>
		);
	}
}
