## Le contexte

Railora est une application iOS grand public de suivi de trains en temps réel. Je la décris comme un Flighty pour les trains.

L'idée est née d'un long voyage : après avoir traversé la Thaïlande, le Laos et le Vietnam, je suis rentré de Hanoï à Paris en train, par la Chine, l'Asie centrale, la Géorgie et la Turquie.

Pendant ce trajet, je voulais un seul endroit pour suivre mes trains et leurs retards. Chaque pays avait son opérateur, son site et ses propres données, et aucune application ne couvrait tout le parcours.

## Mon rôle

Je suis le créateur et le seul développeur de Railora. Je l'ai construite seul, de l'étude de marché à la production : les choix produit, l'application iOS, le backend, l'intégration des données et la publication sur l'App Store.

## Ce que j'ai construit

- Une application iOS en SwiftUI, avec des Live Activities pour suivre un train depuis l'écran verrouillé.
- Des notifications push via APNs, y compris des Live Activities lancées par un push.
- Un backend serverless sur Cloudflare Workers, écrit en TypeScript.
- Un serveur MCP officiel, [mcp.railora.app](https://mcp.railora.app), pour que les voyageurs interrogent Claude, ChatGPT ou tout assistant IA sur les trains en direct et les places TGV MAX.
- Un stockage sur Turso (libSQL), avec un Durable Object, KV et R2 pour l'état en direct et les caches.
- Des collecteurs qui ingèrent les horaires et les flux temps réel aux formats GTFS, GTFS-RT et SIRI, avec un module par pays, car chaque réseau publie ses données à sa manière.
- Neuf détecteurs d'alertes qui surveillent un train suivi et préviennent le voyageur.
- Un statut de retard construit avec LangGraph, qui décide comment l'application affiche si un train est en retard.

## Résultats

- Sur l'App Store, plusieurs milliers d'utilisateurs.
- Les horaires de 11 pays.
- Un serveur MCP public avec 5 outils en lecture seule, en production.
- Des données temps réel sur 8 réseaux ferroviaires.
- 9 types d'alertes.

## Utiliser Railora depuis votre assistant IA

Railora a un serveur MCP officiel. Ajoutez `https://mcp.railora.app` comme connecteur dans Claude, ChatGPT ou tout client MCP, sans connexion, puis posez une question comme « Quels trains TGV MAX vont de Toulouse à Paris ce mois-ci ? ».

- Cinq outils en lecture seule : recherche de gares, tableaux des départs en direct, état du réseau, calendrier TGV MAX et recherche de trajets TGV MAX.
- Il tourne sur un Worker Cloudflare sans état qui lit les mêmes données en cache que l'application.
- Il est limité par IP et par un quota journalier, pour que le coût reste borné.

## Ce que j'en retiens

Les données ferroviaires n'ont pas de standard unique : certains réseaux publient des flux temps réel, d'autres seulement des horaires théoriques. Cet écart façonne le produit, car l'application doit dire clairement ce qu'elle sait en direct et ce qui vient d'un horaire.

Un backend serverless a gardé l'infrastructure assez légère pour qu'une seule personne la fasse tourner. Cloudflare Workers, un Durable Object et une base hébergée couvrent ce qui demanderait ailleurs des serveurs.

Travailler seul m'a obligé à trancher chaque compromis moi-même et à décider quoi livrer, quoi couper et quoi garder pour plus tard.

Le voyage a été la meilleure recherche utilisateur possible. J'étais l'utilisateur, dans de vrais trains, à de vraies frontières, avec de vrais retards.
