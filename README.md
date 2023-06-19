# Repositorio proyecto prueba técnica para Juniors y Trainees con React

El proyecto fue creado mientras realizaba el curso de React 2023 de Midudev [Custom Hooks + Testing con Playwright: Curso de React desde cero - Parte 4](https://www.youtube.com/@midulive).

Este repositorio contiene el código de una aplicación para obtener un hecho aleatorio de gatos de una API, luego recuperar la primera palabra del hecho y usarla como parámetro en otra API para obtener una imágen aleatoria de gatos.

- Desarrollada con React para manipulación del DOM y reactividad de la aplicación.
- Vite como empaquetador.
- Uso de customHooks para manejar los servicios encargados de realizar las peticiones en cada API y useState para manejar el estado en cada petición.
- Test End-to-End con Playwright.

Puedes ver el demo aquí: (https://rolando22.github.io/react-prueba-tecnica/).

# Prueba técnica para Juniors y Trainees de React.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API.
- Recuperar la primera palabra del hecho.
- Muestra una imagen de un gato con la primera palabra.
