import { TicketDataState, TicketDataActionType, SET_TICKETCOLOR } from "../types/redux/new-ticket-types";

import { TICKET_HEADER_COLORS_KEYS } from "../types/config/ticket_theme";
import { combineReducers } from "redux";

/**
 * Ticket Data Reducer
 */
const initialState: TicketDataState = {
    ticketColor: TICKET_HEADER_COLORS_KEYS[0],
};

function TicketDataReducer(state = initialState, action: TicketDataActionType) {
    switch(action.type) {
        case SET_TICKETCOLOR:
            return {
                ...state,
                ticketColor: action.ticketColor
            };

        default:
            return state;
    }
}

/**
 * New Ticket Screen Combined Reducer
 */
const NewTicketScreenReducer = combineReducers({
    TicketData: TicketDataReducer,
})

export default NewTicketScreenReducer;