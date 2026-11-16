## El contexto

Interrègne es una revista en línea de teoría, historia y crítica, fundada en septiembre de 2026 por Aurélien B. y Gabriel R.-M. Su primer sitio funcionaba con Next.js, el CMS Directus y Vercel. Los fundadores querían publicar sus artículos sin pedírselo a un desarrollador cada vez, y Aurélien había dibujado una maqueta del nuevo sitio.

## Mi papel

Lo construí solo y pro bono, para un amigo: decisiones técnicas, desarrollo, migración del contenido, alojamiento y la guía para los editores. El diseño visual es la maqueta de los fundadores.

## Lo que construí

- Una sola app Next.js 16 que sirve el sitio público y el back office Payload 3, sobre SQLite. No hay un CMS aparte que alojar ni una API interna entre los dos.
- El sitio público, llevado desde la maqueta: inicio, secciones, artículos, autores, dossiers, temáticas, palabras clave, índice, búsqueda en el servidor, RSS y temas claro y oscuro. Un banco de pruebas con Playwright y pixelmatch comparaba cada página con la maqueta.
- Un back office en francés con cuatro roles: administrador, editor, autor (solo sus artículos) y colaborador (solo borradores). Un artículo no se puede publicar sin entradilla, portada, temática, autor y sección.
- Un editor en el que escribir "/" añade una nota al pie, un enlace a otro artículo, una cita, una imagen o un vídeo. La publicación programada se ejecuta como tarea del servidor cada minuto.
- Un script de migración desde Directus: 24 artículos con sus imágenes, 6 secciones, 6 dossiers y las páginas fijas.
- El alojamiento en un contenedor Docker en un VPS, detrás de Cloudflare y Caddy. GitHub Actions construye la imagen y la despliega con una clave SSH que solo puede ejecutar el script de despliegue.
- Copias de seguridad de la base de datos y las imágenes cada noche en Cloudflare R2, en la cuenta de la revista, con un procedimiento de restauración probado de principio a fin.
- Una guía ilustrada para los editores.

## Resultados

- El sitio está en línea en interregne.com desde el 6 de noviembre de 2026, con los artículos del sitio anterior.
- Los editores escriben, programan y publican sus artículos ellos mismos.

## Lo que aprendí

Construir la imagen Docker en el VPS lo dejó sin memoria. Ahora la imagen se construye en la CI y el servidor solo la carga.

Los verdaderos datos de prueba de un sitio editorial son un artículo largo pegado desde Word. El primero chocó con un límite de 40 000 caracteres, que eliminé el mismo día.
