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
import InvitedFriendsListContainer from '../../containers/new-ticket-screen/invited-friends-list';

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

			periodView: {
				flexDirection: 'row',
				marginTop: HORIZONTAL_UNIT(3),
				alignItems: 'center',
				paddingVertical: HORIZONTAL_UNIT(2),
			},

			arrowIconView: {
				flex: 1,
				alignItems: 'center',
			},

			titleView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
			},

			titleText: {
				fontSize: THEME_HEADER_FONTSIZE,
			},

			valueText: {
				color: this.props.newTicket.themeColor,
				fontSize: THEME_HEADER_FONTSIZE,
				marginHorizontal: HORIZONTAL_UNIT(),
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
						<VSPTextInput
							placeholder='티켓 제목을 입력해 주세요.'
							fontSize={THEME_HEADER_FONTSIZE}
							marginTop={HORIZONTAL_UNIT()}
							color={this.props.newTicket.themeColor}
						/>
					</View>
					<View style={style.periodView}>
						<TouchableOpacity
							activeOpacity={0.6}
							onPress={this._openModalWithFromtab}
						>
							<VSPText>시작</VSPText>
							<VSPText
								marginY={HORIZONTAL_UNIT()}
								color={this.props.newTicket.themeColor}
							>
								{formatDateString(
									this.props.newTicket.period.from,
								)}
							</VSPText>
							<VSPText color={this.props.newTicket.themeColor}>
								{formatTimeString(
									this.props.newTicket.period.from,
								)}
							</VSPText>
						</TouchableOpacity>
						<View style={style.arrowIconView}>
							<VSPIcon
								iconName='rightarrow'
								theme='grey'
								size={HORIZONTAL_UNIT(6)}
							/>
						</View>
						<TouchableOpacity
							activeOpacity={0.6}
							onPress={this._openModalWithTotab}
						>
							<VSPText>종료</VSPText>
							<VSPText
								marginY={HORIZONTAL_UNIT()}
								color={this.props.newTicket.themeColor}
							>
								{formatDateString(
									this.props.newTicket.period.to,
								)}
							</VSPText>
							<VSPText color={this.props.newTicket.themeColor}>
								{formatTimeString(
									this.props.newTicket.period.to,
								)}
							</VSPText>
						</TouchableOpacity>
					</View>
					<View style={style.footerView}>
						<VSPText style={style.valueText}>{`12`}</VSPText>
						<VSPText theme='grey'>박</VSPText>
						<VSPText style={style.valueText}>{`13`}</VSPText>
						<VSPText theme='grey'>일</VSPText>
					</View>
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>테마 색상</VSPText>
						<TicketColorPickerContainer />
					</View>
					<View style={style.categoryView}>
						<View style={style.titleView}>
							<VSPText style={style.titleText}>
								함께하는 친구
							</VSPText>
							<VSPTextButton
								icon='plus'
								fontSize={THEME_HEADER_FONTSIZE}
								color={this.props.newTicket.themeColor}
								onPress={() => {
									this.props.openInviteModal();
								}}
							/>
						</View>
						<InvitedFriendsListContainer />
						<View style={style.footerView}>
							<VSPText theme='grey'>총</VSPText>
							<VSPText style={style.valueText}>{`${
								this.props.newTicket.participants.length
							}`}</VSPText>
							<VSPText theme='grey'>명</VSPText>
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
				</View>

				<SelectPeriodModalContainer />
				<FriendInviteModalContainer />
			</VSPContainer>
		);
	}
}
