/** @format */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItemsProps } from 'react-navigation';

import { THEME_COLORS, THEME_MINOR_FONTSIZE } from '../types/config/theme';
import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../types/config/size';

import VSPContainer from './vsp-container';
import VSPHeader from './vsp-header';
import VSPTextButton from './vsp-text-button';
import VSPIcon from './vsp-icon';
import VSPText from './vsp-text';
import VSPProfile from './vsp-profile';

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
					marginBottom: 1,
				}}
				activeOpacity={0.6}
				onPress={() => {
					this.props.navigation.navigate(desinationRouteName);
				}}
			>
				<VSPText>{title}</VSPText>
				<VSPIcon iconName='next' theme='ocean-blue' />
			</TouchableOpacity>
		);
	}

	public render() {
		const style = StyleSheet.create({
			headerLeftButtonsView: {
				flexDirection: 'row',
			},

			bodyView: {
				backgroundColor: THEME_COLORS['cottoncandy-blue'],
			},

			profileTab: {
				flexDirection: 'row',
				backgroundColor: THEME_COLORS['grey-white'],
				padding: VSP_EDGE_PADDING,
				marginBottom: 1,
			},

			infoView: {
				flex: 1,
				justifyContent: 'center',
				paddingLeft: 2 * HORIZONTAL_UNIT,
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
							<VSPText
								fontWeight={'bold'}
								marginBottom={HORIZONTAL_UNIT}
							>
								{'홍길동'}
							</VSPText>
							<VSPText fontSize={THEME_MINOR_FONTSIZE}>
								{'testuser@gmail.com'}
							</VSPText>
						</View>
					</View>
					{this._renderItem('친구', 'FriendStack')}
					{this._renderItem('여행 티켓', 'TicketStack')}
					{this._renderItem('새로운 여행 기록', 'TicketStack')}
				</View>
			</VSPContainer>
		);
	}
}
