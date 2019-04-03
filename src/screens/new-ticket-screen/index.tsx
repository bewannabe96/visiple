import React from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { NewTicket } from '../../types/data/ticket';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import { VSPHeaderBack } from '../../components/vsp-header-button';

import TicketColorPickerContainer from '../../containers/new-ticket-screen/ticket-color-picker';
import SelectPeriodModalContainer from '../../containers/new-ticket-screen/select-period-modal';
import FriendInviteModalContainer from '../../containers/new-ticket-screen/friend-invite-modal';
import InvitedParticipantsListContainer from '../../containers/new-ticket-screen/invited-participants-list';

import {
	switchFromToTab,
	openPeriodModal,
	openInviteModal,
} from '../../actions/screens/new-ticket-screen';

interface INewTicketScreenProps {
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
	IVSPScreenProps<INewTicketScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='새로운 티켓'
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
			container: {
				flex: 1,
				paddingBottom: HORIZONTAL_UNIT(10),
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			categoryView: {
				marginBottom: HORIZONTAL_UNIT(6),
			},

			periodView: {
				flexDirection: 'row',
				marginBottom: HORIZONTAL_UNIT(6),
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
				alignItems: 'center',
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

			bottomButtonView: {
				position: 'absolute',
				width: '100%',
				bottom: 0,
			},
		});

		return (
			<VSPContainer>
				<ScrollView contentContainerStyle={style.container}>
					<View style={style.categoryView}>
						<Input placeholder='제목' />
					</View>
					<View style={style.periodView}>
						<TouchableOpacity
							style={{ flex: 2 }}
							activeOpacity={0.6}
							onPress={this._openModalWithFromtab}
						>
							<VSPText>시작</VSPText>
							<VSPText
								marginVertical={HORIZONTAL_UNIT()}
								color={this.props.newTicket.themeColor}
							>
								{this.props.newTicket.period.from.toLocaleString(
									DateTime.DATE_MED,
								)}
							</VSPText>
							<VSPText color={this.props.newTicket.themeColor}>
								{`${this.props.newTicket.period.from.toLocaleString(
									DateTime.TIME_24_SIMPLE,
								)} (${
									this.props.newTicket.period.from
										.offsetNameShort
								})`}
							</VSPText>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ flex: 2 }}
							activeOpacity={0.6}
							onPress={this._openModalWithTotab}
						>
							<VSPText>종료</VSPText>
							<VSPText
								marginVertical={HORIZONTAL_UNIT()}
								color={this.props.newTicket.themeColor}
							>
								{this.props.newTicket.period.to.toLocaleString(
									DateTime.DATE_MED,
								)}
							</VSPText>
							<VSPText color={this.props.newTicket.themeColor}>
								{`${this.props.newTicket.period.to.toLocaleString(
									DateTime.TIME_24_SIMPLE,
								)} (${
									this.props.newTicket.period.to
										.offsetNameShort
								})`}
							</VSPText>
						</TouchableOpacity>
					</View>
					{/* {days === 0 && (
							<View style={style.footerView}>
								<VSPText style={style.valueText}>당일</VSPText>
							</View>
						)}
						{days !== 0 && (
							<View style={style.footerView}>
								<VSPText
									style={style.valueText}
								>{`${days}`}</VSPText>
								<VSPText theme='grey'>박</VSPText>
								<VSPText style={style.valueText}>{`${days +
									1}`}</VSPText>
								<VSPText theme='grey'>일</VSPText>
							</View>
						)} */}
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>테마 색상</VSPText>
						<TicketColorPickerContainer />
					</View>
					<View style={style.categoryView}>
						<View style={style.titleView}>
							<VSPText style={style.titleText}>
								함께하는 친구
							</VSPText>
							<Icon
								name='plus'
								type='vspicon'
								color={this.props.newTicket.themeColor}
								size={THEME_HEADER_FONTSIZE}
								onPress={() => {
									this.props.openInviteModal();
								}}
							/>
						</View>
						<InvitedParticipantsListContainer />
						<View style={style.footerView}>
							<VSPText color={THEME_COLORS.grey}>총</VSPText>
							<VSPText style={style.valueText}>{`${
								this.props.newTicket.participants.length
							}`}</VSPText>
							<VSPText color={THEME_COLORS.grey}>명</VSPText>
						</View>
					</View>
				</ScrollView>
				<SafeAreaView style={style.bottomButtonView}>
					<Button
						title='완료'
						buttonStyle={{
							borderRadius: 0,
							backgroundColor: this.props.newTicket.themeColor,
						}}
						titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
					/>
				</SafeAreaView>
				<SelectPeriodModalContainer />
				<FriendInviteModalContainer />
			</VSPContainer>
		);
	}
}
