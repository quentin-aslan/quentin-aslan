## El contexto

Railora es una aplicación iOS de consumo para seguir trenes en tiempo real. La describo como un Flighty para trenes.

La idea nació de un viaje largo: recorrí Tailandia, Laos y Vietnam y después volví de Hanói a París en tren, pasando por China, Asia Central, Georgia y Turquía.

Durante ese trayecto, quería un solo lugar para seguir mis trenes y sus retrasos. Cada país tenía su operador, su web y sus propios datos, y ninguna aplicación cubría toda la ruta.

## Mi rol

Soy el creador y el único desarrollador de Railora. La desarrollé en solitario, desde el estudio de mercado hasta la puesta en producción, lo que incluye las decisiones de producto, la aplicación iOS, el backend, la integración de datos y la publicación en la App Store.

## Lo que construí

- Una aplicación iOS en SwiftUI, con Live Activities para seguir un tren desde la pantalla de bloqueo.
- Notificaciones push con APNs, incluidas Live Activities iniciadas por un push.
- Un backend serverless en Cloudflare Workers, escrito en TypeScript.
- Almacenamiento en Turso (libSQL), con un Durable Object, KV y R2 para el estado en vivo y las cachés.
- Colectores que ingieren horarios y flujos en tiempo real en los formatos GTFS, GTFS-RT y SIRI, con un módulo por país, porque cada red publica sus datos a su manera.
- Nueve detectores de alertas que vigilan un tren seguido y avisan al viajero.
- Un estado de retraso construido con LangGraph, que decide cómo la aplicación muestra si un tren va con retraso.

## Resultados

- En la App Store, varios miles de usuarios.
- Horarios de 11 países.
- Datos en tiempo real de 8 redes ferroviarias.
- 9 tipos de alertas.

## Lo que aprendí

Los datos ferroviarios no tienen un estándar único: algunas redes publican flujos en tiempo real y otras solo horarios programados. Esa diferencia da forma al producto, porque la aplicación tiene que dejar claro qué sabe en vivo y qué viene de un horario.

Un backend serverless mantuvo la infraestructura lo bastante ligera para que una sola persona pudiera operarla. Cloudflare Workers, un Durable Object y una base de datos alojada cubren lo que en otra arquitectura requeriría servidores.

Trabajar solo me obligó a resolver cada compromiso por mi cuenta y a elegir qué lanzar, qué recortar y qué dejar para más adelante.

El viaje fue la mejor investigación de usuarios posible. Yo era el usuario, en trenes reales, cruzando fronteras reales, con retrasos reales.
