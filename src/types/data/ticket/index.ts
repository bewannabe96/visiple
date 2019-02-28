import { DateTime } from 'luxon';

import { UserID } from '../user';
import { Plans } from './plan';
import { Packings } from './packing';

export interface Ticket {
	id: number;
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
	packings: Packings;
	plans: Plans;
}

export interface NewTicket {
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
}
