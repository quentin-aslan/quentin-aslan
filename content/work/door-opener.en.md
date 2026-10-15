## The context

In 2025 I lived in a flat-share in a building with an old gate and an old entrance door. The gate remote only worked within about five metres, so I had to stop outside before it would open. The door lock was awkward to use every day.

Both could already be opened from the intercom inside the flat. That gave me the idea: if the intercom can open them, a microcontroller wired to the intercom can too, and a phone can talk to the microcontroller.

## My role

It is a personal project. I did the wiring, wrote the firmware and the backend, and set up the network path from the phone to the intercom.

## What I built

- Inside the intercom, I found the four wires that trigger the two releases and connected them to relays.
- ESP32 firmware in C with a small HTTP server: one endpoint per door, each closing its relay for a few seconds, like a press on the intercom button.
- A Go microservice in front of the firmware. It accepts only POST requests, checks a passphrase, then sends the command to the board. It also exposes Prometheus counters for each door.
- A GitHub Actions workflow that builds the Go binary and deploys it as a systemd service.
- The network path. My internet provider shares public IPv4 addresses between customers, so port forwarding was not an option. I set up a WireGuard VPN between a server and a Raspberry Pi at home, with Caddy as the reverse proxy. No port is open on the home router.

## Results

- My flatmates and I opened the gate and the door from our phones, without stopping at the gate.
- Prometheus counters show how often each door is opened.
- The Go service is public on GitHub.

## What I learned

Security came first. A door that opens on an HTTP request must not open for anyone who finds the link, so the passphrase check sits in its own service and the home network stays closed behind the VPN.

The network was harder than the hardware. Shared IPv4 addresses ruled out the simple setup, and the VPN tunnel turned out to be cleaner anyway.

The next steps are clear. The Wi-Fi credentials are written into the firmware, so changing them means reflashing the board; a configuration page served by the ESP32 would fix that and bring it closer to a finished product. The passphrase check could also move into the firmware, which would remove a component.
