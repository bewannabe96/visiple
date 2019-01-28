import { RawColorType, THEME_COLORS } from "../config/theme";
import { TICKET_COLORS, TicketHeaderColorType } from "../config/ticket_theme";

export default class VSPNewTicket {
    _theme_color: RawColorType;

    constructor() {
        this._theme_color = THEME_COLORS['none'];
    }

    setThemeColor = (colorName: TicketHeaderColorType) => {
        this._theme_color = TICKET_COLORS.HEADER[colorName];
        return this;
    } 
}