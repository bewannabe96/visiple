import * as actions from '../actions/vsp-new-ticket-screen';

import { RawColorType } from '../config/theme';
import { TICKET_COLORS, TicketHeaderColorType } from '../config/ticket_theme';

class VSPNewTicket {
    private _theme_color: RawColorType;

    constructor() {
        this._theme_color = TICKET_COLORS.HEADER[Object.keys(TICKET_COLORS.HEADER)[0]];
    }

    setThemeColor = (colorName: TicketHeaderColorType) => {
        this._theme_color = TICKET_COLORS.HEADER[colorName];
        return this;
    } 
}

const initialState = new VSPNewTicket;

export default function newTicket(state = initialState, action: any) {
    switch(action.type) {
        case actions.SET_THEME_COLOR:
            return state.setThemeColor(action.colorName)

        default:
            return state
    }
  }