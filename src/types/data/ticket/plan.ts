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
export const PLAN_TYPES = {
	MEAL: 'MEAL',
	REST: 'REST',
	MEET: 'MEET',
	TRAVEL: 'TRAVEL',
	ACTIVITY: 'ACTIVITY',
	SIGHTSEEING: 'SIGHTSEEING',
};

interface MealPlan {
	type: typeof PLAN_TYPES.MEAL;
	title: string;
	category: MealCategory;
	fromPlace: Place;
	toPlace: Place;
}

interface RestPlan {
	type: typeof PLAN_TYPES.REST;
	title: string;
	category: RestCategory;
	atPlace: Place;
}

interface MeetPlan {
	type: typeof PLAN_TYPES.MEET;
	title: string;
	people: string[];
	atPlace: Place;
}

interface TravelPlan {
	type: typeof PLAN_TYPES.TRAVEL;
	title: string;
	mean: Transportation;
	fromPlace: Place;
	toPlace: Place;
}

interface ActivityPlan {
	type: typeof PLAN_TYPES.ACTIVITY;
	title: string;
	atPlace: Place;
	cost: Cost;
	information: string;
}

interface SightseeingPlan {
	type: typeof PLAN_TYPES.SIGHTSEEING;
	title: string;
	atPlace: Place;
	cost: Cost;
	information: string;
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
