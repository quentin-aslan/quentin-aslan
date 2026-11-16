## Le contexte

Interrègne est une revue en ligne fondée en 2026. Ses fondateurs voulaient publier sans développeur, sur un nouveau site construit à partir de leur maquette.

## Ce que j'ai construit

- Une seule app Next.js 16 qui sert le site public et le back-office Payload 3, sur SQLite.
- Un back-office en français : 4 rôles, notes, citations et renvois insérés avec « / », publication programmée.
- La migration depuis Directus : 24 articles, 6 rubriques, 6 dossiers.
- Docker sur un VPS derrière Cloudflare, déployé par GitHub Actions.
- Des sauvegardes chaque nuit sur Cloudflare R2, avec une restauration testée.

## Résultats

- En ligne sur interregne.com depuis le 6 novembre 2026.
- Les rédacteurs publient seuls.
