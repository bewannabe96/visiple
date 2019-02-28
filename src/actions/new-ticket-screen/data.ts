import { DateTime } from 'luxon';

import {
	SET_THEMECOLOR,
	SET_FROM_DATETIME,
	SET_TO_DATETIME,
	SetTicketColorAction,
	SetFromDateTimeAction,
	SetToDateTimeAction,
} from '../../types/redux/new-ticket-screen/data';

/**
 * Data Action Creators
 */
export const setTicketColor = (themeColor: string): SetTicketColorAction => ({
	type: SET_THEMECOLOR,
	themeColor,
});

export const setFromDateTime = (date: DateTime): SetFromDateTimeAction => ({
	type: SET_FROM_DATETIME,
	date,
});

export const setToDateTime = (date: DateTime): SetToDateTimeAction => ({
	type: SET_TO_DATETIME,
	date,
});
