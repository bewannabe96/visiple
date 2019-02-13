/** @format */

import { UserID } from '../user';
import { Plans } from './plan';

interface Ticket {
	id: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: Date;
		to: Date;
	};
	plans: Plans;
	themeColor: string;
}
