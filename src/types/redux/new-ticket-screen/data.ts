import { DateTime } from 'luxon';

import { NewTicket } from '../../data/ticket';

/**
 * Data State Interface
 */
export type DataState = NewTicket;

/**
 * Data Action Constants
 */
export const SET_THEMECOLOR = 'visiple/new-ticket/SET_THEMECOLOR';
export const SET_FROM_DATE = 'visiple/new-ticket/SET_FROMDATE';
export const SET_TO_DATE = 'visiple/new-ticket/SET_TODATE';

/**
 * Data Action Interfaces
 */
export interface SetTicketColorAction {
	type: typeof SET_THEMECOLOR;
	themeColor: string;
}

export interface SetFromDateAction {
	type: typeof SET_FROM_DATE;
	date: DateTime;
}

export interface SetToDateAction {
	type: typeof SET_TO_DATE;
	date: DateTime;
}

/**
 * Data Action Types
 */
export type DataActions =
	| SetTicketColorAction
	| SetFromDateAction
	| SetToDateAction;
