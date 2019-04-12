export type CountryCode = string;

export type Country = {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: CountryCode;
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
