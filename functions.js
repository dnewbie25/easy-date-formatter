const months = {
  'Jan': ['January', 1],
  'Feb': ['February', 2],
  'Mar': ['March', 3],
  'Apr': ['April', 4],
  'May': ['May', 5],
  'Jun': ['June', 6],
  'Jul': ['July', 7],
  'Aug': ['August', 8],
  'Sep': ['September', 9],
  'Oct': ['October', 10],
  'Nov': ['November', 11],
  'Dec': ['December', 12]
}

const days = {
  'Sun,': ['Sunday', 1],
  'Mon,': ['Monday', 2],
  'Tue,': ['Tuesday', 3],
  'Wed,': ['Wednesday', 4],
  'Thu,': ['Thursday', 5],
  'Fri,': ['Friday', 6],
  'Sat,': ['Saturday', 7]
}

// Handle ordinal numbers like 1st, 2nd, 3rd, 4th... and so on
const newNum = new Intl.PluralRules('en', { type: 'ordinal' })
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
])

/**
 * Returns a string representation of a number with an ordinal suffix.
 * @param  {Number} n - The number to be formatted.
 * @return {String}   - The string representation of the number with an ordinal suffix.
 */
const formatOrdinals = (n) => {
  const rule = newNum.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

/**
 * Takes a date and returns the ISO 8601 representation of that date.
 * @param  {String|Number|Date} date - The date to be formatted.
 * @return {String}             - The ISO 8601 representation of the given date.
 */
function formatDate(date) {
  return new Date(date).toUTCString()
}

function splitDate(date) {
  const arr = formatDate(date).split(' ').slice(0, 4)
  return arr
}

function shortDate(date) {
  const newDate = splitDate(date)
  const day = newDate[1]
  const month = months[newDate[2]][1]
  const year = newDate[3]
  return `${month}/${day}/${year}`
}

function longDate(date) {
  const newDate = formatDate(date).split(' ')
  const day = formatOrdinals(parseInt(newDate[1]))
  const month = months[newDate[2]][0]
  const year = newDate[3]
  return `${month} ${day}, ${year}`
}

let date1 = formatDate('2024-10-13')
date1

let dateStringExample = splitDate(date1)
dateStringExample

let short = shortDate('2024-10-13')
short

let long = longDate('2024-02-3')
long