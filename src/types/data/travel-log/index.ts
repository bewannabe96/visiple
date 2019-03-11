import { DateTime } from 'luxon';

import { UserID } from '../user';
import { Image } from '../image';
import { Events } from './event';

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
	events: Events;
}
