import {
	FromToTab,
	OPEN_PERIOD_MODAL,
	CLOSE_PERIOD_MODAL,
	OPEN_INVITE_MODAL,
	CLOSE_INVITE_MODAL,
	SWITCH_FROMTO_TAB,
} from '../../types/redux/new-ticket-screen/ui';

/**
 * UI Action Creators
 */

export const openPeriodModal = () => ({ type: OPEN_PERIOD_MODAL });

export const closePeriodModal = () => ({ type: CLOSE_PERIOD_MODAL });

export const switchFromToTab = (tab: FromToTab) => ({
	type: SWITCH_FROMTO_TAB,
	tab,
});

export const openInviteModal = () => ({ type: OPEN_INVITE_MODAL });

export const closeInviteModal = () => ({ type: CLOSE_INVITE_MODAL });
