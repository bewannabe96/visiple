/** @format */

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
declare const SET_TICKETCOLOR = 'visiple/new-ticket/SET_TICKETCOLOR';
declare const SET_FROMDATE = 'visiple/new-ticket/SET_FROMDATE';
declare const SET_TODATE = 'visiple/new-ticket/SET_TODATE';

/**
 * Data Action Creator Interfaces
 */
interface SetTicketColorAction {
	type: typeof SET_TICKETCOLOR;
	ticketColor: string;
}

interface SetFromDateAction {
	type: typeof SET_FROMDATE;
	date: Date;
}

interface SetToDateACtion {
	type: typeof SET_TODATE;
	date: Date;
}

/**
 * Data Action Types
 */
export type DataActions =
	| SetTicketColorAction
	| SetFromDateAction
	| SetToDateACtion;
