## El contexto

En 2025 vivía en un piso compartido, en un edificio con una verja y una puerta de entrada antiguas. El mando de la verja solo funcionaba a unos cinco metros, así que tenía que pararme delante antes de que se abriera. La cerradura de la puerta era incómoda.

Las dos ya se podían abrir desde el interfono del piso. De ahí surgió la idea: si el interfono puede abrirlas, un microcontrolador conectado al interfono también puede, y un móvil puede hablar con el microcontrolador.

## Mi rol

Es un proyecto personal. Hice el cableado, escribí el firmware y el backend, y configuré la conexión de red desde el móvil hasta el interfono.

## Lo que construí

- Dentro del interfono localicé los cuatro cables que activan las dos aperturas y los conecté a relés.
- Un firmware para ESP32 en C con un pequeño servidor HTTP: un endpoint por puerta, que cierra su relé unos segundos, como una pulsación del botón.
- Un microservicio en Go delante del firmware. Solo acepta peticiones POST, comprueba una frase de acceso y envía la orden a la placa. También expone contadores de Prometheus para cada puerta.
- Un workflow de GitHub Actions que compila el binario de Go y lo despliega como servicio systemd.
- La conexión de red. Mi proveedor de internet comparte las direcciones IPv4 públicas entre clientes, así que la redirección de puertos no era posible. Monté una VPN WireGuard entre un servidor y una Raspberry Pi en casa, con Caddy como proxy inverso. No hay ningún puerto abierto en el router de casa.

## Resultados

- Mis compañeros de piso y yo abríamos la verja y la puerta desde el móvil, sin pararnos delante de la verja.
- Los contadores de Prometheus muestran cuántas veces se abre cada puerta.
- El servicio en Go es público en GitHub.

## Lo que aprendí

La seguridad era lo primero. Una puerta que se abre con una petición HTTP no puede abrirse para cualquiera que encuentre el enlace, por eso la comprobación de la frase de acceso se hace en un servicio aparte y la red de casa sigue cerrada detrás de la VPN.

La red fue más difícil que el hardware. Las direcciones IPv4 compartidas descartaban la solución sencilla, y el túnel VPN resultó más limpio.

Los siguientes pasos están claros. Las credenciales Wi-Fi están escritas en el firmware, así que cambiarlas obliga a volver a flashear la placa; una página de configuración servida por el ESP32 lo resolvería. La comprobación de la frase de acceso también podría pasar al firmware, lo que eliminaría un componente.
