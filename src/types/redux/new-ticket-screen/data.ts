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
 * Data Action Creator Interfaces
 */
interface SetTicketColorAction {
	type: typeof SET_THEMECOLOR;
	themeColor: string;
}

interface SetFromDateAction {
	type: typeof SET_FROM_DATE;
	date: Date;
}

interface SetToDateACtion {
	type: typeof SET_TO_DATE;
	date: Date;
}

/**
 * Data Action Types
 */
export type DataActions =
	| SetTicketColorAction
	| SetFromDateAction
	| SetToDateACtion;
