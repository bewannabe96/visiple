/** @format */

import { THEME_COLORS } from '../../../config/theme';

import * as Config from '../../../config/ticket.json';

/**
 * Theme colors of the ticket
 */
export const TICKET_HEADER_COLORS: { [key: string]: string } =
	Config.themeColors;

/**
 * Ticket theme colors keys
 */
export const TICKET_HEADER_COLORS_KEYS: string[] = Object.keys(
	TICKET_HEADER_COLORS,
);

/**
 * Fixed colors of the ticket
 */
export const TICKET_COLORS = {
	THEME: TICKET_HEADER_COLORS,
	BODY: THEME_COLORS.greyWhite,
	FOOTER: Config.ticketFixedColors.footer,
	TEXT: Config.ticketFixedColors.text,
	TITLE: THEME_COLORS,
	DATE: THEME_COLORS.oceanBlue,
};

/**
 * Fixed texts of the ticket
 */
export const TICKET_TEXTS: {
	[key: string]: string | { [key: string]: string };
} = Config.ticketFixedTexts;