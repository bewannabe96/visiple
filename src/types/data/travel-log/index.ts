import { DateTime } from 'luxon';

import { UserID } from '../user';
import { Image } from '../image';
import { CountryCode } from '../country';

import { Events } from './event';

export interface TravelLog {
	id: number;
	title: string;
	published: boolean;
	titleImage: Image;
	owner: UserID;
	participants: UserID[];
	period: {
		from: DateTime;
		to: DateTime;
	};
	countryCodes: CountryCode[];
	events: Events;
}

export interface NewtravelLog {
	title: string;
	owner: UserID;
	participants: UserID[];
	countryCodes: CountryCode[];
	period: {
		from: DateTime;
		to: DateTime;
	};
}
