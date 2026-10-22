## The context

Railora is a consumer iOS app for live train tracking. I describe it as Flighty for trains.

The idea came from a long trip: I travelled through Thailand, Laos and Vietnam, then went home from Hanoi to Paris by train, through China, Central Asia, Georgia and Turkey.

On that journey, I wanted one place to follow my trains and their delays. Each country had its own operator, website and data, and no single app covered the whole route.

## My role

I am the creator and the only developer of Railora. I built it alone, from the market study to production, which covers the product decisions, the iOS app, the backend, the data integrations and the release on the App Store.

## What I built

- An iOS app in SwiftUI, with Live Activities so a traveller can follow a train from the lock screen.
- Push notifications through APNs, including Live Activities started by a push.
- A serverless backend on Cloudflare Workers, written in TypeScript.
- An official MCP server, [mcp.railora.app](https://mcp.railora.app), so travellers can ask Claude, ChatGPT or any AI assistant about live trains and TGV MAX seats.
- Storage on Turso (libSQL), plus a Durable Object, KV and R2 for live state and caches.
- Collectors that ingest timetables and real-time feeds in the GTFS, GTFS-RT and SIRI formats, with one module per country because each network publishes its data in its own way.
- Nine alert detectors that watch a tracked train and notify the traveller.
- A delay status built with LangGraph, which decides how the app shows whether a train is late.

## Results

- On the App Store, several thousand users.
- Timetables for 11 countries.
- A public MCP server with 5 read-only tools, live in production.
- Real-time data on 8 rail networks.
- 9 types of alerts.

## Use Railora from your AI assistant

Railora works inside Claude and ChatGPT through its official MCP server. Add [https://mcp.railora.app](https://mcp.railora.app) as a connector in Claude, ChatGPT or any MCP client, with no sign-in, then ask a question such as "Which TGV MAX trains go from Toulouse to Paris this month?".

- Five read-only tools: station search, live departure boards, network status, the TGV MAX calendar and the TGV MAX journey search.
- It runs on a stateless Cloudflare Worker (MCP SDK v2) that calls the API through service bindings and shares its edge cache.
- It is limited per IP and by a daily quota, so the cost stays bounded.

## What I learned

Rail data has no single standard: some networks publish real-time feeds, others only static timetables. That gap shapes the product, because the app has to be clear about what it knows live and what comes from a timetable.

A serverless backend kept the infrastructure small enough for one person to run. Cloudflare Workers, a Durable Object and a hosted database cover what a larger setup would need servers for.

Building alone forced me to make every trade-off myself and decide what to ship, what to cut and what to leave for later.

The trip itself was the best user research I could do. I was the user, on real trains, crossing real borders, with real delays.
