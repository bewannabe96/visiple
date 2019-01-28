import * as actions from '../actions/new-ticket-actions';

import { TICKET_COLORS } from '../config/ticket_theme';

import VSPNewTicket from '../models/vsp-new-ticket';

const initialState = new VSPNewTicket(TICKET_COLORS.HEADER[Object.keys(TICKET_COLORS.HEADER)[0]]);

export default function newTicket(state = initialState, action: any) {
    switch(action.type) {
        case actions.SET_THEME_COLOR:
            return state.setThemeColor(action.colorName)

        default:
            return state
    }
  }