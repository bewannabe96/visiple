import { DateTime } from 'luxon';

import {
	SET_THEMECOLOR,
	SET_FROM_DATE,
	SET_TO_DATE,
	SetTicketColorAction,
	SetFromDateAction,
	SetToDateAction,
} from '../../types/redux/new-ticket-screen/data';

/**
 * Data Action Creators
 */
export const setTicketColor = (themeColor: string): SetTicketColorAction => ({
	type: SET_THEMECOLOR,
	themeColor,
});

export const setFromDate = (
	year: number,
	month: number,
	day: number,
): SetFromDateAction => ({
	type: SET_FROM_DATE,
	year,
	month,
	day,
});

export const setToDate = (
	year: number,
	month: number,
	day: number,
): SetToDateAction => ({
	type: SET_TO_DATE,
	year,
	month,
	day,
});
