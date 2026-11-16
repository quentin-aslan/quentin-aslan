## Le contexte

Interrègne est une revue en ligne de théorie, d'histoire et de critique, fondée en septembre 2026 par Aurélien B. et Gabriel R.-M. Son premier site tournait sur Next.js, le CMS Directus et Vercel. Les fondateurs voulaient publier leurs articles sans passer par un développeur à chaque fois, et Aurélien avait dessiné une maquette du nouveau site.

## Mon rôle

Je l'ai construit seul et à titre gracieux, pour un ami : choix techniques, développement, reprise du contenu, hébergement et guide des rédacteurs. Le design visuel est la maquette des fondateurs.

## Ce que j'ai construit

- Une seule app Next.js 16 qui sert à la fois le site public et le back-office Payload 3, sur SQLite. Pas de CMS séparé à héberger, pas d'API interne entre les deux.
- Le site public, repris de la maquette : accueil, rubriques, articles, auteurs, dossiers, thématiques, mots-clés, index, recherche côté serveur, RSS, thèmes clair et sombre. Un banc de test Playwright et pixelmatch comparait chaque page à la maquette.
- Un back-office en français avec quatre rôles : administrateur, éditeur, auteur (ses propres articles) et contributeur (brouillons seulement). Un article ne peut pas être publié sans chapô, couverture, thématique, auteur et rubrique.
- Un éditeur où taper « / » ajoute une note de bas de page, un renvoi vers un autre article, une citation, une image ou une vidéo. La publication programmée tourne comme une tâche serveur chaque minute.
- Un script de migration depuis Directus : 24 articles avec leurs images, 6 rubriques, 6 dossiers et les pages fixes.
- L'hébergement dans un conteneur Docker sur un VPS, derrière Cloudflare et Caddy. GitHub Actions construit l'image et la déploie par une clé SSH qui ne peut lancer que le script de déploiement.
- Des sauvegardes de la base et des images chaque nuit sur Cloudflare R2, sur le compte de la revue, avec une procédure de restauration testée de bout en bout.
- Un guide illustré pour les rédacteurs.

## Résultats

- Le site est en ligne sur interregne.com depuis le 6 novembre 2026, avec les articles de l'ancien site.
- Les rédacteurs écrivent, programment et publient leurs articles eux-mêmes.

## Ce que j'en retiens

Construire l'image Docker sur le VPS l'a mis à court de mémoire. L'image est maintenant construite en CI, et le serveur ne fait que la charger.

Les vraies données de test d'un site éditorial, c'est un long article collé depuis Word. Le premier a buté sur une limite de 40 000 caractères, que j'ai supprimée le jour même.
