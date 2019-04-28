import { DateTime } from 'luxon';

import {
	TICKET_HEADER_COLORS_KEYS,
	TICKET_THEME_COLORS,
} from '../types/data/ticket/theme';
import {
	Actions,
	SET_THEMECOLOR,
	SET_FROM_DATE,
	SET_TO_DATE,
	NewTicketState,
} from '../types/redux/new-ticket';

/**
 * Initial State
 */
const initialState: NewTicketState = {
	title: 'DEV_TITLE',
	themeColor: TICKET_THEME_COLORS[TICKET_HEADER_COLORS_KEYS[0]],
	owner: 1,
	participants: [1, 2],
	period: {
		from: DateTime.local().startOf('day'),
		to: DateTime.local()
			.plus({ days: 1 })
			.startOf('day'),
	},
};

/**
 * NewTicketReducer
 */
export default function NewTicketReducer(
	state = initialState,
	action: Actions,
) {
	switch (action.type) {
		case SET_THEMECOLOR:
			return {
				...state,
				themeColor: action.themeColor,
			};

		case SET_FROM_DATE:
			return {
				...state,
				period: {
					...state.period,
					from: state.period.from.set({
						year: action.year,
						month: action.month,
						day: action.day,
					}),
				},
			};

		case SET_TO_DATE:
			return {
				...state,
				period: {
					...state.period,
					to: state.period.to.set({
						year: action.year,
						month: action.month,
						day: action.day,
					}),
				},
			};

		default:
			return state;
	}
}
