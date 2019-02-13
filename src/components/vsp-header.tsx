/** @format */

import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { THEME_COLORS, addShadowProperties } from '../types/config/theme';
import { VSP_HEADER_PADDING } from '../types/config/size';

interface IVSPHeaderProps extends NavigationInjectedProps {
	/**
	 * Title or component to be displayed in the center
	 */
	headerTitle?: string | React.ReactElement<any>;

	/**
	 * Component to be diplayed in the left
	 */
	headerLeft?: React.ReactElement<any>;

	/**
	 * Component to be displayed in the right
	 */
	headerRight?: React.ReactElement<any>;

	/**
	 * Transparent if true (by default ```false```)
	 */
	transparent?: boolean;
}

/**
 * VSPHeader
 *
 * @property
 * - ```headerTitle```: Title or component to be displayed in the center
 * - ```headerLeft```: Component to be diplayed in the left
 * - ```headerRight```: Component to be displayed in the right
 * - ```transparent```: Transparent if true (by default ```false```)
 */
class VSPHeader extends React.Component<IVSPHeaderProps> {
	public static defaultProps = {
		transparent: false,
	};

	public render() {
		return (
			<SafeAreaView
				style={{
					backgroundColor:
						THEME_COLORS[
							this.props.transparent! ? 'none' : 'grey-white'
						],
					zIndex: 1,
					position: this.props.transparent! ? 'absolute' : 'relative',
					top: 0,
					width: '100%',
					...addShadowProperties(),
				}}
			>
				<View
					style={{
						height: 55,
						flexDirection: 'row',
						alignItems: 'stretch',
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-start',
							paddingLeft: VSP_HEADER_PADDING,
						}}
					>
						{this.props.headerLeft}
					</View>
					<View
						style={{
							flex: 2,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{this.props.headerTitle}
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-end',
							paddingRight: VSP_HEADER_PADDING,
						}}
					>
						{this.props.headerRight}
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

export default withNavigation(VSPHeader);
