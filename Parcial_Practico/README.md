# Parcial-Practico-UDB-2026

Portafolio de Rodrigo Arévalo para la evaluación final del curso Desarrollo en JavaScript, Módulo 1: Fundamentos de Desarrollo Web, año 2026.

El proyecto reúne los temas del módulo en un sitio de cuatro páginas: HTML semántico, estilos con CSS, diseño responsive y un formulario con JavaScript básico.

## Tecnologías

- HTML5
- CSS3 y Flexbox
- JavaScript
- Git y GitHub

## Estructura

```text
Parcial_Practico/
├── index.html
├── acerca.html
├── proyectos.html
├── contacto.html
├── style.css
├── formulario.js
├── README.md
└── assets/
    └── img/
        ├── escritorio-web.svg
        └── marca.svg
```

## Páginas

- **Inicio:** presentación del portafolio y acceso a los proyectos.
- **Acerca de mí:** perfil académico, habilidades, herramientas e intereses.
- **Proyectos:** tabla con cuatro ejemplos académicos, tecnologías, fechas y estados.
- **Contacto:** formulario de demostración con distintos tipos de campos y validaciones.

## Cómo abrir el proyecto

1. Abrir la carpeta `Parcial_Practico` en Visual Studio Code.
2. Instalar la extensión Live Server si aún no está disponible.
3. Hacer clic derecho sobre `index.html` y seleccionar **Open with Live Server**.

También se puede abrir `index.html` directamente desde el navegador. La imagen de la página Acerca de mí necesita conexión a internet.

## Diseño responsive

Las cuatro páginas comparten `style.css`. El diseño parte de una columna en móviles y utiliza Flexbox para distribuir el contenido en pantallas más grandes, con puntos de quiebre de 576, 768 y 1100 px.

La tabla de proyectos tiene desplazamiento horizontal en pantallas pequeñas. La navegación, los botones y los campos del formulario se adaptan al ancho disponible.

## Formulario

Incluye nombre, correo, contraseña temporal, asunto, opciones de consulta, casillas de selección, archivo adjunto y mensaje. Utiliza `required`, `type="email"`, `minlength`, `maxlength` y `accept` para validar los campos.

Es una demostración: los datos no se envían ni se almacenan. Al completar la validación se muestra un mensaje y se limpian la contraseña temporal y el archivo seleccionado. No se deben introducir contraseñas reales ni información sensible.

La validación del navegador no sustituye la validación del servidor. Para recibir mensajes reales sería necesario agregar un backend con validación y tratamiento seguro de los datos.

## Seguridad

Cada página incluye una política CSP en el `head`. Permite los estilos, scripts e imágenes del proyecto, bloquea los envíos del formulario y evita ejecutar código inline. En `acerca.html` se permite además el dominio `images.unsplash.com` para cargar la imagen.

## Repositorio y publicación

Repositorio: [Rodrigoa2197sv/Parcial-Practico-UDB-2026](https://github.com/Rodrigoa2197sv/Parcial-Practico-UDB-2026).

Para habilitar GitHub Pages:

1. Entrar en **Settings → Pages** dentro del repositorio.
2. Seleccionar **Deploy from a branch**, rama `main` y carpeta `/(root)`.
3. Guardar la configuración y esperar a que termine el despliegue.
4. Abrir la dirección indicada por GitHub y acceder a `Parcial_Practico/`, donde está el sitio.

La URL pública se agregará cuando GitHub Pages esté habilitado.

## Imagen

La página Acerca de mí utiliza una imagen ilustrativa de [Christopher Gower en Unsplash](https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo), bajo la [licencia de Unsplash](https://unsplash.com/license). La fotografía personal queda pendiente de incorporar.
