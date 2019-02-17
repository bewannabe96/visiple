import dateFormat from 'dateformat';

export function formatISODate(date: Date) {
	// xxxx-xx-xx format
	return dateFormat(date, 'isoDate');
}

export function formatDateString(date: Date) {
	return dateFormat(date, 'yyyy년 m월 d일 (ddd)');
}

export function formatTimeString(date: Date) {
	return dateFormat(date, 'TT hh시 MM분');
}

export function generateDatesArrayFromPeriod(start: Date, end: Date) {
	const rtnArr = [];
	const pointer = new Date(start);
	while (pointer <= end) {
		rtnArr.push(formatISODate(pointer));
		pointer.setDate(pointer.getDate() + 1);
	}
	return rtnArr;
}
