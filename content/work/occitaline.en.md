## The context

[Occitaline](https://www.occitaline.com/) is a small company near Toulouse that builds network equipment for building management systems (GTB): the networks that run heating, ventilation, lighting and technical equipment in large buildings. I worked there from October 2019 to August 2022, as a work-study alongside Epitech.

When I arrived, the company's creator wanted a router designed for GTB networks, with cybersecurity at its core. That product became the [Ox-Bras](https://www.occitaline.com/ox-bras/): an industrial Ethernet/IP switch-router on a DIN rail, with a dual-core Cortex-A7, a Cortex-M4, eight gigabit RJ45 ports, two SFP fiber ports and a secure element that stores certificates and handles encryption.

## My role

I was a full-stack developer, and I took part in the product from A to Z: writing the specifications, building the software that drives the router and presenting it to clients.

The routers were ordered by government institutions, so we had to comply with ANSSI recommendations, the French national cybersecurity agency.

## What I built

- The web application that configures the router from A to Z. Changes made in the interface are applied on the device through Linux scripts.
- The REST API behind it, in Node.js with MongoDB, and the interfaces in Vue 3, jQuery and Bootstrap.
- The network configuration it drives on embedded Linux: VLAN segmentation, IP routing, NAT, netfilter/iptables firewall rules, VPN, DHCP and DNS, with services managed by systemd.
- Suricata network intrusion detection integrated on the router.
- Client presentations of the product's security model: configuration data stored encrypted, an administration interface that can be locked behind the firewall, every login and configuration change logged to a syslog server, and SNMPv3 monitoring, read-only, with authentication and encryption.
- A 2D graphic editor with drawing tools.
- A web map to supervise sensors and routers across several sites, and a JavaScript viewer for 3D building models (BIM).

## Results

- Ox-Bras routers deployed at CNES, the French space agency, including the Ariane launch pads, and at the Stade de France.
- A version shown at the IBS trade show in Paris in October 2021, then version 1 in early 2022.
- Technical presentations and live demos of the product to clients.

## What I learned

How a computer network works, from VLANs and routing to firewalls, DHCP and DNS.

How to write a technical specification before building a feature.

How to present a technical product to clients, run a live demo and answer their questions in the discussion that follows.
