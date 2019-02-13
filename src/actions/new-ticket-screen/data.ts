/** @format */

import {
	SET_TICKETCOLOR,
	SET_FROM_DATE,
	SET_TO_DATE,
} from '../../types/redux/new-ticket-screen/data';

/**
 * Data Action Creators
 */
export const setTicketColor = (ticketColor: string) => ({
	type: SET_TICKETCOLOR,
	ticketColor,
});

export const setFromDate = (date: Date) => ({
	type: SET_FROM_DATE,
	date,
});

export const setToDate = (date: Date) => ({
	type: SET_TO_DATE,
	date,
});
