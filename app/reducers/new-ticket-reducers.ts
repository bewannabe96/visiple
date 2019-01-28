import * as actions from '../actions/new-ticket-actions';

import { TICKET_COLORS } from '../config/ticket_theme';

import VSPNewTicket from '../models/vsp-new-ticket';

const initialState = new VSPNewTicket;

export default function newTicketReducer(state = initialState, action: any) {
    switch(action.type) {
        case actions.SET_THEME_COLOR:
            return state.setThemeColor(action.colorName)

        default:
            return state
    }
  }