import {
	TICKET_HEADER_COLORS_KEYS,
	TICKET_HEADER_COLORS,
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
	themeColor: TICKET_HEADER_COLORS[TICKET_HEADER_COLORS_KEYS[0]],
	owner: '0001',
	participants: ['0001', '0002'],
	period: {
		from: new Date(),
		to: new Date(),
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
					from: action.date,
				},
			};

		case SET_TO_DATE:
			return {
				...state,
				period: {
					...state.period,
					to: action.date,
				},
			};

		default:
			return state;
	}
}
