## The context

In early 2024 I was working from Boston, and more trips were coming. Working abroad means hotel, café and airport Wi-Fi, and I did not want my own data or my clients' data to travel over networks I did not control.

A travel router solves that: a small device joins the public network and shares a private, VPN-protected hotspot with my laptop and phone. I bought a Raspberry Pi 4 at the MIT store and turned it into one. Then I built Easy Router, an embedded web UI that runs on the Pi, so the router can be configured quickly and without a terminal.

## My role

It is a personal project. I designed it, wrote the front end and the backend, and set up the Raspberry Pi myself.

## What I built

- A Raspberry Pi 4 with two Wi-Fi interfaces: the built-in one joins the public network, and a USB Wi-Fi adapter broadcasts the private hotspot.
- A web interface in Vue 3, TypeScript and Tailwind, installable as a PWA and designed for a phone first.
- Screens to scan nearby networks with their signal strength, join or leave one, and open the captive portal when a public network asks for a login.
- NordVPN control: status with city, country, uptime and traffic, and a city selector to connect or disconnect.
- Hotspot settings and the list of devices connected to it.
- A backend in Node.js and Express, written in TypeScript, that serves the interface and drives the system through nmcli and the NordVPN command line. A first prototype of that backend used Python and Flask.
- A mock API with MirageJS, so I could build the interface on my laptop without the Pi.

## Results

- A working travel router, configured from a phone browser.
- I released a first version in four days, and the project reached 44 commits over about ten days.
- The code is public on GitHub.

## What I learned

Most of the work was in the Linux layer, not the interface. The backend parses the output of command-line tools, so details such as network names with spaces had to be handled one by one.

Mocking the API early paid off. I could work on the interface anywhere and only needed the Pi to test the real commands.

The project also reused what I had learned on industrial routers during my work-study years: network interfaces, routing and VPN, this time on a device that fits in a backpack.
