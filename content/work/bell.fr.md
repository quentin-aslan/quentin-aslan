## Le contexte

Bell est le premier opérateur télécom du Canada. J'y ai travaillé de septembre 2022 à mai 2024 à Montréal, dans le cadre d'un V.I.E.

J'ai rejoint l'équipe du Centre Libre-Service, qui construit une plateforme en microservices pour les clients entreprises (B2B) et particuliers (B2C) de Bell. L'équipe travaillait en anglais, en Scrum.

## Mon rôle

J'étais développeur full-stack : je construisais le front en Vue 3 et TypeScript, et je contribuais aux microservices Java Spring Boot derrière les applications.

J'ai participé au lancement d'une application web destinée aux clients de Bell : j'ai identifié les besoins, choisi les technologies et posé les fondations du front.

## Ce que j'ai construit

- J'ai travaillé sur la refonte d'un SaaS B2B pour les clients entreprises de Bell, mon produit principal. Ce SaaS permet à une entreprise de gérer les forfaits de ses employés, de commander des téléphones, de contacter le support et de suivre les usages et les dépenses.
- J'ai ensuite travaillé sur un outil interne d'intervention terrain pour les techniciens qui installent la fibre chez les clients.
- J'ai construit le front avec Vue 3, TypeScript, Pinia, Element Plus et l'i18n en français et en anglais.
- J'ai développé une bannière en Web Component et je l'ai rendue conforme WCAG : structure sémantique, libellés en français et en anglais, focus trap au clavier et vérification des contrastes.
- J'ai mis en place Cypress pour les tests end-to-end et écrit des tests unitaires Jest.
- J'ai intégré Matomo pour mesurer l'usage.
- Les applications étaient déployées avec Docker sur OpenShift, depuis GitLab.

L'accessibilité faisait partie de chaque fonctionnalité, construite au niveau WCAG AA, et AAA quand c'était possible. Je testais avec VoiceOver, NVDA et au clavier seul avec l'équipe QA, et quand une maquette posait un problème d'accessibilité, je revoyais les fichiers Figma avec l'équipe design system.

## Résultats

- La refonte du SaaS B2B avec lequel les entreprises clientes de Bell gèrent les forfaits, les téléphones et les dépenses de leurs employés.
- Les fondations du front d'une application web utilisée par les clients de Bell, au lancement de laquelle j'ai participé.
- Les tests end-to-end Cypress du front, que j'ai mis en place.
- Chaque fonctionnalité que j'ai livrée était conforme WCAG AA.

À mon départ, mon manager m'a écrit une [lettre de recommandation](#letter).

## Ce que j'en retiens

L'accessibilité se construit plus facilement dès la première maquette qu'en correction après la mise en production.

Les lecteurs d'écran révèlent des problèmes qu'une vérification visuelle ne voit pas, et tester avec VoiceOver et NVDA a changé ma façon de structurer le HTML.

Un Web Component peut embarquer son accessibilité. Une fois la bannière conforme, chaque page qui l'utilisait a hérité du même comportement.
