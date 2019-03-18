/**
 * NewTicketScreenState
 */
export type FromToTab = 'from-tab' | 'to-tab';

export interface NewTicketScreenState {
	periodModalVisible: boolean;
	fromtoTab: FromToTab;
	inviteModalVisible: boolean;
}

/**
 * Action Constants
 */
// prettier-ignore
export const OPEN_PERIOD_MODAL = 'visiple/new-ticket-screen/OPEN_PERIOD_MODAL';
// prettier-ignore
export const CLOSE_PERIOD_MODAL = 'visiple/new-ticket-screen/CLOSE_PERIOD_MODAL';

// prettier-ignore
export const SWITCH_FROMTO_TAB = 'visiple/new-ticket-screen/SWITCH_FROMTO_TAB';

// prettier-ignore
export const OPEN_INVITE_MODAL = 'visiple/new-ticket-screen/OPEN_INVITE_MODAL';
// prettier-ignore
export const CLOSE_INVITE_MODAL = 'visiple/new-ticket-screen/CLOSE_INVITE_MODAL';

/**
 * Action Interfaces
 */
export interface OpenPeriodModalAction {
	type: typeof OPEN_PERIOD_MODAL;
}

export interface ClosePeriodModalAction {
	type: typeof CLOSE_PERIOD_MODAL;
}

export interface SwitchFromToTabAction {
	type: typeof SWITCH_FROMTO_TAB;
	fromtoTab: FromToTab;
}

export interface OpenInviteModalAction {
	type: typeof OPEN_INVITE_MODAL;
}

export interface CloseInviteModalAction {
	type: typeof CLOSE_INVITE_MODAL;
}

/**
 * Action Types
 */
export type Actions =
	| OpenPeriodModalAction
	| ClosePeriodModalAction
	| SwitchFromToTabAction
	| OpenInviteModalAction
	| CloseInviteModalAction;
