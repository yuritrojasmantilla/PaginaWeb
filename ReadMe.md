# Clon de Google

## Descripción

Este proyecto consiste en una réplica de la página principal de Google desarrollada con HTML, CSS y JavaScript. La página permite realizar búsquedas reales en Google y cuenta con una interfaz similar a la del buscador original.

## Archivos del proyecto

* **index.html:** estructura de la página.
* **main.css:** estilos y diseño visual.
* **app.js:** funcionalidades e interacciones de la página.

## Funciones JavaScript

### buscar()

Obtiene el texto ingresado por el usuario y realiza una búsqueda en Google. Si el campo está vacío, muestra una animación indicando que debe ingresar una consulta.

### sentirSuerte()

Simula el botón "I'm Feeling Lucky" de Google. Si existe una búsqueda escrita, redirige directamente al primer resultado.

### Evento Enter

Permite ejecutar la búsqueda al presionar la tecla Enter dentro del cuadro de texto.

### Eventos de los botones

* El botón **Google Search** ejecuta la función `buscar()`.
* El botón **I'm Feeling Lucky** ejecuta la función `sentirSuerte()`.

### Enfoque automático

Al cargar la página, el cursor se posiciona automáticamente en el campo de búsqueda para facilitar la interacción del usuario.

## Características

* Diseño similar a Google.
* Búsquedas funcionales.
* Soporte para la tecla Enter.
* Validación de campos vacíos.
* Animación visual cuando no se ingresa una búsqueda.

## Autor

Proyecto realizado con fines educativos para practicar HTML, CSS y JavaScript By `Yuritza Juliana Rojas Mantilla`.
