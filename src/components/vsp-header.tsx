import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { THEME_COLORS } from '../types/lib/theme';
import { VSP_TOP_PADDING } from '../types/lib/size';
import VSPText from './vsp-text';

export const HEADER_HEIGHT = 55;

interface IVSPHeaderProps {
	/**
	 * Title or component to be displayed in the center
	 */
	headerTitle?: string | Element;

	/**
	 * Component to be diplayed in the left
	 */
	headerLeft?: Element;

	/**
	 * Component to be displayed in the right
	 */
	headerRight?: Element;

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
export default class VSPHeader extends React.Component<IVSPHeaderProps> {
	public static defaultProps = {
		transparent: false,
	};

	public render() {
		return (
			<SafeAreaView
				style={{
					backgroundColor: this.props.transparent!
						? THEME_COLORS.none
						: THEME_COLORS.white,
					position: this.props.transparent! ? 'absolute' : 'relative',
					top: 0,
					width: '100%',
					borderBottomWidth: this.props.transparent! ? 0 : 1,
					borderColor: THEME_COLORS.greyWhite,
				}}
			>
				<View
					style={{
						height: HEADER_HEIGHT,
						flexDirection: 'row',
						alignItems: 'stretch',
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-start',
							paddingLeft: VSP_TOP_PADDING,
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
						{typeof this.props.headerTitle === 'string' && (
							<VSPText
								fontSize={20}
								fontWeight='bold'
								theme='brown'
							>
								{this.props.headerTitle}
							</VSPText>
						)}
						{typeof this.props.headerTitle !== 'string' &&
							this.props.headerTitle}
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'flex-end',
							paddingRight: VSP_TOP_PADDING,
						}}
					>
						{this.props.headerRight}
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
