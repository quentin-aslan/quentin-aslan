## El contexto

Interrègne es una revista en línea de geopolítica, ciencias humanas, filosofía y crítica estética, fundada en 2026 por un profesor de historia y un ensayista. Tenían una maqueta y un sitio que no podían actualizar ellos mismos. Necesitaban una plataforma en la que cada autor escriba, ilustre y publique por su cuenta.

## El stack

- **Aplicación**: Next.js 16 (App Router, React 19, TypeScript) y Payload 3 en un solo proceso: el sitio público y el back office comparten el mismo código y la misma base SQLite, sin API interna entre ellos.
- **Editor**: Lexical, ampliado con bloques propios para notas al pie, enlaces a otros artículos, citas con fuente, destacados, imágenes y vídeos, todos insertados con "/".
- **Infraestructura**: Docker en un VPS detrás de Cloudflare y Caddy, CI/CD con GitHub Actions, copias de seguridad cada noche en Cloudflare R2.

## Lo que construí

- **Sitio público** llevado desde la maqueta: secciones, artículos, autores, dossiers, temáticas, palabras clave, índice, búsqueda en el servidor, RSS, temas claro y oscuro. Las páginas se compararon con la maqueta mediante diferencias visuales con Playwright y pixelmatch.
- **SEO**: URL canónicas, Open Graph, JSON-LD (Organization, Article, Person), sitemap, robots y un título y una descripción en cada página.
- **Back office en francés** con control de acceso por roles: administrador, editor, autor y colaborador. Una validación en el servidor impide publicar un artículo sin entradilla, portada, temática, autor o sección.
- **Publicación programada** con los jobs de Payload, versiones, vista previa y guardado automático.
- **Imágenes**: original conservado y variantes WebP generadas con sharp.
- **Migración** desde Directus y PostgreSQL: 24 artículos con sus imágenes, 6 secciones, 6 dossiers y las páginas fijas.
- **Despliegues**: GitHub Actions construye la imagen Docker y la envía con una clave SSH limitada al script de despliegue. El despliegue falla si el sitio no responde tras reiniciar.
- **Copias de seguridad**: base de datos y medios en Cloudflare R2 cada noche, con un procedimiento de recuperación ante desastres probado de principio a fin.

## Resultados

- En línea en interregne.com desde el 6 de noviembre de 2026, con todos los artículos del sitio anterior.
- Los editores escriben, programan y publican por su cuenta, sin un desarrollador.
