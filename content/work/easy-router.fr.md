## Le contexte

Début 2024, je travaillais depuis Boston. Travailler à l'étranger, c'est passer par le Wi-Fi des hôtels, des cafés et des aéroports, et je ne voulais pas que mes données ni celles de mes clients transitent par des réseaux que je ne maîtrisais pas.

Un routeur de voyage règle ce problème : un petit boîtier se connecte au réseau public et partage un hotspot privé, protégé par un VPN, avec mon ordinateur et mon téléphone. J'ai acheté un Raspberry Pi 4 à la boutique du MIT et je l'ai transformé en routeur. J'ai ensuite construit Easy Router, une interface web embarquée qui tourne sur le Pi, pour configurer le routeur rapidement et sans terminal.

## Mon rôle

C'est un projet personnel. Je l'ai conçu, j'ai écrit le front et le backend, et j'ai configuré le Raspberry Pi moi-même.

## Ce que j'ai construit

- Un Raspberry Pi 4 avec deux interfaces Wi-Fi : l'interface intégrée se connecte au réseau public et un adaptateur Wi-Fi USB diffuse le hotspot privé.
- Une interface web en Vue 3, TypeScript et Tailwind, installable en PWA et pensée d'abord pour le téléphone.
- Des écrans pour scanner les réseaux proches avec leur puissance de signal, s'y connecter ou s'en déconnecter, et ouvrir le portail captif quand un réseau public demande une identification.
- Le pilotage de NordVPN : statut avec ville, pays, durée de connexion et trafic, et un choix de ville pour se connecter ou se déconnecter.
- Les réglages du hotspot et la liste des appareils qui y sont connectés.
- Un backend Node.js et Express en TypeScript, qui sert l'interface et pilote le système via nmcli et la ligne de commande NordVPN. Un premier prototype de ce backend était en Python avec Flask.
- Une API simulée avec MirageJS, pour développer sans le Pi.

## Résultats

- Un routeur de voyage fonctionnel, configuré depuis le navigateur du téléphone.
- J'ai publié une première version en quatre jours, et le projet a atteint 44 commits en une dizaine de jours.
- Le code est public sur GitHub.

## Ce que j'en retiens

L'essentiel du travail était dans la couche Linux, pas dans l'interface. Le backend analyse la sortie d'outils en ligne de commande, et chaque détail, comme un nom de réseau avec des espaces, compte.

Simuler l'API dès le début a été payant. Je pouvais avancer sur l'interface n'importe où et je n'avais besoin du Pi que pour tester les vraies commandes.

J'y ai réutilisé ce que j'avais appris sur les routeurs industriels pendant mon alternance : interfaces réseau, routage et VPN, cette fois sur un boîtier qui tient dans un sac.
