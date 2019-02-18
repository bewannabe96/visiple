type Place = string;

type Currency = 'won' | 'dollar' | 'yen' | 'yuan';

interface Cost {
	value: number;
	currency: Currency;
}

type Transportation =
	| 'subway'
	| 'bus'
	| 'ship'
	| 'plane'
	| 'taxi'
	| 'walk'
	| 'train'
	| 'tram'
	| 'automobile'
	| 'motorcycle'
	| 'bike';

type MealCategory =
	| 'breakfast'
	| 'brunch'
	| 'lunch'
	| 'dinner'
	| 'midnightsnack'
	| 'cafe'
	| 'bar';

type RestCategory = 'wake' | 'retire' | 'nap';

/**
 * Plan types constant
 */
export const DAYPLAN_TYPES = {
	MEAL: 'MEAL',
	REST: 'REST',
	MEET: 'MEET',
	TRAVEL: 'TRAVEL',
	ACTIVITY: 'ACTIVITY',
	SIGHTSEEING: 'SIGHTSEEING',
};

interface MealPlan {
	type: typeof DAYPLAN_TYPES.MEAL;
	title: string;
	note?: string[];
	category: MealCategory;
	atPlace?: Place;
}

interface RestPlan {
	type: typeof DAYPLAN_TYPES.REST;
	title: string;
	note?: string[];
	category: RestCategory;
	atPlace?: Place;
}

interface MeetPlan {
	type: typeof DAYPLAN_TYPES.MEET;
	title: string;
	note?: string[];
	people: string[];
	atPlace?: Place;
}

interface TravelPlan {
	type: typeof DAYPLAN_TYPES.TRAVEL;
	title: string;
	note?: string[];
	mean: Transportation;
	fromPlace: Place;
	toPlace: Place;
}

interface ActivityPlan {
	type: typeof DAYPLAN_TYPES.ACTIVITY;
	title: string;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

interface SightseeingPlan {
	type: typeof DAYPLAN_TYPES.SIGHTSEEING;
	title: string;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

export type DayPlan =
	| MealPlan
	| RestPlan
	| MeetPlan
	| TravelPlan
	| ActivityPlan
	| SightseeingPlan;

type DayPlans = DayPlan[];

export interface Plan {
	date: Date;
	dayPlans: DayPlans;
}

export type Plans = Plan[];
