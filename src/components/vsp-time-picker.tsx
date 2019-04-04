import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Text, Icon } from 'react-native-elements';

import { HORIZONTAL_UNIT } from '../types/lib/size';
import { THEME_COLORS, RawColor } from '../types/lib/theme';
import {
	IVSPMarginProps,
	decodeVSPMarginProps,
} from '../types/props/vsp-margin';

interface IVSPTimePickerProps {
	/**
	 * Raw color of the time picker
	 */
	color?: RawColor;
}

/**
 * VSPTimePicker
 *
 * @property
 * - ```color```: Raw color of the time picker (by default ```THEME_COLORS.oceanBlue```)
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginHorizontal```: Horizontal margin; including marginRight and marginLeft
 * - ```marginVertical```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPTimePicker extends React.Component<
	IVSPMarginProps<IVSPTimePickerProps>
> {
	public static defaultProps = {
		color: THEME_COLORS.oceanBlue,
	};

	private _renderSwiper = ({ children }: { children: Element[] }) => (
		<Swiper
			horizontal={false}
			showsButtons={true}
			showsPagination={false}
			loop={true}
			buttonWrapperStyle={{
				flexDirection: 'column',
			}}
			nextButton={
				<Icon
					name='angle-down'
					type='vspicon'
					color={THEME_COLORS.grey}
				/>
			}
			prevButton={
				<Icon
					name='angle-up'
					type='vspicon'
					color={THEME_COLORS.grey}
				/>
			}
		>
			{children}
		</Swiper>
	);

	private _renderHours() {
		let rtnElement: Element[] = [];
		for (let i = 1; i <= 12; i++) {
			rtnElement.push(
				<View
					key={i}
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						key={i}
						style={{
							fontSize: HORIZONTAL_UNIT(5),
							color: this.props.color,
						}}
					>
						{i}
					</Text>
				</View>,
			);
		}
		return rtnElement;
	}

	private _renderMinutes() {
		let rtnElement: Element[] = [];
		for (let i = 0; i < 60; i++) {
			rtnElement.push(
				<View
					key={i}
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						key={i}
						style={{
							fontSize: HORIZONTAL_UNIT(5),
							color: this.props.color,
						}}
					>
						{i.toString().padStart(2, '0')}
					</Text>
				</View>,
			);
		}
		return rtnElement;
	}

	public render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: HORIZONTAL_UNIT(23),
					...decodeVSPMarginProps(this.props),
				}}
			>
				<this._renderSwiper>
					{['오전', '오후'].map((tag: string) => (
						<View
							key={tag}
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Text h2 style={{ color: this.props.color }}>
								{tag}
							</Text>
						</View>
					))}
				</this._renderSwiper>
				<this._renderSwiper>{this._renderHours()}</this._renderSwiper>
				<View
					style={{
						justifyContent: 'center',
						paddingHorizontal: HORIZONTAL_UNIT(),
					}}
				>
					<Text
						h2
						style={{
							fontWeight: 'bold',
							color: this.props.color,
						}}
					>
						:
					</Text>
				</View>
				<this._renderSwiper>{this._renderMinutes()}</this._renderSwiper>
			</View>
		);
	}
}
