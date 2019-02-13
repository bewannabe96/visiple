import { DataState } from './data';
import { UIState } from './ui';

/**
 * New Ticket Root State Interface
 */
export interface NewTicketScreenState {
	TicketData: DataState;
	Screen: UIState;
}
