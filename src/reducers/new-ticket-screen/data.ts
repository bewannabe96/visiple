import { DateTime } from 'luxon';

import {
	TICKET_HEADER_COLORS_KEYS,
	TICKET_THEME_COLORS,
} from '../../types/data/ticket/theme';
import {
	DataState,
	DataActions,
	SET_THEMECOLOR,
	SET_FROM_DATE,
	SET_TO_DATE,
} from '../../types/redux/new-ticket-screen/data';

/**
 * Data Reducer
 */
const dataInitialState: DataState = {
	title: 'DEV_TITLE',
	themeColor: TICKET_THEME_COLORS[TICKET_HEADER_COLORS_KEYS[0]],
	owner: '0001',
	participants: ['0001', '0002'],
	period: {
		from: DateTime.local(),
		to: DateTime.local().plus({ hours: 1 }),
	},
};

export function DataReducer(state = dataInitialState, action: DataActions) {
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
