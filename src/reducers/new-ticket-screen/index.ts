import { combineReducers } from 'redux';

import { DataReducer } from './data';
import { UIReducer } from './ui';

/**
 * New Ticket Screen Combined Reducer
 */
const NewTicketScreenReducer = combineReducers({
	Data: DataReducer,
	UI: UIReducer,
});

export default NewTicketScreenReducer;
