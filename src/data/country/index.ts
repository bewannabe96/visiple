import * as _countries from './countries.json';

import { CountryCode, Country } from '../../types/data/country';

const COUNTRIES: Country[] = _countries.countries;

export const allCountries = COUNTRIES;

export const countryCodesBySearchword = (word: string): Country[] => {
	let result: Country[] = [];
	const regexp = new RegExp(`^.*${word}.*$`, 'gi');
	COUNTRIES.forEach((cntry: Country) => {
		if (
			cntry.translations.ko.search(regexp) !== -1 ||
			cntry.name.search(regexp) !== -1
		) {
			result.push(cntry);
		}
	});
	return result;
};

export const countryByCode = (code: CountryCode): Country | null => {
	let result: Country | null = null;
	COUNTRIES.some((cntry: Country) => {
		if (cntry.alpha3Code === code) {
			result = cntry;
		}
		return cntry.alpha3Code === code;
	});
	return result;
};

export const countriesByCodes = (codes: CountryCode[]): Country[] => {
	let result: Country[] = [];
	COUNTRIES.forEach((cntry: Country) => {
		if (codes.includes(cntry.alpha3Code)) {
			result.push(cntry);
		}
	});
	return result;
};
