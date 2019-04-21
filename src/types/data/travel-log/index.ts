import { UserID } from '../user';
import { Image } from '../image';
import { CountryCode } from '../country';
import { Period } from '../datetime';

import { Events } from './event';

export interface TravelLog {
	id: number;
	title: string;
	published: boolean;
	titleImage: Image;
	owner: UserID;
	participants: UserID[];
	period: Period;
	countryCodes: CountryCode[];
	events: Events;
}

export interface NewtravelLog {
	title: string;
	owner: UserID;
	participants: UserID[];
	countryCodes: CountryCode[];
	period: Period;
}
