/**
 * Data State Interface
 */
export interface DataState {
	ticketColor: string;
	period: {
		from: Date;
		to: Date;
	};
}

/**
 * Data Action Constants
 */
export const SET_TICKETCOLOR = 'visiple/new-ticket/SET_TICKETCOLOR';
export const SET_FROM_DATE = 'visiple/new-ticket/SET_FROMDATE';
export const SET_TO_DATE = 'visiple/new-ticket/SET_TODATE';

/**
 * Data Action Creator Interfaces
 */
interface SetTicketColorAction {
	type: typeof SET_TICKETCOLOR;
	ticketColor: string;
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
