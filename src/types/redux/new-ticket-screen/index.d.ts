/** @format */

import { DataState } from './data';
import { UIState } from './ui';

/**
 * New Ticket Root State Interface
 */
export default interface NewTicketScreenState {
	Data: DataState;
	UI: UIState;
}
