import {
	FromToTab,
	OPEN_PERIOD_MODAL,
	CLOSE_PERIOD_MODAL,
	OPEN_INVITE_MODAL,
	CLOSE_INVITE_MODAL,
	SWITCH_FROMTO_TAB,
	OpenPeriodModalAction,
	ClosePeriodModalAction,
	SwitchFromToTabAction,
	OpenInviteModalAction,
	CloseInviteModalAction,
} from '../../types/redux/new-ticket-screen/ui';

/**
 * UI Action Creators
 */

export const openPeriodModal = (): OpenPeriodModalAction => ({
	type: OPEN_PERIOD_MODAL,
});

export const closePeriodModal = (): ClosePeriodModalAction => ({
	type: CLOSE_PERIOD_MODAL,
});

export const switchFromToTab = (
	fromtoTab: FromToTab,
): SwitchFromToTabAction => ({
	type: SWITCH_FROMTO_TAB,
	fromtoTab,
});

export const openInviteModal = (): OpenInviteModalAction => ({
	type: OPEN_INVITE_MODAL,
});

export const closeInviteModal = (): CloseInviteModalAction => ({
	type: CLOSE_INVITE_MODAL,
});
