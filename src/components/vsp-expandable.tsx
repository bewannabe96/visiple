import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemeColor, RawColor, THEME_COLORS } from '../types/lib/theme';
import { THEME_FONTSIZE } from '../types/lib/size';
import {
	decodeVSPMarginProps,
	IVSPMarginProps,
} from '../types/props/vsp-margin';

import VSPRoundIconButton from './vsp-round-icon-button';

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
	 * Theme color of the toggle button
	 */
	theme?: ThemeColor;

	/**
	 * Raw color of the toggle button
	 */
	color?: RawColor;
}

/**
 * VSPExpandable
 *
 * @property
 * - ```header```(required): Header component of the expandable
 * - ```body```(required): Body of the expandable
 * - ```theme```: Theme color of the toggle button
 * - ```color```: Raw color of the toggle button
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPExpandable extends React.Component<
	IVSPMarginProps<IVSPExpandableProps>
> {
	public static defaultProps = {
		theme: 'oceanBlue',
	};

	public state = {
		expanded: false,
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
					<VSPRoundIconButton
						outline={this.state.expanded}
						icon={this.state.expanded ? 'downarrowhead' : 'plus'}
						size={THEME_FONTSIZE * 2}
						onPress={this._toggleExpand}
						color={
							this.props.color
								? this.props.color
								: THEME_COLORS[this.props.theme!]
						}
					/>
				</View>
				<View style={style.body}>
					{this.state.expanded && this.props.body}
				</View>
			</View>
		);
	}
}
