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
type DayPlanType =
	| 'MEAL'
	| 'REST'
	| 'MEET'
	| 'TRAVEL'
	| 'ACTIVITY'
	| 'SIGHTSEEING';

interface MealPlan {
	type: 'MEAL';
	title: string;
	note?: string[];
	category: MealCategory;
	atPlace?: Place;
}

interface RestPlan {
	type: 'REST';
	title: string;
	note?: string[];
	category: RestCategory;
	atPlace?: Place;
}

interface MeetPlan {
	type: 'MEET';
	title: string;
	note?: string[];
	people: string[];
	atPlace?: Place;
}

interface TravelPlan {
	type: 'TRAVEL';
	title: string;
	note?: string[];
	mean: Transportation;
	fromPlace: Place;
	toPlace: Place;
	cost?: Cost;
}

interface ActivityPlan {
	type: 'ACTIVITY';
	title: string;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

interface SightseeingPlan {
	type: 'SIGHTSEEING';
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
