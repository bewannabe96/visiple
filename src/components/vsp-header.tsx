import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from 'react-navigation';

import { THEME_COLORS } from '../types/lib/theme';
import { VSP_EDGE_PADDING } from '../types/lib/size';
import VSPText from './vsp-text';

const VSP_HEADER_HEIGHT = Header.HEIGHT;
const VSP_HEADER_TITLE_SIZE = VSP_HEADER_HEIGHT * 0.35;

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

	/**
	 * Display border if true
	 */
	diplayBorder?: boolean;
}

/**
 * VSPHeader
 *
 * @property
 * - ```headerTitle```: Title or component to be displayed in the center
 * - ```headerLeft```: Component to be diplayed in the left
 * - ```headerRight```: Component to be displayed in the right
 * - ```transparent```: Transparent if true (by default ```false```)
 * - ```diplayBorder```: Display border if true (by default ```true```)
 */
export default class VSPHeader extends React.Component<IVSPHeaderProps> {
	public static defaultProps = {
		transparent: false,
		diplayBorder: true,
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
					borderBottomWidth:
						!this.props.transparent! && this.props.diplayBorder
							? 1
							: 0,
					borderColor: THEME_COLORS.greyWhite,
				}}
			>
				<View
					style={{
						height: VSP_HEADER_HEIGHT,
						flexDirection: 'row',
						alignItems: 'stretch',
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'flex-start',
							paddingHorizontal: VSP_EDGE_PADDING,
						}}
					>
						{this.props.headerLeft}
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
						}}
					>
						{typeof this.props.headerTitle === 'string' && (
							<VSPText
								fontSize={VSP_HEADER_TITLE_SIZE}
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
							justifyContent: 'center',
							alignItems: 'flex-end',
							paddingHorizontal: VSP_EDGE_PADDING,
						}}
					>
						{this.props.headerRight}
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
