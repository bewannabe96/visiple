import {
    SET_TICKETCOLOR,
    OPEN_PERIOD_MODAL,
    CLOSE_PERIOD_MODAL,
    TabType,
    SWITCH_FROMTO_TAB
} from "../types/redux/new-ticket-types";
import { TicketHeaderColorType } from "../types/config/ticket_theme";

/**
 * Ticket Data Action Creators
 */
export const setTicketColor = (ticketColor: TicketHeaderColorType) => (
    { 
        type: SET_TICKETCOLOR,
        ticketColor
    }
);

/**
 * Screen Action Creators
 */
export const openPeriodModal = () => ({ type: OPEN_PERIOD_MODAL });

export const closePeriodModal = () => ({ type: CLOSE_PERIOD_MODAL });

export const switchFromToTab = (tab: TabType) => (
    {
        type: SWITCH_FROMTO_TAB,
        tab,
    }
);