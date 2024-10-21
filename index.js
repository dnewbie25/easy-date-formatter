#!/usr/bin/env node
const { formatDate, shortDate, shortDateFullYear, longDate, longDateWeekday } = require('./functions.js')
const { Command } = require('commander')
const program = new Command()

program
  .name('easy-date-formatter')
  .description('A CLI program to format dates in readable formats')
  .version('1.0.0')

program
  .argument('<date>', 'A date in one of the accepted formats')
  .option('-fd, --formatDate', 'returns a date in the UTC format')
  .option('-sd, --shortDate', 'returns a date as MM/DD/YY')
  .option('-sy, --shortDateFullYear', 'returns a date as MM/DD/YYYY')
  .option('-ld, --longDate', 'returns a date as MonthName DD, YYYY')
  .option('-lw, --longDateWeekday', 'returns a date as Weekday, MonthName DD, YYYY')
  .action((date, options) => {
    if (options.formatDate) {
      console.log(formatDate(date))
    } else if (options.shortDate) {
      console.log(shortDate(date))
    } else if (options.shortDateFullYear) {
      console.log(shortDateFullYear(date))
    } else if (options.longDate) {
      console.log(longDate(date))
    } else if (options.longDateWeekday) {
      console.log(longDateWeekday(date))
    } else {
      console.log('No valid option provided')
    }
  })

program.parse(process.argv)
