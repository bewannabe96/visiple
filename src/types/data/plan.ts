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

interface MealPlan {
	category: MealCategory;
	fromPlace: Place;
	toPlace: Place;
}

type RestCategory = 'wake' | 'retire' | 'nap';

interface RestPlan {
	category: RestCategory;
	atPlace: Place;
}

interface MeetPlan {
	people: string[];
	atPlace: Place;
}

interface TravelPlan {
	mean: Transportation;
	fromPlace: Place;
	toPlace: Place;
}

interface ActivityPlan {
	title: string;
	atPlace: Place;
	cost: Cost;
	information: string;
}

interface SightseeingPlan {
	title: string;
	atPlace: Place;
	cost: Cost;
	information: string;
}

type DayPlans = (
	| MealPlan
	| RestPlan
	| MeetPlan
	| TravelPlan
	| ActivityPlan
	| SightseeingPlan)[];

export type Plans = {
	date: Date;
	dayPlans: DayPlans;
}


// {
	// 	id: 'ticket1'
	// 	owner: 'user1'
	// 	participants: ['user1', 'user2']
	// 	plans: Plans
// }