## Le contexte

[Occitaline](https://www.occitaline.com/) est une PME près de Toulouse qui conçoit des équipements réseau pour la gestion technique de bâtiment (GTB) : les réseaux qui pilotent le chauffage, la ventilation, l'éclairage et les équipements techniques des grands bâtiments. J'y ai travaillé d'octobre 2019 à août 2022, en alternance avec Epitech.

À mon arrivée, le créateur de l'entreprise voulait un routeur pensé pour les réseaux GTB, avec la cybersécurité au cœur du produit. Ce produit est devenu l'[Ox-Bras](https://www.occitaline.com/ox-bras/) : un switch-routeur Ethernet/IP industriel sur rail DIN, avec un Cortex-A7 double cœur, un Cortex-M4, huit ports RJ45 gigabit, deux ports fibre SFP et un secure element qui stocke les certificats et gère le chiffrement.

## Mon rôle

J'étais développeur full-stack et j'ai participé au produit de A à Z : la rédaction du cahier des charges, le logiciel qui pilote le routeur et la présentation aux clients.

Les routeurs étaient commandés par des institutions gouvernementales, nous devions donc être conformes aux recommandations de l'ANSSI.

## Ce que j'ai construit

- L'application web qui configure le routeur de A à Z. Les modifications faites dans l'interface sont appliquées sur l'appareil via des scripts Linux.
- L'API REST derrière, en Node.js avec MongoDB, et les interfaces en Vue 3, jQuery et Bootstrap.
- La configuration réseau qu'elle pilote sur Linux embarqué : segmentation en VLAN, routage IP, NAT, règles de pare-feu netfilter/iptables, VPN, DHCP et DNS, avec des services gérés par systemd.
- Détection d'intrusion réseau Suricata intégrée au routeur.
- La présentation aux clients du modèle de sécurité du produit : données de configuration chiffrées, interface d'administration verrouillable derrière le pare-feu, chaque connexion et modification de configuration journalisée sur un serveur syslog, et supervision SNMPv3 en lecture seule, avec authentification et chiffrement.
- Un éditeur graphique 2D doté de divers outils de dessin.
- Une carte web pour superviser les capteurs et les routeurs de plusieurs sites, et un visualiseur JavaScript de maquettes 3D de bâtiments (BIM).

## Résultats

- Des routeurs Ox-Bras déployés au CNES, jusqu'aux pas de tir Ariane, et au Stade de France.
- Une version présentée au salon IBS à Paris en octobre 2021, puis la version 1 début 2022.
- Des présentations techniques et des démos en direct du produit aux clients.

## Ce que j'ai appris

Le fonctionnement d'un réseau informatique, des VLAN et du routage jusqu'au pare-feu, au DHCP et au DNS.

La rédaction d'un cahier des charges avant de développer une fonctionnalité.

La présentation technique d'un produit à des clients : la démo en direct, puis la discussion et les questions qui suivent.
