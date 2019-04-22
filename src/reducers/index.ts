import { combineReducers } from 'redux';

import NewTicketReducer from './new-ticket';

/**
 * App Root Reducer
 */
const RootReducer = combineReducers({
	newTicket: NewTicketReducer,
});

export default RootReducer;
