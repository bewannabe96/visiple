import * as Actions from '../actions/new-ticket-actions';
import { TICKET_HEADER_COLORS_KEYS } from '../config/ticket_theme';

const initialState = {
    themeColor: TICKET_HEADER_COLORS_KEYS[0],
};

export default function NewTicketReducer(state = initialState, action: any) {
    switch(action.type) {
        case Actions.SET_THEME_COLOR:
            return {...state, themeColor: action.themeColor};

        default:
            return state;
    }
  }