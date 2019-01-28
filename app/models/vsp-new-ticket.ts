import { RawColorType } from "../config/theme";
import { TICKET_COLORS, TicketHeaderColorType } from "../config/ticket_theme";

export default class VSPNewTicket {
    _theme_color: RawColorType;

    constructor(initialColor: RawColorType) {
        this._theme_color = initialColor;
    }

    setThemeColor = (colorName: TicketHeaderColorType) => {
        this._theme_color = TICKET_COLORS.HEADER[colorName];
        return this;
    } 
}