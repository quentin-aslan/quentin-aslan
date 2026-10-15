## Le contexte

En 2025, je vivais en colocation dans un immeuble au portail et à la porte d'entrée vieillissants. La télécommande du portail ne fonctionnait qu'à cinq mètres environ, ce qui m'obligeait à m'arrêter devant avant qu'il ne s'ouvre. La serrure de la porte, elle, était pénible à utiliser au quotidien.

Les deux pouvaient déjà s'ouvrir depuis l'interphone de l'appartement. D'où l'idée : si l'interphone peut les ouvrir, un microcontrôleur branché sur l'interphone le peut aussi, et un téléphone peut parler au microcontrôleur.

## Mon rôle

C'est un projet personnel. J'ai fait le câblage, écrit le firmware et le backend, et mis en place le chemin réseau du téléphone jusqu'à l'interphone.

## Ce que j'ai construit

- Dans l'interphone, j'ai repéré les quatre fils qui commandent les deux ouvertures et je les ai reliés à des relais.
- Un firmware ESP32 en C avec un petit serveur HTTP : un endpoint par porte, qui ferme son relais quelques secondes, comme un appui sur le bouton de l'interphone.
- Un microservice Go devant le firmware. Il n'accepte que des requêtes POST, vérifie une phrase secrète puis envoie la commande à la carte. Il expose aussi des compteurs Prometheus pour chaque porte.
- Un workflow GitHub Actions qui compile le binaire Go et le déploie comme service systemd.
- Le chemin réseau. Mon fournisseur d'accès partage les adresses IPv4 publiques entre clients, la redirection de ports était donc impossible. J'ai monté un VPN WireGuard entre un serveur et un Raspberry Pi à la maison, avec Caddy en reverse proxy. Aucun port n'est ouvert sur la box.

## Résultats

- Mes colocataires et moi ouvrions le portail et la porte depuis nos téléphones, sans nous arrêter devant le portail.
- Les compteurs Prometheus indiquent combien de fois chaque porte est ouverte.
- Le service Go est public sur GitHub.

## Ce que j'en retiens

La sécurité passait avant tout. Une porte qui s'ouvre sur une requête HTTP ne doit pas s'ouvrir pour quiconque trouve le lien : la vérification de la phrase secrète se fait donc dans un service à part, et le réseau de la maison reste fermé derrière le VPN.

Le réseau a été plus difficile que le matériel. Les adresses IPv4 partagées excluaient la solution simple, et le tunnel VPN s'est révélé plus propre de toute façon.

Les prochaines étapes sont claires. Les identifiants Wi-Fi sont écrits dans le firmware, donc les changer impose de reflasher la carte ; une page de configuration servie par l'ESP32 réglerait ce point. La vérification de la phrase secrète pourrait aussi passer dans le firmware, ce qui supprimerait un composant.
