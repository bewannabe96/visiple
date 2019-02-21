import { UserID } from '../user';

export interface PackingItem {
	name: string;
	ready: boolean;
}

export interface IndividualPacking {
	user: UserID;
	list: PackingItem[];
}

export interface Packings {
	commonList: PackingItem[];
	indivLists: IndividualPacking[];
}
