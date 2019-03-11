import { DateTime } from 'luxon';

interface PlanTime {
	at: DateTime;
	end?: DateTime;
}

type Place = string;

interface Cost {
	value: number;
	currency: string;
}

interface Move {
	from: Place;
	to: Place;
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
type DayPlanType = 'MEAL' | 'REST' | 'TRAVEL' | 'ACTIVITY' | 'SIGHTSEEING';

interface MealPlan {
	type: 'MEAL';
	title: string;
	time: PlanTime;
	note?: string[];
	category: MealCategory;
	atPlace?: Place;
	cost?: Cost;
}

interface RestPlan {
	type: 'REST';
	title: string;
	time: PlanTime;
	note?: string[];
	category: RestCategory;
	atPlace?: Place;
}

interface TravelPlan {
	type: 'TRAVEL';
	title: string;
	time: PlanTime;
	note?: string[];
	mean: Transportation;
	move: Move;
	cost?: Cost;
}

interface ActivityPlan {
	type: 'ACTIVITY';
	title: string;
	time: PlanTime;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

interface SightseeingPlan {
	type: 'SIGHTSEEING';
	title: string;
	time: PlanTime;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

export type Plan =
	| MealPlan
	| RestPlan
	| TravelPlan
	| ActivityPlan
	| SightseeingPlan;

type Plans = Plan[];

export interface DayPlan {
	date: DateTime;
	plans: Plans;
}

export type DayPlans = DayPlan[];
