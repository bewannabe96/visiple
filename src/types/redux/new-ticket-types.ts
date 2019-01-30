import { TicketHeaderColorType } from "../config/ticket_theme";

/**
 * New Ticket Screen State Interface
 */
export interface NewTicketScreenState {
    TicketData: TicketDataState
}

/**
 * Ticket Data State Interface
 */
export interface TicketDataState {
    ticketColor: TicketHeaderColorType
}

/**
 * Ticket Data Action Constants
 */
export const SET_TICKETCOLOR = 'visiple/new-ticket/SET_TICKETCOLOR';

/**
 * Ticket Data Action Creator Interfaces
 */
interface SetTicketColorAction {
    type: typeof SET_TICKETCOLOR
    ticketColor: TicketHeaderColorType
}

/**
 * Ticket Data Action types
 */
export type TicketDataActionType = SetTicketColorAction;