import { UserID } from '../user';
import { Period } from '../datetime';

import { DayPlans } from './plan';
import { Packings } from './packing';

export interface Ticket {
	id: number;
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: Period;
	packings: Packings;
	dayPlans: DayPlans;
}

export interface NewTicket {
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: Period;
}
