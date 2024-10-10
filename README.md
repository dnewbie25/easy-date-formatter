# easy-date-formatter
An npm package aimed to help formatting dates into a more human-friendly way

# Introduction

Working with dates in JavaScript can often be cumbersome and error-prone. The native `Date` object provides basic functionality but lacks easy-to-use methods for formatting dates into human-readable strings. Developers frequently struggle with date formatting, especially when dealing with internationalization, custom formats, or displaying dates in a user-friendly manner.

This package is my solution to at least what I consider the most usual time and date formats that we can find in the wild.

Currently it is only working through the console as working with dates is extremely difficult in Javascript.

# Installation

To install run the following

```bash
npm install easy-date-formatter
```

Then, to run each function use

```bash
easy-date-formatter --format=<choose your format here> <enter the date here>
```

For example, if I want to convert the string `2023-10-06T14:30:00.000Z` to a long date format, we use:

```bash
easy-date-formatter --format=long-date 2023-10-06T14:30:00.000Z
```

And we should see an output in console with this value:

```bash
Friday, October 6th, 2023
```

# Accepted Input

For all the functions, the accepted inputs will be in the following formats, following the American standard of `Year Month Day`:
- `Timestamps`, these are the number of milliseconds passed since January 1, 1970. For example: `14182940000`
- `ISO 8601`, the standard way of representing dates. They are strings like `YYYY-MM-DDTHH:mm:ss.sssZ`, for example `2023-10-06T14:30:00.000Z`
- `Short date` format. Currently supporting only US date format `MM/DD/YYYY` or `MM-DD-YYYY`
- `Long date format`. These include the month name and the day as number, followed by the year. Currently supporting only the format `Month DD, YYYY`. For example `March 25, 2022`
- `Long date format with weekday`. These strings include the weekday in the way `WEEKDAY, MONTH DD, YYYY`. For example `Friday, September 2, 2023`

# Functions available