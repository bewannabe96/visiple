import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../../types/lib/size';
import { addShadowProperties, THEME_FONT } from '../../types/lib/theme';
import { TICKET_COLORS, TICKET_TEXTS } from '../../types/data/ticket/theme';
import Ticket from '../../types/data/ticket';

import VSPProfile from '../../components/vsp-profile';

interface ITicketsListProps extends NavigationInjectedProps {
	/**
	 * Date which it starts from
	 */
	tickets: Ticket[];
}

/**
 * TicketsList
 */
class TicketsList extends React.Component<ITicketsListProps> {
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
				backgroundColor: TICKET_COLORS.BODY,
				paddingHorizontal: HORIZONTAL_UNIT(3),
				paddingVertical: HORIZONTAL_UNIT(2),
			},

			footerView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				height: HORIZONTAL_UNIT(7),
				backgroundColor: TICKET_COLORS.FOOTER,
				paddingHorizontal: HORIZONTAL_UNIT(4),
				paddingVertical: HORIZONTAL_UNIT(),
				borderBottomLeftRadius: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(2),
			},

			topleftText: {
				fontSize: HORIZONTAL_UNIT(2.5),
				fontFamily: THEME_FONT,
				fontWeight: 'bold',
				color: TICKET_COLORS.TEXT,
			},

			toprightSecondaryText: {
				fontSize: HORIZONTAL_UNIT(),
				fontFamily: THEME_FONT,
				color: TICKET_COLORS.TEXT,
			},

			toprightPrimaryText: {
				fontSize: HORIZONTAL_UNIT(2),
				fontFamily: THEME_FONT,
				color: TICKET_COLORS.TEXT,
			},

			fromtoView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			fromtoInnerView: {
				flex: 1,
				alignItems: 'flex-start',
				marginHorizontal: HORIZONTAL_UNIT(),
			},

			fromtoText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(2),
				color: TICKET_COLORS.TEXT,
			},

			dateText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(3),
				color: TICKET_COLORS.DATE,
			},

			titleText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(3),
				color: TICKET_COLORS.TITLE,
			},

			passengerView: {
				flexDirection: 'row',
				alignItems: 'flex-end',
			},

			passengerText: {
				fontFamily: THEME_FONT,
				fontSize: HORIZONTAL_UNIT(1.5),
				color: TICKET_COLORS.TEXT,
			},

			barcode: {
				width: '40%',
				borderRadius: 2,
				height: HORIZONTAL_UNIT(5),
				resizeMode: 'cover',
				tintColor: TICKET_COLORS.TEXT,
			},
		});

		return (
			<View>
				{this.props.tickets.map((ticket: Ticket) => (
					<TouchableOpacity
						key={ticket.id}
						style={style.ticketView}
						onPress={() => {
							this.props.navigation.navigate('TicketViewScreen');
						}}
					>
						<View
							style={{
								...style.headerView,
								backgroundColor: ticket.themeColor,
							}}
						>
							<Text style={style.topleftText}>
								{TICKET_TEXTS.topLeft}
							</Text>
							<View>
								<Text style={style.toprightSecondaryText}>
									{TICKET_TEXTS.topRight.secondary}
								</Text>
								<Text style={style.toprightPrimaryText}>
									{TICKET_TEXTS.topRight.primary}
								</Text>
							</View>
						</View>
						<View style={style.bodyView}>
							<View style={style.fromtoView}>
								<View style={style.fromtoInnerView}>
									<Text style={style.fromtoText}>
										{TICKET_TEXTS.from}
									</Text>
									<Text style={style.dateText}>
										{ticket.period.from.toLocaleDateString()}
									</Text>
								</View>
								<View style={style.fromtoInnerView}>
									<Text style={style.fromtoText}>
										{TICKET_TEXTS.to}
									</Text>
									<Text style={style.dateText}>
										{ticket.period.to.toLocaleDateString()}
									</Text>
								</View>
							</View>
							<Text style={style.titleText}>{ticket.title}</Text>
						</View>
						<View style={style.footerView}>
							<Image
								style={style.barcode}
								source={require('../../assets/source/barcode.png')}
							/>
							<View style={style.passengerView}>
								<Text style={style.passengerText}>
									{TICKET_TEXTS.passenger}
								</Text>
								<VSPProfile
									size={HORIZONTAL_UNIT(5)}
									marginLeft={HORIZONTAL_UNIT()}
									castShadow={false}
								/>
								<VSPProfile
									size={HORIZONTAL_UNIT(5)}
									marginLeft={HORIZONTAL_UNIT()}
									castShadow={false}
								/>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

export default withNavigation(TicketsList);
