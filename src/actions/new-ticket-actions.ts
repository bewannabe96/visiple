/** @format */

import {
	TabType,
	SET_TICKETCOLOR,
	OPEN_PERIOD_MODAL,
	CLOSE_PERIOD_MODAL,
	SWITCH_FROMTO_TAB,
	SET_PERIOD,
	OPEN_INVITE_MODAL,
	CLOSE_INVITE_MODAL,
} from '../types/redux/new-ticket-types';
import { TicketHeaderColorType } from '../types/data/ticket/ticket_theme';

/**
 * Ticket Data Action Creators
 */
export const setTicketColor = (ticketColor: TicketHeaderColorType) => ({
	type: SET_TICKETCOLOR,
	ticketColor,
});

export const setPeriod = (tab: TabType, date: Date) => ({
	type: SET_PERIOD,
	tab,
	date,
});

/**
 * Screen Action Creators
 */
export const openPeriodModal = () => ({ type: OPEN_PERIOD_MODAL });

export const closePeriodModal = () => ({ type: CLOSE_PERIOD_MODAL });

export const switchFromToTab = (tab: TabType) => ({
	type: SWITCH_FROMTO_TAB,
	tab,
});

export const openInviteModal = () => ({ type: OPEN_INVITE_MODAL });

export const closeInviteModal = () => ({ type: CLOSE_INVITE_MODAL });
