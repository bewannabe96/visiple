import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/lib/size';
import {
	addShadowProperties,
	THEME_FONT,
	THEME_COLORS,
} from '../../types/lib/theme';
import { Ticket } from '../../types/data/ticket';
import { UserID } from '../../types/data/user';
import {
	ticketFixedTexts,
	ticketFixedColors,
	ticketCardMaxProfiles,
} from '../../config/ticket.json';

import VSPProfile from '../../components/vsp-profile';

interface ITicketCardProps {
	/**
	 * Ticket data
	 */
	ticket: Ticket;

	/**
	 * Callback function when card pressed
	 */
	onPress?: () => void;
}

/**
 * TicketCard
 *
 * @property
 * - ```ticket```(required): Ticket data
 * - ```onPress```: Callback function when card pressed
 */
export default class TicketCard extends React.Component<ITicketCardProps> {
	private _renderParticipants(ids: UserID[]) {
		if (ids.length <= ticketCardMaxProfiles) {
			return this.props.ticket.participants.map((uid: UserID) => (
				<VSPProfile
					key={uid}
					size={HORIZONTAL_UNIT(5)}
					marginLeft={HORIZONTAL_UNIT()}
				/>
			));
		} else {
			let rtnElement = this.props.ticket.participants
				.slice(0, ticketCardMaxProfiles - 1)
				.map((uid: UserID) => (
					<VSPProfile
						key={uid}
						size={HORIZONTAL_UNIT(5)}
						marginLeft={HORIZONTAL_UNIT()}
					/>
				));
			rtnElement.push(
				<VSPProfile
					key={
						this.props.ticket.participants[
							ticketCardMaxProfiles - 1
						]
					}
					size={HORIZONTAL_UNIT(5)}
					marginLeft={HORIZONTAL_UNIT()}
					overlaidText={`+${ids.length - ticketCardMaxProfiles + 1}`}
					blur={true}
				/>,
			);
			return rtnElement;
		}
	}

	public render() {
		const style = StyleSheet.create({
			ticketView: {
				marginTop: HORIZONTAL_UNIT(5),
				marginHorizontal: VSP_EDGE_PADDING,
				...addShadowProperties(),
			},

			headerView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'flex-end',
				height: HORIZONTAL_UNIT(6),
				paddingHorizontal: HORIZONTAL_UNIT(3),
				paddingVertical: HORIZONTAL_UNIT(),
				borderTopLeftRadius: HORIZONTAL_UNIT(2),
				borderTopRightRadius: HORIZONTAL_UNIT(2),
			},

			bodyView: {
				justifyContent: 'space-between',
				height: HORIZONTAL_UNIT(18),
				backgroundColor: ticketFixedColors.body,
				paddingHorizontal: HORIZONTAL_UNIT(3),
				paddingVertical: HORIZONTAL_UNIT(2),
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: HORIZONTAL_UNIT(7),
				backgroundColor: ticketFixedColors.footer,
				paddingHorizontal: HORIZONTAL_UNIT(3),
				paddingVertical: HORIZONTAL_UNIT(),
				borderBottomLeftRadius: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(2),
			},

			topleftText: {
				fontSize: HORIZONTAL_UNIT(2.5),
				fontFamily: THEME_FONT,
				fontWeight: 'bold',
				color: ticketFixedColors.text,
			},

			toprightSecondaryText: {
				fontSize: HORIZONTAL_UNIT(),
				fontFamily: THEME_FONT,
				color: ticketFixedColors.text,
			},

			toprightPrimaryText: {
				fontSize: HORIZONTAL_UNIT(2),
				fontFamily: THEME_FONT,
				color: ticketFixedColors.text,
			},

			fromtoView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			fromtoInnerView: {
				flex: 1,
				alignItems: 'flex-start',
			},

			fromtoText: {
				fontFamily: THEME_FONT,
				fontWeight: 'bold',
				fontSize: HORIZONTAL_UNIT(2),
				color: ticketFixedColors.text,
			},

			dateText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(3),
				color: THEME_COLORS.grey,
				marginTop: HORIZONTAL_UNIT(),
			},

			titleText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(3),
				color: this.props.ticket.themeColor,
			},

			passengerView: {
				flexDirection: 'row',
				alignItems: 'flex-end',
			},

			passengerText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(1.5),
				color: ticketFixedColors.text,
			},

			barcode: {
				width: '35%',
				borderRadius: 1,
				height: HORIZONTAL_UNIT(4.5),
				resizeMode: 'cover',
				tintColor: ticketFixedColors.text,
			},
		});

		return (
			<TouchableOpacity
				style={style.ticketView}
				onPress={this.props.onPress}
			>
				<View
					style={{
						...style.headerView,
						backgroundColor: this.props.ticket.themeColor,
					}}
				>
					<Text style={style.topleftText}>
						{ticketFixedTexts.topLeft}
					</Text>
					<View>
						<Text style={style.toprightSecondaryText}>
							{ticketFixedTexts.topRight.secondary}
						</Text>
						<Text style={style.toprightPrimaryText}>
							{ticketFixedTexts.topRight.primary}
						</Text>
					</View>
				</View>
				<View style={style.bodyView}>
					<View style={style.fromtoView}>
						<View style={style.fromtoInnerView}>
							<Text style={style.fromtoText}>
								{ticketFixedTexts.from}
							</Text>
							<Text style={style.dateText}>
								{this.props.ticket.period.from.toLocaleDateString()}
							</Text>
						</View>
						<View style={style.fromtoInnerView}>
							<Text style={style.fromtoText}>
								{ticketFixedTexts.to}
							</Text>
							<Text style={style.dateText}>
								{this.props.ticket.period.to.toLocaleDateString()}
							</Text>
						</View>
					</View>
					<Text style={style.titleText}>
						{this.props.ticket.title}
					</Text>
				</View>
				<View style={style.footerView}>
					<Image
						style={style.barcode}
						source={require('../../assets/source/barcode.png')}
					/>
					<View style={style.passengerView}>
						<Text style={style.passengerText}>
							{ticketFixedTexts.passenger}
						</Text>
						{this._renderParticipants(
							this.props.ticket.participants,
						)}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
