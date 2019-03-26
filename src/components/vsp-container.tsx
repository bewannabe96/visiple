import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import {
	decodeVSPPaddingProps,
	IVSPPaddingProps,
} from '../types/props/vsp-padding';

interface IVSPContainerProps {
	/**
	 * Wrap in SafeAreaView if true
	 */
	wrapSafeAreaView?: boolean;

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
 * - ```wrapSafeAreaView```: Wrap in SafeAreaView if true (by default ```false```)
 * - ```justifyContent```: Justify Content (by default ```flex-start```)
 * - ```padding```: Overall padding; including paddingTop, paddingBottom, paddingRight and paddingLeft
 * - ```paddingX```: Horizontal padding; including paddingRight and paddingLeft
 * - ```paddingY```: Vertical padding; including paddingTop and paddingBottom
 * - ```paddingTop```: Top padding
 * - ```paddingBottom```: Bottom padding
 * - ```paddingRight```: Rigth padding
 * - ```paddingLeft```: Left padding
 */
export default class VSPContainer extends React.Component<
	IVSPPaddingProps<IVSPContainerProps>
> {
	public static defaultProps = {
		wrapSafeAreaView: false,
		justifyContent: 'flex-start',
	};

	public render() {
		const style = StyleSheet.create({
			safeAreaView: {
				flex: 1,
			},

			innerView: {
				flex: 1,
				flexDirection: 'column',
				justifyContent: this.props.justifyContent!,
				alignItems: 'stretch',
				...decodeVSPPaddingProps(this.props),
			},
		});

		if (this.props.wrapSafeAreaView) {
			return (
				<SafeAreaView style={style.safeAreaView}>
					<View style={style.innerView}>{this.props.children}</View>
				</SafeAreaView>
			);
		} else {
			return <View style={style.innerView}>{this.props.children}</View>;
		}
	}
}
