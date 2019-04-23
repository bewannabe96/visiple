import { DateTime } from 'luxon';

import { Image } from '../image';

export interface Event {
	title: string;
	description?: string;
	images?: Image[];
}

export type Events = Event[];

export type Weather =
	| 'sunny'
	| 'partly-cloudy'
	| 'cloudy'
	| 'rain'
	| 'thunder-storm'
	| 'snow'
	| 'fog'
	| 'windy';

export interface Day {
	Date: DateTime;
	weather?: Weather;
	events: Events;
}

export type Days = Day[];
