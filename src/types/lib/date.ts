import dateFormat from 'dateformat';

export function formatISODate(date: Date) {
	// xxxx-xx-xx format
	return dateFormat(date, 'isoDate');
}

export function generateDatesArrayFromPeriod(start: Date, end: Date) {}
