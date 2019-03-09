import { DateTime } from 'luxon';

import { UserID } from '../user';

export interface TravelLog {
	id: number;
	title: string;
	titleImage: string;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
}
