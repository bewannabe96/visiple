import { UserID } from '../user';

interface Item {
	name: string;
	ready: boolean;
}

interface IndividualPacking {
	user: UserID;
	list: Item[];
}

export interface Packings {
	commonList: Item[];
	indivLists: IndividualPacking[];
}
