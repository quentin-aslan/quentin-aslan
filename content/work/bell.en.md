## The context

Bell is the largest telecom operator in Canada. I worked there from September 2022 to May 2024 in Montreal, through an international placement (V.I.E.).

I joined the Self-Service Center team, which builds a microservices platform for Bell's business (B2B) and consumer (B2C) customers. The team worked in English, in Scrum.

## My role

I was a full-stack developer: I built the front end in Vue 3 and TypeScript, and I contributed to the Java Spring Boot microservices behind the apps.

I took part in launching a customer-facing web application: I identified the needs, chose the technologies and laid the front-end foundations.

## What I built

- I worked on the redesign of a B2B SaaS for Bell's business clients, my main product. It lets a company manage its employees' plans, order phones, contact support and follow usage and expenses.
- I then worked on an internal field-service tool for the technicians who install fiber at customers' homes.
- I built the front end with Vue 3, TypeScript, Pinia, Element Plus and i18n for French and English.
- I built a banner as a Web Component and made it WCAG compliant: semantic structure, French and English labels, a keyboard focus trap and contrast checks.
- I set up Cypress for end-to-end tests and wrote Jest unit tests.
- I integrated Matomo for usage analytics.
- The apps were deployed with Docker on OpenShift, from GitLab.

Accessibility was part of every feature: I built each one to WCAG AA, and to AAA when possible. I tested with VoiceOver, NVDA and the keyboard only, alongside the QA team, and when a design raised an accessibility issue, I reviewed the Figma files with the design-system team.

## Results

- The redesign of the B2B SaaS that Bell's business clients use to manage their employees' plans, phones and expenses.
- The front-end foundations of a web application used by Bell customers, which I took part in launching.
- The Cypress end-to-end tests on the front end, which I set up.
- Every feature I delivered met WCAG AA.

When I left, my manager wrote me a [recommendation letter](#letter).

## What I learned

Accessibility is easier to build in from the first design than to fix after release.

Screen readers show problems that a visual check misses, and testing with VoiceOver and NVDA changed how I structure HTML.

A Web Component can carry its accessibility with it. Once the banner was compliant, every page that used it got the same behavior.
