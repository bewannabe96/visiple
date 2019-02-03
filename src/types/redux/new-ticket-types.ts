import { TicketHeaderColorType } from "../config/ticket_theme";

/**
 * New Ticket Screen State Interface
 */
export interface NewTicketScreenState {
    TicketData: TicketDataState,
    Screen: ScreenState,
}

/**
 * Ticket Data State Interface
 */
export interface TicketDataState {
    ticketColor: TicketHeaderColorType,
    period: {
        fromDate: Date,
        toDate: Date
    }
}

/**
 * Screen State Interface
 */
export type TabType = 'from-tab' | 'to-tab';

export interface ScreenState {
    periodModalVisible: boolean,
    fromtoTab: TabType,
    inviteModalVisible: boolean,
}

/**
 * Ticket Data Action Constants
 */
export const SET_TICKETCOLOR = 'visiple/new-ticket/SET_TICKETCOLOR';
export const SET_PERIOD = 'visiple/new-ticket/SET_PERIOD';

/**
 * Screen Action Constants
 */
export const OPEN_PERIOD_MODAL = 'visiple/new-ticket/OPEN_PERIOD_MODAL';
export const CLOSE_PERIOD_MODAL = 'visiple/new-ticket/CLOSE_PERIOD_MODAL';

export const SWITCH_FROMTO_TAB = 'visiple/new-ticket/SWITCH_FROMTO_TAB'

export const OPEN_INVITE_MODAL = 'visiple/new-ticket/OPEN_INVITE_MODAL';
export const CLOSE_INVITE_MODAL = 'visiple/new-ticket/CLOSE_INVITE_MODAL';

/**
 * Ticket Data Action Creator Interfaces
 */
interface SetTicketColorAction {
    type: typeof SET_TICKETCOLOR
    ticketColor: TicketHeaderColorType
}

interface SetPeriodAction {
    type: typeof SET_PERIOD
    tab: TabType
    date: Date
}

/**
 * Screen Action Creator Interfaces
 */
interface OpenPeriodModalAction {
    type: typeof OPEN_PERIOD_MODAL
}

interface ClosePeriodModalAction {
    type: typeof CLOSE_PERIOD_MODAL
}

interface SwitchFromToTabAction {
    type: typeof SWITCH_FROMTO_TAB
    tab: TabType
}

interface OpenInviteModalAction {
    type: typeof OPEN_INVITE_MODAL
}

interface CloseInviteModalAction {
    type: typeof CLOSE_INVITE_MODAL
}

/**
 * Ticket Data Action Types
 */
export type TicketDataActionType
    = SetTicketColorAction
    | SetPeriodAction;

/**
 * Screen Action Types
 */
export type ScreenActionType
    = OpenPeriodModalAction
    | ClosePeriodModalAction
    | SwitchFromToTabAction
    | OpenInviteModalAction
    | CloseInviteModalAction;