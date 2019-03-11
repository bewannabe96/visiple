import { DateTime } from 'luxon';

import { UserID } from '../user';
import { Image } from '../image';

export interface TravelLog {
	id: number;
	title: string;
	titleImage: Image;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
}
