import { Image } from '../image';

interface Event {
	title: string;
	description?: string;
	images?: Image[];
}

export type Events = Event[];
