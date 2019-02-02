import {
    TicketDataState,
    ScreenState,
    TicketDataActionType,
    ScreenActionType,
    SET_TICKETCOLOR,
    OPEN_PERIOD_MODAL,
    CLOSE_PERIOD_MODAL,
    SWITCH_FROMTO_TAB
} from "../types/redux/new-ticket-types";

import { TICKET_HEADER_COLORS_KEYS } from "../types/config/ticket_theme";
import { combineReducers } from "redux";

/**
 * Ticket Data Reducer
 */
const ticketDataInitialState: TicketDataState = {
    ticketColor: TICKET_HEADER_COLORS_KEYS[0],
};

function TicketDataReducer(state = ticketDataInitialState, action: TicketDataActionType) {
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
 * Screen Reducer
 */
const screenInitialState: ScreenState = {
    periodModalVisible: false,
    fromtoTab: 'from-tab',
}

function ScreenReducer(state = screenInitialState, action: ScreenActionType) {
    switch(action.type) {
        case OPEN_PERIOD_MODAL:
            return {
                ...state,
                periodModalVisible: true
            };

        case CLOSE_PERIOD_MODAL:
            return {
                ...state,
                periodModalVisible: false
            };

        case SWITCH_FROMTO_TAB:
            return {
                ...state,
                fromtoTab: action.tab
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
    Screen: ScreenReducer,
})

export default NewTicketScreenReducer;