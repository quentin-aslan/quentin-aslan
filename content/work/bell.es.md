## El contexto

Bell es el mayor operador de telecomunicaciones de Canadá. Trabajé allí de septiembre de 2022 a mayo de 2024, en Montreal, dentro del programa de trabajo internacional V.I.E.

Me uní al equipo del Self-Service Center, que construye una plataforma de microservicios para los clientes empresariales (B2B) y particulares (B2C) de Bell. El equipo trabajaba en inglés, con Scrum.

## Mi rol

Fui desarrollador full-stack: construía el front en Vue 3 y TypeScript y contribuía a los microservicios Java Spring Boot que sostienen las aplicaciones.

Participé en el lanzamiento de una aplicación web para los clientes de Bell: identifiqué las necesidades, elegí las tecnologías y senté las bases del front end.

## Lo que construí

- Trabajé en el rediseño de un SaaS B2B para los clientes empresariales de Bell, mi producto principal. Permite a una empresa gestionar los planes de sus empleados, pedir teléfonos, contactar con soporte y seguir el consumo y los gastos.
- Después trabajé en una herramienta interna de intervención en campo para los técnicos que instalan fibra en casa de los clientes.
- Desarrollé el front end con Vue 3, TypeScript, Pinia, Element Plus e i18n en francés e inglés.
- Desarrollé un banner como Web Component y lo adapté a WCAG: estructura semántica, etiquetas en francés e inglés, focus trap de teclado y revisión de contrastes.
- Puse en marcha Cypress para los tests end-to-end y escribí tests unitarios con Jest.
- Integré Matomo para medir el uso.
- Las aplicaciones se desplegaban con Docker en OpenShift, desde GitLab.

La accesibilidad formaba parte de cada funcionalidad: desarrollé cada una con nivel WCAG AA, y AAA cuando era posible. Probé con VoiceOver, NVDA y solo con teclado, junto al equipo de QA, y cuando un diseño planteaba un problema de accesibilidad, revisaba los archivos de Figma con el equipo de design system.

## Resultados

- El rediseño del SaaS B2B con el que las empresas clientes de Bell gestionan los planes, los teléfonos y los gastos de sus empleados.
- Las bases del front end de una aplicación web que usan los clientes de Bell, en cuyo lanzamiento participé.
- Los tests end-to-end con Cypress sobre el front end, que puse en marcha.
- Cada funcionalidad que entregué cumplía el nivel WCAG AA.

Al irme, mi manager me escribió una [carta de recomendación](#letter).

## Lo que aprendí

La accesibilidad es más fácil de incluir desde el primer diseño que de corregir después del lanzamiento.

Los lectores de pantalla muestran problemas que una revisión visual no detecta, y probar con VoiceOver y NVDA cambió mi forma de estructurar el HTML.

Un Web Component puede llevar consigo su accesibilidad. Una vez que el banner cumplió los criterios, cada página que lo usaba heredó el mismo comportamiento.
