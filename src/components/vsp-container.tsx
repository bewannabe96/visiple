import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { IVSPPaddingProps } from '../types/props/vsp-padding';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../types/lib/size';

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
