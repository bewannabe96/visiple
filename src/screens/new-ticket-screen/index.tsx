import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import {
	VSP_EDGE_PADDING,
	VSP_TOP_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { formatDateString, formatTimeString } from '../../types/lib/date';
import { NewTicket } from '../../types/data/ticket';

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
import TicketColorPickerContainer from '../../containers/new-ticket-screen/ticket-color-picker';
import SelectPeriodModalContainer from '../../containers/new-ticket-screen/select-period-modal';
import FriendInviteModalContainer from '../../containers/new-ticket-screen/friend-invite-modal';

import {
	switchFromToTab,
	openPeriodModal,
	openInviteModal,
} from '../../actions/new-ticket-screen/ui';

interface INewTicketScreenProps extends IVSPScreenProps {
	/**
	 * Ticket Data
	 */
	newTicket: NewTicket;

	// ACTION CREATORS
	openPeriodModal: typeof openPeriodModal;
	switchFromToTab: typeof switchFromToTab;
	openInviteModal: typeof openInviteModal;
}

/**
 * NewTicketScreen
 *
 * @property
 * - ```newTicket```(required): Ticket Data
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
				paddingVertical: VSP_TOP_PADDING,
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			categoryView: {
				marginVertical: HORIZONTAL_UNIT(3),
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
				marginTop: HORIZONTAL_UNIT(4),
				marginLeft: HORIZONTAL_UNIT(4),
			},

			dateInputView: {
				flexDirection: 'row',
				borderBottomWidth: 2,
				marginLeft: HORIZONTAL_UNIT(4),
				flex: 3,
				borderColor: this.props.newTicket.themeColor,
			},

			timeInputView: {
				flexDirection: 'row',
				borderBottomWidth: 2,
				marginLeft: HORIZONTAL_UNIT(4),
				flex: 2,
				borderColor: this.props.newTicket.themeColor,
			},

			valueText: {
				color: this.props.newTicket.themeColor,
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
							marginTop={HORIZONTAL_UNIT()}
							color={this.props.newTicket.themeColor}
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
									marginRight={HORIZONTAL_UNIT()}
									color={this.props.newTicket.themeColor}
								/>
								<VSPText
									color={this.props.newTicket.themeColor}
								>
									{formatDateString(
										this.props.newTicket.period.from,
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
									marginRight={HORIZONTAL_UNIT()}
									color={this.props.newTicket.themeColor}
								/>
								<VSPText
									color={this.props.newTicket.themeColor}
								>
									{formatTimeString(
										this.props.newTicket.period.from,
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
									marginRight={HORIZONTAL_UNIT()}
									color={this.props.newTicket.themeColor}
								/>
								<VSPText
									color={this.props.newTicket.themeColor}
								>
									{formatDateString(
										this.props.newTicket.period.to,
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
									marginRight={HORIZONTAL_UNIT()}
									color={this.props.newTicket.themeColor}
								/>
								<VSPText
									color={this.props.newTicket.themeColor}
								>
									{formatTimeString(
										this.props.newTicket.period.to,
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
								color={this.props.newTicket.themeColor}
								onPress={() => {
									this.props.openInviteModal();
								}}
							/>
						</View>
						<InvitedFriendsList
							themeColor={this.props.newTicket.themeColor}
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
						margin={2 * HORIZONTAL_UNIT()}
						color={this.props.newTicket.themeColor}
					/>
					<VSPBottomBar color={this.props.newTicket.themeColor} />
				</View>

				<SelectPeriodModalContainer />
				<FriendInviteModalContainer />
			</VSPContainer>
		);
	}
}
