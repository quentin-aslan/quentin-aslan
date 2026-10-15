## The context

GLS is a parcel carrier, and I worked with GLS France on two freelance contracts.

The first, from November 2024 to March 2025 in Toulouse, covered the parcel-tracking web app that GLS recipients use to track and change their deliveries. The second, from August to October 2026 and fully remote, covered event-driven backend services for long-haul parcel logistics and the use of AI tools by the development teams.

## My role

On the first contract, I was the lead full-stack developer. I led the Vue 3 and TypeScript front end, built the PIN-code services in Go and Java behind it, mentored a trainee, attended the architecture meetings and co-wrote the specs.

On the second, I was a backend engineer in Java and Go, and I also built the AI tooling for the development teams and trained them on it.

## What I built

### Parcel tracking, 2024 to 2025

- A Go service for PIN codes, from design to production: it stores, validates and expires PINs, with a REST API, OpenAPI, unit tests and a database migration.
- The Java Spring Boot part, which sends the PIN by email and SMS through Amazon SQS.
- An accessibility audit for the European Accessibility Act, with RGAA and WAVE, on four scopes: a form, the email templates, the NPS page and the recipient tracking app.
- A remediation plan, estimated at 3 weeks, covering ARIA, contrast, semantic HTML, mobile touch targets and a rebuild of the email templates.
- WCAG compliance of the NPS and parcel-tracking pages, with the design-system team.
- GitLab CI/CD, Terraform on AWS and Grafana dashboards.

### Logistics data and AI, 2026

- Java and Go microservices for an event-driven pipeline of AI cameras that measure truck fill rate, and operational dashboards on that data.
- Security hardening: PostgreSQL TLS with RDS certificate verification, and handling of malformed requests.
- A shared plugin for Claude Code and Copilot, with skills, commands and guardrail hooks.
- Release commands for code review, merge requests and AWS deployments.

I trained the teams on these tools and took part in the architecture of the internal RAG.

## Results

- Release preparation went from about 90 minutes to 30 to 45 minutes.
- The AI plugin is used by about 30 developers.
- The tracking app whose front end I led handles 2.2 million visits a month, according to GLS.

## What I learned

An accessibility audit needs an estimate to become work: a plan with a clear cost is easier to schedule than a list of issues.

With AI tools, guardrails matter as much as skills. Hooks shared between Claude Code and Copilot apply the same rules whatever tool a developer picks.
