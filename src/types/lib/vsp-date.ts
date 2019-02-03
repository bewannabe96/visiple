import dateFormat from 'dateformat';

export function formatISODate(date: Date) {
    return dateFormat(date, 'isoDate' )
}

export function formatDateString(date: Date) {
    return dateFormat(
        date,
        'yyyy년 m월 d일 (ddd)'
    );
}

export function formatTimeString(date: Date) {
    return dateFormat(
        date,
        'TT hh시 MM분'
    );
}

export function generateDatesArrayFromPeriod(start: Date, end: Date) {
    let rtn_arr = [];
    let pointer = new Date(start);
    while(pointer <= end) {
        rtn_arr.push(formatISODate(pointer));
        pointer.setDate(pointer.getDate() + 1)
    }
    return rtn_arr;
}