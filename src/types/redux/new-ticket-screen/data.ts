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
export const SET_FROM_DATETIME = 'visiple/new-ticket/SET_FROM_DATETIME';
export const SET_TO_DATETIME = 'visiple/new-ticket/SET_TO_DATETIME';

/**
 * Data Action Interfaces
 */
export interface SetTicketColorAction {
	type: typeof SET_THEMECOLOR;
	themeColor: string;
}

export interface SetFromDateTimeAction {
	type: typeof SET_FROM_DATETIME;
	date: DateTime;
}

export interface SetToDateTimeAction {
	type: typeof SET_TO_DATETIME;
	date: DateTime;
}

/**
 * Data Action Types
 */
export type DataActions =
	| SetTicketColorAction
	| SetFromDateTimeAction
	| SetToDateTimeAction;
