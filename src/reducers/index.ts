/** @format */

import { combineReducers } from 'redux';

import NewTicketScreenReducer from './new-ticket-screen';

/**
 * App Root Reducer
 */
const RootReducer = combineReducers({
	NewTicketScreen: NewTicketScreenReducer,
});

export default RootReducer;
