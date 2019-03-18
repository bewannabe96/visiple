import { NewTicket } from '../data/ticket';

/**
 * NewTicketState
 */
export type NewTicketState = NewTicket;

/**
 * Action Constants
 */
// prettier-ignore
export const SET_THEMECOLOR = 'visiple/new-ticket/SET_THEMECOLOR';
// prettier-ignore
export const SET_FROM_DATE = 'visiple/new-ticket/SET_FROM_DATE';
// prettier-ignore
export const SET_TO_DATE = 'visiple/new-ticket/SET_TO_DATE';

/**
 * Action Interfaces
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
 * Action Types
 */
export type Actions =
	| SetTicketColorAction
	| SetFromDateAction
	| SetToDateAction;
