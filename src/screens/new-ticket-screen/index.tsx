/** @format */

import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';
import { THEME_HEADER_FONTSIZE } from '../../types/config/theme';\
import { VSPScreenProps } from '../../types/props/vsp-screen';
import { formatDateString, formatTimeString } from '../../types/lib/vsp-date';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPBottomBar from '../../components/vsp-bottombar';
import VSPTextButton from '../../components/vsp-text-button';
import VSPColoredButton from '../../components/vsp-colored-button';
import VSPIcon from '../../components/vsp-icon';
import VSPHeaderTitle from '../../components/vsp-header-title';
import { VSPHeaderBack } from '../../components/vsp-header-button';

import InvitedFriendsList from './invited-friends-list';
import { DataState } from '../../types/redux/new-ticket-screen/data';
import TicketColorPickerContainer from '../../containers/new-ticket-screen/ticket-color-picker';
import SelectPeriodModalContainer from '../../containers/new-ticket-screen/select-period-modal';
import FriendInviteModalContainer from '../../containers/new-ticket-screen/friend-invite-modal';

interface INewTicketScreenProps extends VSPScreenProps {
	// STATES
	ticketData: DataState;

	// ACTION CREATORS
	openPeriodModal: any;
	switchFromToTab: any;
	openInviteModal: any;
}

/**
 * NewTicketScreen
 */
export default class NewTicketScreen extends React.Component<
	INewTicketScreenProps
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle={<VSPHeaderTitle text='새로운 티켓' />}
					headerLeft={VSPHeaderBack(navigation)}
				/>
			),
		};
	};

	private _openModalWithFromtab = () => {
		this.props.switchFromToTab('from-tab');
		this.props.openPeriodModal();
	};

	private _openModalWithTotab = () => {
		this.props.switchFromToTab('to-tab');
		this.props.openPeriodModal();
	};

	public render() {
		const style = StyleSheet.create({
			scrollView: {
				paddingVertical: 4 * VERTICAL_UNIT,
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			categoryView: {
				marginVertical: 3 * VERTICAL_UNIT,
			},

			titleView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			footerView: {
				alignItems: 'flex-end',
			},

			titleText: {
				fontSize: THEME_HEADER_FONTSIZE,
				fontWeight: 'bold',
			},

			fromtoView: {
				flexDirection: 'row',
				marginTop: 4 * VERTICAL_UNIT,
				marginLeft: 4 * VERTICAL_UNIT,
			},

			dateInputView: {
				flexDirection: 'row',
				borderBottomWidth: 2,
				marginLeft: 4 * VERTICAL_UNIT,
				flex: 3,
				borderColor: this.props.ticketData.ticketColor,
			},

			timeInputView: {
				flexDirection: 'row',
				borderBottomWidth: 2,
				marginLeft: 4 * VERTICAL_UNIT,
				flex: 2,
				borderColor: this.props.ticketData.ticketColor,
			},

			valueText: {
				color: this.props.ticketData.ticketColor,
				fontSize: THEME_HEADER_FONTSIZE,
			},

			bottomView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
			},
		});

		return (
			<VSPContainer>
				<ScrollView contentContainerStyle={style.scrollView}>
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>티켓 제목</VSPText>
						<VSPTextInput
							placeholder='제목을 입력해 주세요.'
							fontSize={THEME_HEADER_FONTSIZE}
							marginTop={VERTICAL_UNIT}
							color={this.props.ticketData.ticketColor}
						/>
					</View>
					<View style={style.categoryView}>
						<View style={style.titleView}>
							<VSPText style={style.titleText}>기간</VSPText>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-end',
								}}
							>
								<VSPText style={style.valueText}>{12}</VSPText>
								<VSPText> 박 </VSPText>
								<VSPText style={style.valueText}>{13}</VSPText>
								<VSPText> 일</VSPText>
							</View>
						</View>
						<View style={style.fromtoView}>
							<VSPText fontSize={THEME_HEADER_FONTSIZE}>
								시작
							</VSPText>
							<TouchableOpacity
								style={style.dateInputView}
								activeOpacity={0.6}
								onPress={this._openModalWithFromtab}
							>
								<VSPIcon
									iconName='calendar'
									marginRight={VERTICAL_UNIT}
									color={this.props.ticketData.ticketColor}
								/>
								<VSPText
									color={this.props.ticketData.ticketColor}
								>
									{formatDateString(
										this.props.ticketData.period.from,
									)}
								</VSPText>
							</TouchableOpacity>
							<TouchableOpacity
								style={style.timeInputView}
								activeOpacity={0.6}
								onPress={this._openModalWithFromtab}
							>
								<VSPIcon
									iconName='clock'
									marginRight={VERTICAL_UNIT}
									color={this.props.ticketData.ticketColor}
								/>
								<VSPText
									color={this.props.ticketData.ticketColor}
								>
									{formatTimeString(
										this.props.ticketData.period.from,
									)}
								</VSPText>
							</TouchableOpacity>
						</View>
						<View style={style.fromtoView}>
							<VSPText fontSize={THEME_HEADER_FONTSIZE}>
								종료
							</VSPText>
							<TouchableOpacity
								style={style.dateInputView}
								activeOpacity={0.6}
								onPress={this._openModalWithTotab}
							>
								<VSPIcon
									iconName='calendar'
									marginRight={VERTICAL_UNIT}
									color={this.props.ticketData.ticketColor}
								/>
								<VSPText
									color={this.props.ticketData.ticketColor}
								>
									{formatDateString(
										this.props.ticketData.period.to,
									)}
								</VSPText>
							</TouchableOpacity>
							<TouchableOpacity
								style={style.timeInputView}
								activeOpacity={0.6}
								onPress={this._openModalWithTotab}
							>
								<VSPIcon
									iconName='clock'
									marginRight={VERTICAL_UNIT}
									color={this.props.ticketData.ticketColor}
								/>
								<VSPText
									color={this.props.ticketData.ticketColor}
								>
									{formatTimeString(
										this.props.ticketData.period.to,
									)}
								</VSPText>
							</TouchableOpacity>
						</View>
					</View>
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>테마 색상</VSPText>
						<TicketColorPickerContainer />
					</View>
					<View style={style.categoryView}>
						<View style={style.titleView}>
							<VSPText style={style.titleText}>친구</VSPText>
							<VSPTextButton
								icon='plus'
								fontSize={THEME_HEADER_FONTSIZE}
								color={this.props.ticketData.ticketColor}
								onPress={() => {
									this.props.openInviteModal();
								}}
							/>
						</View>
						<InvitedFriendsList
							ticketColor={this.props.ticketData.ticketColor}
						/>
						<View style={style.footerView}>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'flex-end',
								}}
							>
								<VSPText>총 </VSPText>
								<VSPText style={style.valueText}>{13}</VSPText>
								<VSPText> 명</VSPText>
							</View>
						</View>
					</View>
				</ScrollView>
				<View style={style.bottomView}>
					<VSPColoredButton
						text='완료'
						fontSize={THEME_HEADER_FONTSIZE}
						margin={2 * VERTICAL_UNIT}
						color={this.props.ticketData.ticketColor}
					/>
					<VSPBottomBar color={this.props.ticketData.ticketColor} />
				</View>

				<SelectPeriodModalContainer />
				<FriendInviteModalContainer />
			</VSPContainer>
		);
	}
}
