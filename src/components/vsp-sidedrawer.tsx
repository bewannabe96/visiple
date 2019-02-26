import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';

import { THEME_COLORS } from '../types/lib/theme';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_MINOR_FONTSIZE,
} from '../types/lib/size';

import VSPContainer from './vsp-container';
import VSPHeader from './vsp-header';
import VSPTextButton from './vsp-text-button';
import VSPIcon from './vsp-icon';
import VSPText from './vsp-text';
import VSPProfile from './vsp-profile';
import VSPDivider from './vsp-divider';

/**
 * VSPSideDrawer
 */
export default class VSPSideDrawer extends React.Component<DrawerItemsProps> {
	private _renderItem(title: string, desinationRouteName: string) {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: THEME_COLORS.white,
					padding: VSP_EDGE_PADDING,
				}}
				activeOpacity={0.6}
				onPress={() => {
					this.props.navigation.navigate(desinationRouteName);
				}}
			>
				<VSPText theme='grey'>{title}</VSPText>
				<VSPIcon iconName='next' theme='grey' />
			</TouchableOpacity>
		);
	}

	public render() {
		const style = StyleSheet.create({
			headerLeftButtonsView: {
				flexDirection: 'row',
			},

			bodyView: {
				backgroundColor: THEME_COLORS.cottoncandyBlue,
			},

			profileTab: {
				flexDirection: 'row',
				backgroundColor: THEME_COLORS.greyWhite,
				padding: VSP_EDGE_PADDING,
			},

			infoView: {
				flex: 1,
				justifyContent: 'center',
				paddingLeft: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<VSPContainer>
				<VSPHeader
					headerRight={
						<VSPTextButton
							icon='previous'
							fontSize={20}
							theme='brown'
							onPress={() => {
								this.props.navigation.closeDrawer();
							}}
						/>
					}
					headerLeft={
						<View style={style.headerLeftButtonsView}>
							<VSPTextButton
								icon='home'
								fontSize={25}
								marginRight={VSP_EDGE_PADDING}
								theme='brown'
								onPress={() => {
									this.props.navigation.navigate('HomeStack');
								}}
							/>
							<VSPTextButton
								icon='settings'
								fontSize={25}
								theme='brown'
							/>
						</View>
					}
				/>
				<View style={style.bodyView}>
					<View style={style.profileTab}>
						<VSPProfile />
						<View style={style.infoView}>
							<VSPText marginBottom={HORIZONTAL_UNIT()}>
								{'홍길동'}
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								theme='grey'
							>
								{'testuser@gmail.com'}
							</VSPText>
						</View>
					</View>
					<VSPDivider theme='cottoncandyBlue' />
					{this._renderItem('친구', 'FriendStack')}
					{this._renderItem('여행 티켓', 'TicketStack')}
					{this._renderItem('새로운 여행 기록', 'TicketStack')}
				</View>
			</VSPContainer>
		);
	}
}
