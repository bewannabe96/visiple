import * as _countries from './countries.json';

export type Country = {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	region: string;
	subregion: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number | null;
	gini: number | null;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string | null;
	currencies: {
		code: string | null;
		name: string | null;
		symbol: string | null;
	}[];
	languages: {
		iso639_1: string | null;
		iso639_2: string;
		name: string;
		nativeName: string;
	}[];
	translations: { ko: string; [key: string]: string | null };
	flag: string;
	regionalBlocs: {
		acronym: string;
		name: string;
		otherAcronyms: string[];
		otherNames: string[];
	}[];
	cioc: string | null;
};

const COUNTRIES: Country[] = _countries.countries;

export const countriesByName = (name: string): Country[] => {
	let result: Country[] = [];
	const regexp = new RegExp(`^.*${name}.*$`, 'gi');
	COUNTRIES.forEach((cntry: Country) => {
		if (
			cntry.name.search(regexp) !== -1 ||
			cntry.translations.ko.search(regexp) !== -1
		) {
			result.push(cntry);
		}
	});
	return result;
};
