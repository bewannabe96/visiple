import { DateTime } from 'luxon';

import { UserID } from '../user';
import { DayPlans } from './plan';
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
	dayPlans: DayPlans;
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
