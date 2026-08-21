# 🀄 Mahjong Argentino

<div align="center">

[![GitHub Pages Deployment](https://img.shields.io/badge/Status-Live%20&%20Running-success?style=for-the-badge&logo=github)](https://eugeniacoarasa.github.io/mahjong_argentino/)
[![JavaScript](https://img.shields.io/badge/Vanilla-JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA Ready](https://img.shields.io/badge/PWA-Supported-informational?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

*Un juego de puzzle web interactivo inspirado en el clásico Mahjong, rediseñado con una identidad cultural única y optimizado como Aplicación Web Progresiva (PWA).*

</div>

---

## 📖 Acerca del Proyecto

**Mahjong Argentino** es una reinterpretación moderna del tradicional juego de estrategia oriental, adaptada visual y conceptualmente con elementos de la cultura argentina. Desarrollado con tecnologías web nativas (*Vanilla JavaScript, HTML5 y CSS3*), el proyectoprioriza el rendimiento, la accesibilidad móvil y una experiencia de usuario fluida sin necesidad de frameworks pesados.

El proyecto incorpora un diseño totalmente responsivo, renderizado dinámico de piezas, soporte táctil avanzado y capacidades completas offline mediante **Service Workers**.

---

## ✨ Características Principales

* **Estética y Temática Cultural:** Piezas y elementos gráficos diseñados con guiños a la cultura popular argentina.
* **Renderizado Dinámico:** Generación y gestión eficiente de la disposición del tablero en tiempo real.
* **100% Responsive & Touch-Friendly:** Diseñado desde cero para adaptarse a la perfección tanto a pantallas de escritorio como a dispositivos móviles y tablets con controles táctiles optimizados.
* **Progressive Web App (PWA):** Funciona de manera offline gracias a la implementación de un *Service Worker* y se puede instalar directamente en el dispositivo como una aplicación nativa.
* **Clean Code & Arquitectura Modular:** Estructura limpia separando lógicas de juego, estilos, interfaz y gestión de caché.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Marcador semántico y estructura de la interfaz.
* **CSS3:** Estilos avanzados, diseño flexible (*Flexbox/Grid*) y animaciones fluidas.
* **JavaScript (ES6+):** Lógica del juego, manipulación del DOM y control de eventos.
* **PWA APIs:** `Manifest.json` y `Service Workers` (`sw.js`) para soporte offline y caché.
* **GitHub Pages:** Integración continua para el despliegue automático.

---

## 📂 Estructura del Repositorio

```text
mahjong_argentino/
│
├── images/          # Recursos gráficos y assets visuales del juego
├── index.html       # Estructura principal de la interfaz de usuario
├── style.css        # Estilos, diseño responsivo y temas visuales
├── game.js          # Lógica central del juego, estados y algoritmos
├── sw.js            # Service Worker para la gestión de caché y PWA
├── manifest.json    # Manifiesto de la aplicación web progresiva
└── README.md        # Documentación oficial del proyecto
```
---
## 🚀 Instalación y Ejecución Local
Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos:

### Clona el repositorio:

Bash
git clone [https://github.com/eugeniacoarasa/mahjong_argentino.git](https://github.com/eugeniacoarasa/mahjong_argentino.git)
Accede al directorio del proyecto:

Bash
cd mahjong_argentino
Ejecuta el proyecto:

Puedes abrir el archivo index.html directamente en tu navegador web preferido, o

Utilizar una extensión de desarrollo local como Live Server en Visual Studio Code para una mejor experiencia de recarga en caliente.

## 🎮 Cómo Jugar
Accede a la versión online desde el enlace de producción.

Observa el tablero compuesto por fichas apiladas con motivos argentinos.

Identifica y selecciona pares de fichas libres (aquellas que no estén bloqueadas a los lados o cubiertas por encima).

Haz clic o toca las fichas para hacerlas desaparecer hasta limpiar por completo el tablero.

---
## 👩‍💻 Autora
Desarrollado con ❤️ por Eugenia Coarasa.

GitHub: @eugeniacoarasa
---

