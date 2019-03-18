import { NewTicketState } from './new-ticket';

import { NewTicketScreenState } from './screens/new-ticket-screen';

/**
 * Root State Interface
 */
export default interface RootState {
	newTicket: NewTicketState;
	screens: {
		newTicketScreen: NewTicketScreenState;
	};
}
