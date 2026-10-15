## El contexto

[Occitaline](https://www.occitaline.com/) es una pyme cerca de Toulouse que diseña equipos de red para la gestión técnica de edificios (GTB): las redes que controlan la calefacción, la ventilación, la iluminación y los equipos técnicos de los grandes edificios. Trabajé allí de octubre de 2019 a agosto de 2022, en formación dual con Epitech.

Cuando llegué, el creador de la empresa quería un router pensado para las redes de GTB, centrado en la ciberseguridad. Ese producto se convirtió en el [Ox-Bras](https://www.occitaline.com/ox-bras/): un switch-router Ethernet/IP industrial para carril DIN, con un Cortex-A7 de doble núcleo, un Cortex-M4, ocho puertos RJ45 gigabit, dos puertos de fibra SFP y un secure element que guarda los certificados y se encarga del cifrado.

## Mi rol

Era desarrollador full-stack y participé en el producto de principio a fin: especificaciones, software que controla el router y presentación a los clientes.

Los routers los encargaban instituciones gubernamentales, así que teníamos que cumplir las recomendaciones de la ANSSI, la agencia nacional de ciberseguridad de Francia.

## Lo que construí

- La aplicación web que configura el router de principio a fin. Los cambios hechos en la interfaz se aplican en el equipo mediante scripts de Linux.
- La API REST, en Node.js con MongoDB, y las interfaces en Vue 3, jQuery y Bootstrap.
- La configuración de red que controla sobre Linux embebido: segmentación en VLAN, enrutamiento IP, NAT, reglas de firewall netfilter/iptables, VPN, DHCP y DNS, con servicios gestionados por systemd.
- Detección de intrusiones de red con Suricata integrada en el router.
- La presentación a clientes del modelo de seguridad del producto: datos de configuración cifrados, interfaz de administración que se puede bloquear detrás del firewall, cada inicio de sesión y cambio de configuración registrado en un servidor syslog, y supervisión SNMPv3 en solo lectura, con autenticación y cifrado.
- Un editor gráfico 2D con varias herramientas de dibujo.
- Un mapa web para supervisar sensores y routers en varias sedes, y un visor JavaScript de modelos 3D de edificios (BIM).

## Resultados

- Routers Ox-Bras desplegados en el CNES, la agencia espacial francesa, incluidas las plataformas de lanzamiento de Ariane, y en el Stade de France.
- Una versión presentada en la feria IBS de París en octubre de 2021, y después la versión 1 a principios de 2022.
- Presentaciones técnicas y demos en directo del producto a clientes.

## Lo que aprendí

Cómo funciona una red informática, de las VLAN y el enrutamiento al firewall, el DHCP y el DNS.

Cómo redactar unas especificaciones técnicas antes de desarrollar una funcionalidad.

Cómo presentar un producto técnico a clientes: la demo en directo y, después, la conversación y las preguntas.
