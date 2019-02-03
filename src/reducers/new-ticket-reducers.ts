import {
    TicketDataState,
    ScreenState,
    TicketDataActionType,
    ScreenActionType,
    SET_TICKETCOLOR,
    OPEN_PERIOD_MODAL,
    CLOSE_PERIOD_MODAL,
    SWITCH_FROMTO_TAB,
    SET_PERIOD,
    OPEN_INVITE_MODAL,
    CLOSE_INVITE_MODAL
} from "../types/redux/new-ticket-types";

import { TICKET_HEADER_COLORS_KEYS } from "../types/config/ticket_theme";
import { combineReducers } from "redux";

/**
 * Ticket Data Reducer
 */
const ticketDataInitialState: TicketDataState = {
    ticketColor: TICKET_HEADER_COLORS_KEYS[0],
    period: {
        fromDate: new Date(),
        toDate: new Date(),
    }
};

function TicketDataReducer(state = ticketDataInitialState, action: TicketDataActionType) {
    switch(action.type) {
        case SET_TICKETCOLOR:
            return {
                ...state,
                ticketColor: action.ticketColor
            };

        case SET_PERIOD:
            return {
                ...state,
                period: {
                    fromDate: action.tab==='from-tab' ? action.date : state.period.fromDate,
                    toDate: action.tab==='to-tab' ? action.date : state.period.toDate
                }
            }

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
    inviteModalVisible: false,
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

        case OPEN_INVITE_MODAL:
            return {
                ...state,
                inviteModalVisible: true
            };

        case CLOSE_INVITE_MODAL:
            return {
                ...state,
                inviteModalVisible: false
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