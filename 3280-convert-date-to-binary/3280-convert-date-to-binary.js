/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let [year, month, day] = date.split('-');
    let yearBinary = Number(year).toString(2);
    let monthBinary = Number(month).toString(2);
    let dayBinary = Number(day).toString(2);
    return `${yearBinary}-${monthBinary}-${dayBinary}`;
};
