import { UserID } from '../user';
import { Plans } from './plan';

export default interface Ticket {
	id: number;
	title: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: Date;
		to: Date;
	};
	plans: Plans;
	themeColor: string;
}
