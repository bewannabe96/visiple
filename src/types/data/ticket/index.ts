import { UserID } from '../user';
import { Plans } from './plan';

export interface Ticket {
	id: number;
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: Date;
		to: Date;
	};
	plans: Plans;
}

export interface NewTicket {
	title: string;
	themeColor: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: Date;
		to: Date;
	};
}
