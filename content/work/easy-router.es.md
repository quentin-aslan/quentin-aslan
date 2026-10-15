## El contexto

A principios de 2024 trabajaba desde Boston. Trabajar en el extranjero significa usar el Wi-Fi de hoteles, cafeterías y aeropuertos, y no quería que mis datos ni los de mis clientes pasaran por redes que no controlaba.

Un router de viaje resuelve ese problema: un pequeño dispositivo se conecta a la red pública y comparte un punto de acceso privado, protegido por una VPN, con mi portátil y mi móvil. Compré una Raspberry Pi 4 en la tienda del MIT y la convertí en un router. Después construí Easy Router, una interfaz web embebida que se ejecuta en la Pi, para configurar el router rápidamente y sin terminal.

## Mi rol

Es un proyecto personal. Lo diseñé, escribí el frontend y el backend, y configuré la Raspberry Pi yo mismo.

## Lo que construí

- Una Raspberry Pi 4 con dos interfaces Wi-Fi: la integrada se conecta a la red pública y un adaptador Wi-Fi USB emite el punto de acceso privado.
- Una interfaz web en Vue 3, TypeScript y Tailwind, instalable como PWA y pensada primero para el móvil.
- Pantallas para buscar las redes cercanas con la intensidad de su señal, conectarse o desconectarse, y abrir el portal cautivo cuando una red pública pide iniciar sesión.
- El control de NordVPN: estado con ciudad, país, tiempo de conexión y tráfico, y un selector de ciudad para conectarse o desconectarse.
- Los ajustes del punto de acceso y la lista de dispositivos conectados a él.
- Un backend en Node.js y Express, escrito en TypeScript, que sirve la interfaz y controla el sistema mediante nmcli y la línea de comandos de NordVPN. Un primer prototipo de ese backend usaba Python y Flask.
- Una API simulada con MirageJS, para desarrollar sin la Pi.

## Resultados

- Un router de viaje que funciona y se configura desde el navegador del móvil.
- Publiqué una primera versión en cuatro días, y el proyecto llegó a 44 commits en unos diez días.
- El código es público en GitHub.

## Lo que aprendí

La mayor parte del trabajo estaba en la capa de Linux, no en la interfaz. El backend analiza la salida de herramientas de línea de comandos, y cada detalle, como un nombre de red con espacios, cuenta.

Simular la API desde el principio valió la pena. Podía avanzar en la interfaz desde cualquier sitio y solo necesitaba la Pi para probar los comandos reales.

Aproveché lo que aprendí sobre routers industriales durante mi formación dual: interfaces de red, enrutamiento y VPN, esta vez en un dispositivo que cabe en una mochila.
