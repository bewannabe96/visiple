import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';
import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../../types/lib/size';

import VSPContainer from '../../components/vsp-container';
import VSPImage from '../../components/vsp-image';
import VSPText from '../../components/vsp-text';

import LogsList from './logs-list';

export default class ProfileScreen extends React.Component {
	public render() {
		const style = StyleSheet.create({
			profileTitleView: {
				width: '100%',
				flexDirection: 'row',
				position: 'absolute',
				bottom: 0,
			},

			profileTitleInfoView: {
				flex: 1,
				justifyContent: 'flex-end',
				paddingBottom: HORIZONTAL_UNIT(7),
			},

			profileBodyCap: {
				height: HORIZONTAL_UNIT(10),
				width: '100%',
				borderTopLeftRadius: HORIZONTAL_UNIT(4),
				borderTopRightRadius: HORIZONTAL_UNIT(4),
				backgroundColor: THEME_COLORS.white,
				position: 'absolute',
				bottom: HORIZONTAL_UNIT(-5),
			},

			summaryView: {
				flexDirection: 'row',
				marginTop: HORIZONTAL_UNIT(2),
				height: HORIZONTAL_UNIT(16),
				backgroundColor: THEME_COLORS.cottoncandyBlue,
				...addShadowProperties(),
			},

			summaryItemView: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			},

			summaryItemTitleText: {
				fontWeight: 'bold',
				color: THEME_COLORS.oceanBlue,
				marginBottom: 5,
			},

			summaryItemValueText: {
				color: THEME_COLORS.oceanBlue,
				opacity: 0.5,
			},

			summarySeperator: {
				width: 1,
				backgroundColor: THEME_COLORS.oceanBlue,
				opacity: 0.5,
			},
		});

		return (
			<VSPContainer>
				<View>
					<VSPImage
						source={require('../../dev-sample-image/landscape_1.jpeg')}
						height={HORIZONTAL_UNIT(50)}
					/>
					<View style={style.profileTitleView}>
						<Avatar
							size={HORIZONTAL_UNIT(22)}
							containerStyle={{
								zIndex: 1,
								marginLeft: HORIZONTAL_UNIT(6),
								marginRight: HORIZONTAL_UNIT(2),
							}}
						/>
						<View style={style.profileTitleInfoView}>
							<VSPText
								fontSize={THEME_HEADER_FONTSIZE}
								color={THEME_COLORS.white}
								marginBottom={HORIZONTAL_UNIT()}
							>
								홍길동
							</VSPText>
							<VSPText color={THEME_COLORS.white}>
								testuser@gmail.com
							</VSPText>
						</View>
						<View style={style.profileBodyCap} />
					</View>
				</View>
				<View style={style.summaryView}>
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemTitleText}>
							기록
						</VSPText>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
					</View>
					<View style={style.summarySeperator} />
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemTitleText}>
							친구
						</VSPText>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
					</View>
					<View style={style.summarySeperator} />
					<View style={style.summaryItemView}>
						<VSPText style={style.summaryItemTitleText}>
							팔로워
						</VSPText>
						<VSPText style={style.summaryItemValueText}>0</VSPText>
					</View>
				</View>
				<LogsList />
			</VSPContainer>
		);
	}
}
