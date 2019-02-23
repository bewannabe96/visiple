import { themeColors } from '../../../config/ticket.json';

/**
 * Theme colors of the ticket
 */
export const TICKET_THEME_COLORS: { [key: string]: string } = themeColors;

/**
 * Ticket theme colors keys
 */
export const TICKET_HEADER_COLORS_KEYS: string[] = Object.keys(
	TICKET_THEME_COLORS,
);
