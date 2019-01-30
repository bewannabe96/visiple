import { combineReducers } from 'redux';

import NewTicketScreenReducer from './new-ticket-reducers';

/**
 * App Root Reducer
 */
const RootReducer = combineReducers({
    NewTicketScreen: NewTicketScreenReducer,
})

export default RootReducer;