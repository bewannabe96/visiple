import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { THEME_FONTSIZE } from '../types/lib/size';
import { THEME_COLORS, RawColor } from '../types/lib/theme';

import VSPText from './vsp-text';

interface IVSPDividerProps {
	/**
	 * Text to be displayed
	 */
	text?: string;

	/**
	 * Size of the text and the icon
	 */
	fontSize?: number;

	/**
	 * Raw color of the divider
	 */
	color?: RawColor;

	/**
	 * The place where the text will go
	 */
	orientation?: 'far-left' | 'left' | 'center' | 'right' | 'far-right';
}

/**
 * VSPDivider
 *
 * @property
 * - ```text```: Text to be displayed
 * - ```fontSize```: Size of the text and the icon (by default ```THEME_FONTSIZE```)
 * - ```color```: Raw color of the divider (by default ```THEME_COLORS.oceanBlue```)
 * - ```orientation```: The place where the text will go (by default ```left```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPDivider extends React.Component<
	IVSPMarginProps<IVSPDividerProps>
> {
	public static defaultProps = {
		fontSize: THEME_FONTSIZE,
		color: THEME_COLORS.oceanBlue,
		orientation: 'left',
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				flexDirection: 'row',
				alignItems: 'center',
				...decodeVSPMarginProps(this.props),
			},

			line: {
				height: 1,
				backgroundColor: this.props.color!,
			},

			contentView: {
				flexDirection: 'row',
				paddingRight:
					this.props.orientation !== 'far-right'
						? 0.5 * this.props.fontSize!
						: 0,
				paddingLeft:
					this.props.orientation !== 'far-left'
						? 0.5 * this.props.fontSize!
						: 0,
			},
		});

		return (
			<View style={style.container}>
				<View
					style={{
						...style.line,
						flex:
							this.props.orientation !== 'far-left' &&
							this.props.orientation !== 'left'
								? 1
								: 0,
						width:
							this.props.orientation === 'far-left'
								? 0
								: this.props.orientation === 'left'
								? '10%'
								: undefined,
					}}
				/>
				{!!this.props.text && (
					<View style={style.contentView}>
						<VSPText
							fontSize={this.props.fontSize}
							color={this.props.color!}
						>
							{this.props.text}
						</VSPText>
					</View>
				)}
				<View
					style={{
						...style.line,
						flex:
							this.props.orientation !== 'far-right' &&
							this.props.orientation !== 'right'
								? 1
								: 0,
						width:
							this.props.orientation === 'far-right'
								? 0
								: this.props.orientation === 'right'
								? '10%'
								: undefined,
					}}
				/>
			</View>
		);
	}
}
