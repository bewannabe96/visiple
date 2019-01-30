import { SET_TICKETCOLOR } from "../types/redux/new-ticket-types";
import { TicketHeaderColorType } from "../config/ticket_theme";

/**
 * Ticket Data Action Creators
 */
export const setTicketColor = (ticketColor: TicketHeaderColorType) => (
    { 
        type: SET_TICKETCOLOR,
        ticketColor
    }
);