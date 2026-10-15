Handling dates in JavaScript can quickly become a nightmare, especially when dealing with timezones. While building Max Explorer, I discovered how unreliable native Date objects could be — leading to subtle bugs. In this article, I share how switching to Luxon, a modern date-time library, helped me build clean and reliable date logic, and how I centralized it into a production-ready utility module.

## Why I Needed Better Date Management

While building **Max Explorer**, a train itinerary search engine, I ran into a familiar developer pain: **handling dates in JavaScript**.

To calculate connections and available train options, I had to deal with departure and return dates precisely. But using native `Date` objects quickly became a problem. JavaScript tends to interpret dates relative to the **server’s local timezone**, which led to some unexpected behavior:

```tsx
new Date('2025-04-15')
// → Returns April 14th at 20:00 depending on the server's timezone
```

This was clearly not sustainable. So I looked for a **reliable, readable, and modern** library. That's when I found **Luxon**.

## What is Luxon?

**Luxon** is a modern JavaScript library for working with dates and times. Created by one of the Moment.js authors, it offers:

- A clean, chainable, and object-oriented API
- First-class **timezone** support
- Native parsing and formatting of ISO strings
- Great support for formatting, comparisons, and math operations

Perfect for backend use and clean architecture projects.

## Installing Luxon

```bash
npm install luxon
```

## Production-Friendly Utility: `dateUtils.ts`

To keep things clean and reusable across my codebase, I created a small utility module using Luxon:

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
- Ideal for clean architecture projects where **framework-agnostic logic** is a priority.
