## Le contexte

J'ai travaillé pour GLS France, transporteur de colis, sur deux missions freelance.

La première, de novembre 2024 à mars 2025 à Toulouse, portait sur l'application web de suivi de colis qui permet aux destinataires GLS de suivre et de modifier leurs livraisons. La seconde, d'août à octobre 2026 en full remote, sur des services backend événementiels pour la logistique colis longue distance et sur l'usage de l'IA par les équipes de développement.

## Mon rôle

Sur la première, j'étais lead full-stack : j'ai dirigé le front Vue 3 et TypeScript, développé les services de code PIN en Go et Java derrière, encadré un stagiaire, participé aux réunions d'architecture et co-rédigé les specs.

Sur la seconde, j'étais développeur backend Java et Go et j'ai aussi construit l'outillage IA des équipes de développement, puis je les y ai formées.

## Ce que j'ai construit

### Suivi de colis, 2024 à 2025

- Un service Go de codes PIN, de la conception à la production : stockage, validation et expiration, avec API REST, OpenAPI, tests unitaires et migration de base.
- La partie Java Spring Boot, qui envoie le PIN par e-mail et SMS via Amazon SQS.
- Un audit d'accessibilité pour l'European Accessibility Act, avec le RGAA et WAVE, sur quatre périmètres : un formulaire, les templates d'e-mails, la page NPS et l'application de suivi des destinataires.
- Un plan de remédiation, chiffré à 3 semaines : ARIA, contrastes, HTML sémantique, zones tactiles mobiles et refonte des templates d'e-mails.
- La mise en conformité WCAG des pages NPS et de suivi, avec l'équipe design system.
- CI/CD GitLab, Terraform sur AWS et dashboards Grafana.

### Données logistiques et IA, 2026

- Des microservices Java et Go pour un pipeline événementiel de caméras IA qui mesurent le taux de remplissage des camions, avec leurs dashboards opérationnels.
- Du durcissement sécurité : TLS PostgreSQL avec vérification des certificats RDS, et gestion des requêtes malformées.
- Un plugin partagé pour Claude Code et Copilot, avec des skills, des commandes et des hooks de garde-fous.
- Des commandes de release : code review, merge requests et déploiements AWS.

J'ai formé les équipes à ces outils et participé à l'architecture du RAG interne.

## Résultats

- La préparation des releases est passée d'environ 1 h 30 à 30 à 45 minutes.
- Le plugin IA est utilisé par environ 30 développeurs.
- L'application de suivi dont j'ai dirigé le front reçoit 2,2 millions de visites par mois, selon GLS.

## Ce que j'en retiens

Un audit d'accessibilité ne devient du travail qu'une fois chiffré : un plan chiffré se planifie mieux qu'une liste de problèmes.

Avec l'IA, les garde-fous comptent autant que les skills. Des hooks partagés entre Claude Code et Copilot appliquent les mêmes règles, quel que soit l'outil.
