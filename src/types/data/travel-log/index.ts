import { DateTime } from 'luxon';

import { UserID } from '../user';

export interface TravelLog {
	id: number;
	title: string;
	titleImage: any;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
}
