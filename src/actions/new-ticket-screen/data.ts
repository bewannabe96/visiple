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

export const setFromDate = (date: DateTime): SetFromDateAction => ({
	type: SET_FROM_DATE,
	date,
});

export const setToDate = (date: DateTime): SetToDateAction => ({
	type: SET_TO_DATE,
	date,
});
