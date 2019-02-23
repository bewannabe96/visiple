import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
	decodeVSPPaddingProps,
	IVSPPaddingProps,
} from '../types/props/vsp-padding';

interface IVSPContainerProps extends IVSPPaddingProps {
	/**
	 * Justify Content
	 */
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
}

/**
 * VSPContainer
 *
 * @property
 * - ```justifyContent```: Justify Content (by default ```flex-start```)
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */
export default class VSPContainer extends React.Component<IVSPContainerProps> {
	public static defaultProps = {
		justifyContent: 'flex-start',
	};

	public render() {
		const style = StyleSheet.create({
			innerView: {
				flex: 1,
				flexDirection: 'column',
				justifyContent: this.props.justifyContent!,
				alignItems: 'stretch',
				...decodeVSPPaddingProps(this.props),
			},
		});

		return <View style={style.innerView}>{this.props.children}</View>;
	}
}
