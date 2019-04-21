import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { THEME_COLORS } from '../types/lib/theme';

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
export default class VSPContainer extends React.Component<IVSPContainerProps> {
	public static defaultProps = {
		wrapSafeAreaView: false,
		justifyContent: 'flex-start',
	};

	public render() {
		const style = StyleSheet.create({
			safeAreaView: {
				flex: 1,
			},

			container: {
				flex: 1,
				flexDirection: 'column',
				justifyContent: this.props.justifyContent!,
				alignItems: 'stretch',
			},
		});

		if (this.props.wrapSafeAreaView) {
			return (
				<SafeAreaView style={style.safeAreaView}>
					<StatusBar
						backgroundColor={THEME_COLORS.white}
						barStyle='dark-content'
					/>
					<View style={style.container}>{this.props.children}</View>
				</SafeAreaView>
			);
		} else {
			return (
				<View style={style.container}>
					<StatusBar
						backgroundColor={THEME_COLORS.white}
						barStyle='dark-content'
					/>
					{this.props.children}
				</View>
			);
		}
	}
}
