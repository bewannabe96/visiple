import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';
import { IconName } from '../types/lib/icon';
import { THEME_FONTSIZE } from '../types/lib/size';
import { THEME_COLORS, ThemeColorType, RawColorType } from '../types/lib/theme';

import VSPText from './vsp-text';
import VSPIcon from './vsp-icon';

interface IVSPDividerProps extends IVSPMarginProps {
	/**
	 * Text to be displayed
	 */
	text?: string;

	/**
	 * Icon to be displayed on the left side of the text
	 */
	icon?: IconName;

	/**
	 * Size of the text and the icon
	 */
	fontSize?: number;

	/**
	 * Theme color of the divider
	 */
	theme?: ThemeColorType;

	/**
	 * Raw color of the divider
	 */
	color?: RawColorType;

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
 * - ```icon```: Icon to be displayed on the left side of the text
 * - ```fontSize```: Size of the text and the icon (by default ```THEME_FONTSIZE```)
 * - ```theme```: Theme color of the divider (by default ```oceanBlue```)
 * - ```color```: Raw color of the divider
 * - ```orientation```: The place where the text will go (by default ```left```)
 */
export default class VSPDivider extends React.Component<IVSPDividerProps> {
	public static defaultProps = {
		fontSize: THEME_FONTSIZE,
		theme: 'oceanBlue',
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
				backgroundColor: this.props.color
					? this.props.color
					: THEME_COLORS[this.props.theme!],
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
				{(!!this.props.icon || !!this.props.text) && (
					<View style={style.contentView}>
						{!!this.props.icon && (
							<VSPIcon
								iconName={this.props.icon}
								color={
									this.props.color
										? this.props.color
										: THEME_COLORS[this.props.theme!]
								}
								size={this.props.fontSize}
							/>
						)}
						{!!this.props.text && (
							<VSPText
								fontSize={this.props.fontSize}
								color={
									this.props.color
										? this.props.color
										: THEME_COLORS[this.props.theme!]
								}
								marginLeft={
									this.props.icon
										? 0.3 * this.props.fontSize!
										: 0
								}
							>
								{this.props.text}
							</VSPText>
						)}
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
