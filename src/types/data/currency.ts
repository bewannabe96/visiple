import * as Currency from '../../config/currency.json';

export const CURRENCY: {
	[code: string]: {
		symbol: string;
		name: string;
		symbol_native: string;
		decimal_digits: number;
		rounding: number;
		code: string;
		name_plural: string;
	};
} = Currency;
