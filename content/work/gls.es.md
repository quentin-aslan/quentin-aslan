## El contexto

Trabajé como freelance con GLS France, operador de paquetería, en dos proyectos.

El primero (noviembre de 2024 a marzo de 2025, Toulouse) trató sobre la aplicación web de seguimiento de paquetes con la que los destinatarios de GLS siguen y modifican sus entregas. El segundo (agosto a octubre de 2026, en remoto), sobre servicios backend orientados a eventos para la paquetería de larga distancia y el uso de la IA por los equipos de desarrollo.

## Mi rol

En el primero, fui lead full-stack: dirigí el front end en Vue 3 y TypeScript, desarrollé los servicios de códigos PIN en Go y Java que había detrás, fui mentor de un becario, participé en las reuniones de arquitectura y redacté las especificaciones junto al equipo.

En el segundo, fui ingeniero backend en Java y Go y además desarrollé las herramientas de IA para los equipos de desarrollo y los formé en ellas.

## Lo que construí

### Seguimiento de paquetes, 2024 a 2025

- Un servicio Go de códigos PIN, del diseño a la producción: almacenamiento, validación y caducidad, con API REST, OpenAPI, tests unitarios y migración de base de datos.
- La parte Java Spring Boot, que envía el PIN por correo y SMS con Amazon SQS.
- Una auditoría de accesibilidad para la European Accessibility Act, con RGAA y WAVE, en cuatro ámbitos: un formulario, las plantillas de correo, la página NPS y la aplicación de seguimiento para destinatarios.
- Un plan de corrección, estimado en 3 semanas: ARIA, contraste, HTML semántico, zonas táctiles en móvil y nuevas plantillas de correo.
- La adaptación a WCAG de las páginas NPS y de seguimiento, con el equipo de design system.
- CI/CD con GitLab, Terraform en AWS y dashboards de Grafana.

### Datos logísticos e IA, 2026

- Microservicios Java y Go para un pipeline orientado a eventos que procesa las mediciones de llenado de los camiones tomadas por cámaras con IA, con sus dashboards operativos.
- Refuerzo de seguridad: TLS de PostgreSQL con verificación de certificados RDS y gestión de peticiones mal formadas.
- Un plugin compartido para Claude Code y Copilot, con skills, comandos y hooks de control.
- Comandos de release: code review, merge requests y despliegues en AWS.

Formé a los equipos en estas herramientas y participé en la arquitectura del RAG interno.

## Resultados

- La preparación de cada release pasó de unos 90 minutos a entre 30 y 45.
- El plugin de IA lo usan más de 30 desarrolladores.
- La aplicación de seguimiento cuyo front end dirigí recibe 2,2 millones de visitas al mes, según GLS.

## Lo que aprendí

Una lista de problemas de accesibilidad es difícil de planificar. La estimación de 3 semanas la convirtió en un plan.

Los hooks compartidos entre Claude Code y Copilot aplican los mismos controles, use el desarrollador la herramienta que use.
