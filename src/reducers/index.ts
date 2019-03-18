import { combineReducers } from 'redux';

import NewTicketReducer from './new-ticket';

import NewTicketScreenReducer from './screens/new-ticket-screen';

/**
 * Screen Root Reducer
 */
const ScreenRootReduer = combineReducers({
	newTicketScreen: NewTicketScreenReducer,
});

/**
 * App Root Reducer
 */
const RootReducer = combineReducers({
	newTicket: NewTicketReducer,
	screens: ScreenRootReduer,
});

export default RootReducer;
