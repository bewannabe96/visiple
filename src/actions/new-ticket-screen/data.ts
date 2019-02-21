import {
	SET_THEMECOLOR,
	SET_FROM_DATE,
	SET_TO_DATE,
} from '../../types/redux/new-ticket-screen/data';

/**
 * Data Action Creators
 */
export const setTicketColor = (themeColor: string) => ({
	type: SET_THEMECOLOR,
	themeColor,
});

export const setFromDate = (date: Date) => ({
	type: SET_FROM_DATE,
	date,
});

export const setToDate = (date: Date) => ({
	type: SET_TO_DATE,
	date,
});
