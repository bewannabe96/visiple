import { TicketHeaderColorType } from '../../config/ticket_theme';

/**
 * Data State Interface
 */
type FromTo = 'from' | 'to';

export interface DataState {
	ticketColor: TicketHeaderColorType;
	period: { [key in FromTo]: Date };
}

/**
 * Data Action Constants
 */
declare const SET_TICKETCOLOR = 'visiple/new-ticket/SET_TICKETCOLOR';
declare const SET_PERIOD = 'visiple/new-ticket/SET_PERIOD';

/**
 * Data Action Creator Interfaces
 */
interface SetTicketColorAction {
	type: typeof SET_TICKETCOLOR;
	ticketColor: TicketHeaderColorType;
}

interface SetPeriodAction {
	type: typeof SET_PERIOD;
	fromto: FromTo;
	date: Date;
}

/**
 * Data Action Types
 */
export type DataActions = SetTicketColorAction | SetPeriodAction;
