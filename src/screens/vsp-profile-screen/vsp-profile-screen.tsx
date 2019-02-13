/** @format */

import React from 'react';
import { View, StyleProp, StyleSheet, ScrollView } from 'react-native';

import {
	THEME_COLORS,
	addShadowProperties,
	THEME_HEADER_FONTSIZE,
} from '../../types/config/theme';
import { VERTICAL_UNIT, HORIZONTAL_UNIT } from '../../types/config/size';

import VSPContainer from '../../components/vsp-container';
import VSPImage from '../../components/vsp-image';
import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPBottomBar from '../../components/vsp-bottombar';

export default class VSPProfileScreen extends React.Component {
	private _fixed_style: StyleProp<any>;

	constructor(props: any) {
		super(props);

		this._fixed_style = StyleSheet.create({
			profileTitleView: {
				width: '100%',
				flexDirection: 'row',
				position: 'absolute',
				bottom: 0,
			},

			profileTitleInfoView: {
				flex: 1,
				justifyContent: 'flex-end',
				paddingBottom: 7 * VERTICAL_UNIT,
			},

			profileBodyCap: {
				height: 10 * VERTICAL_UNIT,
				width: '100%',
				borderTopLeftRadius: 5 * VERTICAL_UNIT,
				borderTopRightRadius: 5 * VERTICAL_UNIT,
				backgroundColor: THEME_COLORS['white'],
				position: 'absolute',
				bottom: -5 * VERTICAL_UNIT,
			},

			summaryView: {
				flexDirection: 'row',
				marginTop: 2 * VERTICAL_UNIT,
				height: 16 * VERTICAL_UNIT,
				backgroundColor: THEME_COLORS['cottoncandy-blue'],
				...addShadowProperties(),
			},

			summaryItemView: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			},

			summaryItemTitleText: {
				fontWeight: 'bold',
				color: THEME_COLORS['ocean-blue'],
				marginBottom: 5,
			},

			summaryItemValueText: {
				color: THEME_COLORS['ocean-blue'],
				opacity: 0.5,
			},

			summarySeperator: {
				width: 1,
				backgroundColor: THEME_COLORS['ocean-blue'],
				opacity: 0.5,
			},

			profileBodyView: {
				flex: 1,
			},
		});
	}

	render() {
		return (
			<VSPContainer>
				<View>
					<VSPImage
						source={require('../../dev-sample-image/landscape_1.jpeg')}
						height={50 * VERTICAL_UNIT}
					/>
					<View style={this._fixed_style.profileTitleView}>
						<VSPProfile
							size={22 * HORIZONTAL_UNIT}
							marginLeft={6 * HORIZONTAL_UNIT}
							marginRight={2 * HORIZONTAL_UNIT}
						/>
						<View style={this._fixed_style.profileTitleInfoView}>
							<VSPText
								fontSize={THEME_HEADER_FONTSIZE}
								theme='white'
								marginBottom={VERTICAL_UNIT}
							>
								홍길동
							</VSPText>
							<VSPText theme='white'>testuser@gmail.com</VSPText>
						</View>
						<View style={this._fixed_style.profileBodyCap} />
					</View>
				</View>
				<View style={this._fixed_style.summaryView}>
					<View style={this._fixed_style.summaryItemView}>
						<VSPText style={this._fixed_style.summaryItemTitleText}>
							기록
						</VSPText>
						<VSPText style={this._fixed_style.summaryItemValueText}>
							0
						</VSPText>
					</View>
					<View style={this._fixed_style.summarySeperator} />
					<View style={this._fixed_style.summaryItemView}>
						<VSPText style={this._fixed_style.summaryItemTitleText}>
							친구
						</VSPText>
						<VSPText style={this._fixed_style.summaryItemValueText}>
							0
						</VSPText>
					</View>
					<View style={this._fixed_style.summarySeperator} />
					<View style={this._fixed_style.summaryItemView}>
						<VSPText style={this._fixed_style.summaryItemTitleText}>
							팔로워
						</VSPText>
						<VSPText style={this._fixed_style.summaryItemValueText}>
							0
						</VSPText>
					</View>
				</View>
				<ScrollView style={this._fixed_style.profileBodyView} />
				<VSPBottomBar />
			</VSPContainer>
		);
	}
}
