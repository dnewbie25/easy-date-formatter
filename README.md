# my-easy-date-formatter

An npm package aimed to help formatting dates into a more human-friendly way

# Introduction

Working with dates in JavaScript can often be cumbersome and error-prone. The native `Date` object provides basic functionality but lacks easy-to-use methods for formatting dates into human-readable strings. Developers frequently struggle with date formatting, especially when dealing with internationalization, custom formats, or displaying dates in a user-friendly manner.

This package is my solution to at least what I consider the most usual time and date formats that we can find in the wild.

Currently it is only working through the console as working with dates is extremely difficult in Javascript.

# Installation

To install run the following

```bash
npm install my-easy-date-formatter
```

Then, to run each function use

```bash
npx my-easy-date-formatter <choose your format here> <enter the date here>
```

For example, if I want to convert the string `2023-10-06T14:30:00.000Z` to a long date format, we use:

```bash
npx my-easy-date-formatter --longDateWeekday 2023-10-06T14:30:00.000Z
```

And we should see an output in console with this value:

```bash
Friday, October 6th, 2023
```

# Accepted Input

For all the functions, the accepted inputs will be in the following formats, following the American standard of `Year Month Day` or one of the following:

- `Timestamps`, these are the number of milliseconds passed since January 1, 1970. For example: `14182940000`
- `ISO 8601`, the standard way of representing dates. They are strings like `YYYY-MM-DDTHH:mm:ss.sssZ`, for example `2023-10-06T14:30:00.000Z`
- `Short date` format. Currently supporting only US date format `MM/DD/YYYY` or `MM-DD-YYYY`
- `Long date format`. These include the month name and the day as number, followed by the year. Currently supporting only the format `MonthName DD, YYYY`. For example `March 25, 2022`
- `Long date format with weekday`. These strings include the weekday in the way `Weekday, MonthName DD, YYYY`. For example `Friday, September 2, 2023`

> Keep in mind that every input except for Timestamps (which is an integer) should be a string surrounded by single quotes '' if it happens to have a whitespace. Otherwise it accepts inputs without them, like 12-12-2021, 01/02/2012, but if you  try to enter '01 01 2023' you need the single quotes.

# How to use

The package contains 5 main functions. Each one is detailed with an example of how to use.Each option has an abbreviation as shown here:

```bash
  -V, --version             output the version number
  -fd, --formatDate         returns a date in the UTC format
  -sd, --shortDate          returns a date as MM/DD/YY
  -sy, --shortDateFullYear  returns a date as MM/DD/YYYY
  -ld, --longDate           returns a date as MonthName DD, YYYY
  -lw, --longDateWeekday    returns a date as Weekday, Month DD, YYYY
  -h, --help                display help for command
```

### formatDate()

This function returns a date in the UTC format: `Weekday, DD MM YYYY HH:MM:SS Timezone`. My goal was to simplify the use of this format, hence the hour and timezone will not be used throughout the rest of the functions.

```bash
npx my-easy-date-formatter --formatDate '12/25/2024'

## Output

Wed, 25 Dec 2024 05:00:00 GMT

```

### shortDateFullYear()

This function will return the provided date in the usual US format `MM/DD/YYYY`.

```bash
npx my-easy-date-formatter --shortDateFullYear 1789876761000 # This is a Timestamp

## Output

9/20/2026

```

### shortDate()

This function works by returning the date the same as `shortDateFullYear()` but with the year as 2-digit number: `MM/DD/YY`.

```bash
npx my-easy-date-formatter --shortDate 'Wed, 25 Dec 2024 05:00:00 GMT' # We can use a long date

# Output

12/25/2024

```

### longDate()

This function will return the date in a format more suited for letters and some informal documents in the format `MonthName DD, YYYY`. The days are shown using ordinal numbers (1st, 2nd, 3rd, 4th, and so on).

```bash
npx my-easy-date-formatter --longDate '12-25-24' # We can use a short date as well

# Output

December 25th, 2024

```

### longDateWeekday()

This one will return the whole date including the day of the week. More suited for formal documents. It has the format `Weekday, MonthName DD, YYYY`. The days are shown using ordinal numbers (1st, 2nd, 3rd, 4th, and so on).

```bash
npx my-easy-date-formatter --longDateWeekday '2023-10-06T00:00:00.000Z' # ISO string

# Output

Friday, October 6th, 2023

```