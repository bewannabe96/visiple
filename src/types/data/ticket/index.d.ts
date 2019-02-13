// {
// 	id: 'ticket1'
// 	owner: 'user1'
// 	participants: ['user1', 'user2']
// 	plans: Plans
// }

import { UserID } from '../user';
import { Plans } from './plan';

interface Ticket {
	id: string;
	owner: UserID;
	participants: UserID[];
	plans: Plans;
}
