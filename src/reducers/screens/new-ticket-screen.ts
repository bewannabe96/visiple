import {
	NewTicketScreenState,
	Actions,
	OPEN_PERIOD_MODAL,
	CLOSE_PERIOD_MODAL,
	SWITCH_FROMTO_TAB,
	OPEN_INVITE_MODAL,
	CLOSE_INVITE_MODAL,
} from '../../types/redux/screens/new-ticket-screen';

/**
 * Initial State
 */
const initialState: NewTicketScreenState = {
	periodModalVisible: false,
	fromtoTab: 'from-tab',
	inviteModalVisible: false,
};

/**
 * NewTicketScreenReducer
 */
export default function NewTicketScreenReducer(
	state = initialState,
	action: Actions,
) {
	switch (action.type) {
		case OPEN_PERIOD_MODAL:
			return {
				...state,
				periodModalVisible: true,
			};

		case CLOSE_PERIOD_MODAL:
			return {
				...state,
				periodModalVisible: false,
			};

		case SWITCH_FROMTO_TAB:
			return {
				...state,
				fromtoTab: action.fromtoTab,
			};

		case OPEN_INVITE_MODAL:
			return {
				...state,
				inviteModalVisible: true,
			};

		case CLOSE_INVITE_MODAL:
			return {
				...state,
				inviteModalVisible: false,
			};

		default:
			return state;
	}
}
