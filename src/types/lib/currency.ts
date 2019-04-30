import * as _currencies from '../../data/currency.json';

export interface Currency {
	[code: string]: {
		symbol: string;
		name: string;
		symbol_native: string;
		decimal_digits: number;
		rounding: number;
		code: string;
		name_plural: string;
	};
}

export const CURRENCY: Currency = _currencies;
