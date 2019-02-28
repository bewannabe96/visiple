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
export const SET_FROM_DATE = 'visiple/new-ticket/SET_FROM_DATE';
export const SET_TO_DATE = 'visiple/new-ticket/SET_TO_DATE';

/**
 * Data Action Interfaces
 */
export interface SetTicketColorAction {
	type: typeof SET_THEMECOLOR;
	themeColor: string;
}

export interface SetFromDateAction {
	type: typeof SET_FROM_DATE;
	year: number;
	month: number;
	day: number;
}

export interface SetToDateAction {
	type: typeof SET_TO_DATE;
	year: number;
	month: number;
	day: number;
}

/**
 * Data Action Types
 */
export type DataActions =
	| SetTicketColorAction
	| SetFromDateAction
	| SetToDateAction;
