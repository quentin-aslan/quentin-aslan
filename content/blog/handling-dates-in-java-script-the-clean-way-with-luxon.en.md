While building Max-Explorer, native JavaScript `Date` objects gave me subtle timezone bugs. This article shows how I switched to Luxon and moved all date handling into one small utility module.

## Why I Needed Better Date Management

While building **Max-Explorer**, a train itinerary search engine, I had to handle **dates in JavaScript**.

To calculate connections and available train options, I had to deal with departure and return dates precisely. But using native `Date` objects quickly became a problem. JavaScript tends to interpret dates relative to the **server’s local timezone**, which led to some unexpected behavior:

```tsx
new Date('2025-04-15')
// → Returns April 14th at 20:00 depending on the server's timezone
```

This was not sustainable. So I looked for a library with timezone support and found **Luxon**.

## What is Luxon?

**Luxon** is a modern JavaScript library for working with dates and times. Created by one of the Moment.js authors, it offers:

- A chainable, object-oriented API
- First-class **timezone** support
- Native parsing and formatting of ISO strings
- Formatting, comparisons and date arithmetic

It works the same in the browser and in Node.js.

## Installing Luxon

```bash
npm install luxon
```

## Utility module: `dateUtils.ts`

To reuse the same logic across the codebase, I created a small utility module using Luxon:

```tsx
// libs/dateUtils.ts

import { DateTime, DurationLikeObject } from 'luxon'

const DEFAULT_ZONE = 'Europe/Paris'

export const parseISODate = (iso: string): DateTime => {
  return DateTime.fromISO(iso, { zone: DEFAULT_ZONE })
}

export const fromJSDate = (date: Date): DateTime => {
  return DateTime.fromJSDate(date, { zone: DEFAULT_ZONE })
}

export const toUTCJSDate = (dt: DateTime): Date => {
  return dt.toUTC().toJSDate()
}

export const addDuration = (dt: DateTime, duration: DurationLikeObject): DateTime => {
  return dt.plus(duration)
}

export const isBefore = (dt1: DateTime, dt2: DateTime): boolean => {
  return dt1.toUTC() < dt2.toUTC()
}

```

### Example usage:

```tsx
import { parseISODate, addDuration, toUTCJSDate } from '~/libs/dateUtils'

const departure = parseISODate('2025-04-15')
const returnDate = addDuration(departure, { days: 8 })

console.log('Departure:', toUTCJSDate(departure))
console.log('Return:', toUTCJSDate(returnDate))

```

## Key Takeaways

- Native `Date` is unreliable when it comes to timezones — avoid it when possible.
- **Luxon** gives you full control over timezones, parsing, and date manipulation.
- Centralize logic in a utility (`dateUtils.ts`) to keep your code maintainable and testable.
