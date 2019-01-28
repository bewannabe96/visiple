import { TicketHeaderColorType } from "../config/ticket_theme";

export const SET_THEME_COLOR = 'set-theme-color';

export const setThemeColor = (colorName: TicketHeaderColorType) => ({ type: SET_THEME_COLOR, colorName });