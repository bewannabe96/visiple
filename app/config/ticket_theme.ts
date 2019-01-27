import { THEME_COLORS } from "./theme";

/**
 * Ticket Header Color Type
 */
export type TicketHeaderColorType
    = 'blue'
    | 'red'
    | 'orange'
    | 'sky-blue'
    | 'lime'
    | 'purple'
    | 'green';

/**
 * Ticket Header Colors
 */
const TICKET_HEADER_COLORS: {[key: string]: string} = {
    'blue': '#6286FF',
    'red': '#FFB5B5',
    'orange': '#FFC87C',
    'sky-blue': '#73C0F4',
    'lime': '#D2ED77',
    'purple': '#B09DFF',
    'green': '#AEEAB0',
}

/**
 * Ticket Colors
 */
export const TICKET_COLORS = {
    HEADER: TICKET_HEADER_COLORS,
    BODY: THEME_COLORS['grey-white'],
    FOOTER: '#EFEFEF',
    TEXT: '#555555',
    TITLE: THEME_COLORS['brown'],
    DATE: THEME_COLORS['ocean-blue']
}

/**
 * Fixed Texts of the ticket
 */
export const TICKET_TEXTS = {
    TOPLEFT: 'VISIPLE AIRLINE',
    TOPRIGHT: {
        PRIMARY: 'Boarding Pass',
        SECONDARY: 'First Class'
    },
    FROM: 'From',
    TO: 'To',
    PASSENGER: 'Passenger',
}