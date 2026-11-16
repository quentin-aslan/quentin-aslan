## Le contexte

Interrègne est une revue en ligne de géopolitique, de sciences humaines, de philosophie et de critique esthétique, fondée en 2026 par un professeur d'histoire et un essayiste. Ils avaient une maquette et un site qu'ils ne pouvaient pas mettre à jour eux-mêmes. Il leur fallait une plateforme où chaque auteur écrit, illustre et publie seul.

## La stack

- **Application** : Next.js 16 (App Router, React 19, TypeScript) et Payload 3 dans un seul process : le site public et le back-office partagent le même code et la même base SQLite, sans API interne entre les deux.
- **Éditeur** : Lexical, étendu avec des blocs sur mesure pour les notes de bas de page, les renvois vers d'autres articles, les citations sourcées, les exergues, les images et les vidéos, tous insérés avec « / ».
- **Infrastructure** : Docker sur un VPS derrière Cloudflare et Caddy, CI/CD avec GitHub Actions, sauvegardes chaque nuit sur Cloudflare R2.

## Ce que j'ai construit

- **Site public** repris de la maquette : rubriques, articles, auteurs, dossiers, thématiques, mots-clés, index, recherche côté serveur, RSS, thèmes clair et sombre. Les pages ont été comparées à la maquette par diff visuel avec Playwright et pixelmatch.
- **SEO** : URL canoniques, Open Graph, JSON-LD (Organization, Article, Person), sitemap, robots, titre et description sur chaque page.
- **Back-office en français** avec contrôle d'accès par rôle : administrateur, éditeur, auteur et contributeur. Une validation côté serveur bloque la publication d'un article sans chapô, couverture, thématique, auteur ou rubrique.
- **Publication programmée** avec les jobs Payload, versions, prévisualisation et sauvegarde automatique.
- **Images** : original conservé, déclinaisons WebP générées avec sharp.
- **Migration** depuis Directus et PostgreSQL : 24 articles avec leurs images, 6 rubriques, 6 dossiers et les pages fixes.
- **Déploiements** : GitHub Actions construit l'image Docker et l'envoie par une clé SSH limitée au script de déploiement. Le déploiement échoue si le site ne répond pas après redémarrage.
- **Sauvegardes** : base et médias sur Cloudflare R2 chaque nuit, avec une procédure de reprise après sinistre testée de bout en bout.

## Résultats

- En ligne sur interregne.com depuis le 6 novembre 2026, avec tous les articles de l'ancien site.
- Les rédacteurs écrivent, programment et publient seuls, sans développeur.
