# Parcial-Practico-UDB-2026

Portafolio académico y profesional de **Rodrigo Arévalo**, desarrollado para la evaluación final del curso **Desarrollo en JavaScript**, **Módulo 1: Fundamentos de Desarrollo Web**, ciclo académico **2026**.

El objetivo es integrar HTML semántico, formularios con validaciones nativas, CSS externo y diseño responsive en un sitio de cuatro páginas, preparado para revisión antes de publicarse en GitHub Pages. La fuente de requisitos es el documento de dos páginas `Evaluacion Final JavaScript 2026.pdf` proporcionado por el estudiante.

**Estado:** implementación lista para revisión. El usuario autorizó el registro de tres commits y la subida a `origin/main` el 14 de noviembre de 2026. GitHub Pages continúa pendiente de habilitación y verificación.

## Ubicación y repositorio existente

Repositorio: [Rodrigoa2197sv/Parcial-Practico-UDB-2026](https://github.com/Rodrigoa2197sv/Parcial-Practico-UDB-2026).

La inspección encontró la raíz real de Git en la carpeta superior `Parcial_Practico_UDB`, con `.git` y un README inicial. La carpeta abierta `Parcial_Practico` estaba vacía. Por decisión expresa del usuario, el sitio se implementó directamente en `Parcial_Practico`, conservando esa estructura y sin crear otra copia ni otro repositorio.

La rama existente es `main` y el remoto `origin` apunta al repositorio indicado. El historial inicial contiene el commit `fc4011b` (`first commit`), sobre el cual se agregan los tres commits de esta entrega. Se conservan el repositorio, el remoto y los commits existentes, sin reinicialización, reescrituras del historial ni modificaciones manuales de `.git`.

Este README conserva el nombre del documento inicial y amplía la documentación del sitio en **UTF-8**. El README de la carpeta superior fue identificado como UTF-16 LE; permanece intacto porque se eligió trabajar dentro de `Parcial_Practico`. Si se desea actualizar también ese documento, deberá abrirse desde la raíz real y guardarse como UTF-8 conservando su contenido. No es un archivo utilizado por las cuatro páginas.

## Tecnologías

- HTML5: estructura semántica, tabla, formularios y validación nativa.
- CSS3: una hoja externa compartida, Flexbox y media queries.
- JavaScript básico: eventos del formulario y mensajes con `textContent`.
- Git y GitHub: repositorio existente, tres commits descriptivos y sincronización con `origin/main`.
- SVG locales: ilustración de desarrollo e icono del sitio.
- Fotografía ilustrativa de internet: escritorio de desarrollo web de Christopher Gower, alojado en Unsplash.

El sitio no usa frameworks, librerías, fuentes externas, backend, paquetes de ejecución ni sistema de compilación. No necesita Node.js. Las herramientas temporales utilizadas para verificarlo no forman parte de la aplicación.

## Estructura del sitio

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

Los archivos propios del sitio emplean rutas relativas. Las cuatro páginas enlazan exactamente el mismo `style.css`. Por solicitud del usuario, la imagen de `acerca.html` utiliza una URL HTTPS de Unsplash y necesita conexión a internet.

## Las cuatro páginas

| Página | Contenido |
| --- | --- |
| `index.html` | Bienvenida, introducción, navegación global, `header`, `main`, `section`, `article`, `aside`, `footer` y enlaces a proyectos. |
| `acerca.html` | Perfil en formación, un `h1`, subtítulos `h2`, listas de habilidades, herramientas e intereses, y una fotografía ilustrativa de internet con crédito y descripción explícita. |
| `proyectos.html` | Presentación del portafolio actual y tabla con cuatro columnas y cuatro filas de datos. Los cuatro ejercicios, fechas y estados se identifican expresamente como ejemplos académicos. |
| `contacto.html` | Demostración de formulario con controles etiquetados, grupos con `fieldset` y `legend`, validaciones HTML5 y confirmación local sin envío. |

El perfil no atribuye títulos obtenidos, certificaciones, experiencia laboral ni logros no confirmados.

## Revisión local

### Con Live Server en Visual Studio Code

1. Abre la carpeta `Parcial_Practico` en VS Code.
2. Si aún no está disponible, instala la extensión **Live Server** de Ritwick Dey.
3. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.
4. Recorre las cuatro opciones del menú y los enlaces de las secciones.
5. Abre las herramientas de desarrollo del navegador y revisa anchos de 375, 768 y 1366 px.
6. En proyectos, desplaza horizontalmente la tabla en móvil. También puedes enfocarla con Tab y usar las flechas.
7. En contacto, prueba campos vacíos, correo inválido, contraseña corta, términos sin aceptar y un formulario válido con datos ficticios.

Live Server puede insertar su propio script de recarga automática. La CSP del proyecto puede bloquear esa inyección: en ese caso, actualiza el navegador manualmente. No es necesario debilitar la política para que el sitio funcione.

### Con navegador o servidor estático

Puedes abrir `index.html` directamente con el navegador. Para una comprobación consistente de CSP, se recomienda servir la carpeta mediante HTTP local: algunos navegadores tratan de forma diferente el origen de los archivos `file:`.

Si Python está instalado, desde esta carpeta puedes ejecutar:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Abre `http://127.0.0.1:5500/index.html`. Detén el servidor con Ctrl+C al terminar. No hay compilación ni instalación de dependencias del sitio.

## Diseño responsive y accesibilidad

- Enfoque mobile-first: las secciones parten de una columna.
- Flexbox controla navegación, cabecera, columnas, botones y distribución del formulario.
- A partir de **576 px** se habilitan columnas donde hay espacio.
- A partir de **768 px** se reorganizan portada, perfil, contenidos y contacto para tablet y escritorio.
- Un ajuste adicional a **1100 px** mejora la portada y el espaciado en pantallas grandes.
- Los contenedores tienen ancho máximo y los elementos flexibles permiten reducir su ancho sin desbordar la página.
- La tabla conserva sus columnas dentro de un contenedor con `overflow-x: auto`; el desplazamiento pertenece a la tabla.
- Se incluyen `lang="es"`, UTF-8, viewport, textos alternativos, enlace para saltar al contenido, navegación con `aria-current` y foco visible.
- Los estados no se comunican únicamente por color: los proyectos tienen etiquetas textuales y el formulario utiliza mensajes nativos.
- Las clases siguen una convención BEM sencilla, por ejemplo `menu__enlace`, `proyecto__tabla` y `boton--principal`.

## Formulario y límites de la validación

| Control | Validación o comportamiento |
| --- | --- |
| Nombre | `type="text"`, `required`, `minlength="2"`, `maxlength="60"`. |
| Correo | `type="email"`, `required`, `maxlength="100"`. |
| Contraseña temporal | `type="password"`, `required`, `minlength="8"`, `maxlength="64"`. Utilizar exclusivamente caracteres de prueba. |
| Asunto | `select` obligatorio con una opción inicial sin valor. |
| Tipo de consulta | Dos botones `radio` con el mismo `name`, en un grupo obligatorio. |
| Temas de interés | Tres casillas `checkbox` opcionales. |
| Términos | Casilla `checkbox` obligatoria, con términos visibles y asociados. |
| Archivo | Opcional; `accept=".pdf,.png,.jpg,.jpeg"`. JavaScript comprueba también la extensión sin leer el contenido. |
| Mensaje | `textarea`, `required`, `minlength="10"`, `maxlength="600"`. |
| Botones | Validar demostración y restablecer. |

Cada control tiene un `label` asociado mediante `for` e `id`. El navegador realiza la validación nativa antes del evento de envío. El JavaScript externo cancela el envío con `preventDefault()` y confirma: **las validaciones se completaron, pero los datos NO fueron enviados ni guardados**. La contraseña y la selección de archivo se vacían después de validar. Restablecer limpia los controles y la validez personalizada del archivo.

No se utilizan peticiones de red, cookies, `localStorage`, `sessionStorage`, lectura del contenido del archivo ni almacenamiento de contraseñas. Los datos introducidos permanecen temporalmente en los controles del navegador hasta restablecerlos o cerrar la página. No uses datos sensibles ni contraseñas reales. `autocomplete="off"` y `new-password` son indicaciones al navegador y no garantizan el comportamiento de un gestor de contraseñas.

Sin JavaScript, el botón de validación permanece deshabilitado y aparece un aviso. La CSP también impide un envío convencional del formulario. No se simula la entrega de un mensaje a Rodrigo.

La validación de cliente **no equivale a desinfección ni garantiza seguridad**: se puede eludir. `accept` orienta el selector de archivos y la comprobación de extensión no demuestra su tipo ni su contenido. Un backend real tendría que validar de nuevo los datos, comprobar archivos y aplicar tratamiento seguro y codificación de salida. Aquí no se interpretan entradas como HTML; los mensajes se muestran con `textContent`.

## Content Security Policy

Las cuatro páginas incluyen un metatag CSP después de `charset` y antes de cargar recursos. Inicio, proyectos y contacto utilizan esta política:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; script-src 'self'; img-src 'self'; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'">
```

La política bloquea recursos por defecto, permite CSS, JavaScript e imágenes del mismo origen y prohíbe conexiones de scripts, objetos, cambios de URL base y envíos de formulario. En `acerca.html`, únicamente la directiva de imágenes se amplía a `img-src 'self' https://images.unsplash.com` para cargar la fotografía solicitada. No se autorizan otros dominios externos para imágenes. El atributo `referrerpolicy="no-referrer"` evita enviar la dirección de la página en el encabezado Referer de esa imagen.

Los estilos y scripts inline no están autorizados. No hay atributos `onclick`, bloques `style`, scripts inline ni librerías remotas. Las fuentes son las del sistema. La restricción de recursos no impide seguir los enlaces normales al repositorio y a la fuente de la fotografía.

La política se comprobó sirviendo el sitio por HTTP local: el CSS, los SVG y `formulario.js` cargaron sin infracciones. No se usa `frame-ancestors` en el metatag, porque esa directiva requiere una cabecera HTTP. CSP es una capa adicional, no sustituye la validación.

Referencias de investigación: [guía CSP de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) y [directiva form-action de MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action).

## Cumplimiento del PDF

| Requisito de las dos páginas | Estado | Evidencia o pendiente |
| --- | --- | --- |
| Landing Page para servicio o portafolio | Cumplido | Portafolio de Rodrigo Arévalo con contenido académico y llamadas a explorar. |
| Cuatro HTML y navegación global con `nav` | Cumplido | Inicio, acerca, proyectos y contacto, conectados desde cada menú. |
| Una hoja de estilos común | Cumplido | `style.css` en las cuatro páginas. |
| Inicio: cabecera, cuerpo principal, lateral, secciones y pie | Cumplido | `header`, `main`, `aside`, `section` y `footer`. |
| Inicio: botón hacia proyectos | Cumplido | Enlace estilizado a `proyectos.html`. |
| Acerca: perfil, jerarquía `h1`/`h2` y listas | Cumplido | Perfil académico y tres listas de habilidades, herramientas e intereses. |
| Acerca: fotografía personal | Parcialmente cumplido | Por solicitud del usuario se utiliza una fotografía ilustrativa de internet, claramente identificada; no sustituye una fotografía personal real para la evaluación. |
| Proyectos: cuatro filas de datos y cuatro columnas | Cumplido | Tabla de cuatro ejercicios de ejemplo, sin contar el encabezado. |
| Tabla semántica y legible en móvil | Cumplido | `table`, `thead`, `tbody`, `tr`, `th`, `td`, `scope="col"`, caption y desplazamiento horizontal. |
| Contacto: texto y email con `required` | Cumplido | Campos de nombre y correo. |
| Contraseña temporal con `minlength` | Cumplido | Mínimo de ocho caracteres de prueba. |
| Menú desplegable `select` | Cumplido | Asunto de la consulta. |
| Radio y checkbox | Cumplido | Consulta, intereses y aceptación obligatoria de términos. |
| Archivo con extensiones mediante `accept` | Cumplido | PDF, PNG, JPG y JPEG. |
| Área de texto | Cumplido | Mensaje con límites de longitud. |
| Mobile-first y Flexbox/Grid | Cumplido | Flexbox, una columna inicial y distribución adaptable. |
| Al menos dos puntos de quiebre y columnas adaptables | Cumplido | Media queries de 576, 768 y 1100 px. |
| Nociones de validación y desinfección | Cumplido | Validación HTML5 y explicación expresa de sus límites; no se interpreta HTML del usuario. |
| `required`, email y `maxlength` | Cumplido | Atributos nativos en el formulario. |
| CSS externo sin estilos inline | Cumplido | Todos los estilos en `style.css`. |
| Investigar e incluir CSP en `head` | Cumplido | Política en las cuatro páginas; acerca permite además el dominio exacto de la imagen de Unsplash. Referencias y prueba en navegador. |
| BEM recomendado | Cumplido | Bloques, elementos y modificadores simples. |
| Inicializar repositorio | Cumplido previamente | Se reutiliza `.git`; no se repitió `git init`. |
| Al menos tres commits descriptivos | Cumplido | Tres etapas: HTML y recursos, estilos responsive, formulario y documentación. |
| Vincular remoto | Cumplido previamente | Se conserva `origin` existente. |
| Publicar cambios con push | Subida autorizada | Comprobar que `git ls-remote --heads origin main` y `git rev-parse HEAD` indiquen el mismo commit. |
| Habilitar GitHub Pages | Pendiente | No se ha habilitado ni verificado el despliegue. |
| Verificar sitio publicado en distintos dispositivos | Pendiente | Se verificaron tamaños en Chrome local; faltan publicación y dispositivos reales. |

El documento describe un flujo desde cero; las indicaciones del usuario prevalecen: reutilizar el repositorio y el remoto existentes. Después de la revisión inicial, el usuario autorizó crear los tres commits y subirlos; habilitar GitHub Pages sigue siendo un paso aparte.

## Verificaciones realizadas

Revisión local del **14 de noviembre de 2026**:

- Lectura textual y visual de las dos páginas del PDF.
- Inspección de archivos, codificación del README original, rama, remoto, historial y estado de Git.
- Comprobación automatizada de los cuatro HTML, semántica, títulos, listas, enlaces, recursos locales, etiquetas, tabla 4 × 4 y atributos del formulario.
- Comprobación de ausencia de comentarios en HTML/CSS/JavaScript, estilos inline, manejadores inline y librerías externas.
- Revisión sintáctica del JavaScript.
- Navegación y capturas en Chrome a **375, 768 y 1366 px**, con revisión visual de las cuatro páginas.
- Sin desbordamiento horizontal de la página completa en esos anchos; la tabla se desplaza dentro de su contenedor.
- Recorrido de las cuatro opciones del menú desde cada página: **16 enlaces verificados**.
- Carga correcta de imágenes y CSS, sin recursos HTTP fallidos, errores de JavaScript ni infracciones CSP durante las pruebas.
- Tabla desplazable mediante teclado en móvil.
- Pruebas con campos vacíos, correo inválido, contraseña y mensaje demasiado cortos, términos sin aceptar, extensión no permitida y datos de prueba válidos.
- Confirmación de que la validación correcta no provoca peticiones, recarga, almacenamiento local ni envío; limpia contraseña y archivo.
- Restablecimiento del formulario y comportamiento con JavaScript deshabilitado.
- Tras sustituir el marcador por la fotografía de Unsplash, se volvió a comprobar `acerca.html` en Chrome a 375, 768 y 1366 px: imagen remota cargada, sin desbordamientos, errores de navegador ni infracciones CSP. Se revisó visualmente la captura actualizada de escritorio.

Estas verificaciones locales no equivalen a una certificación de accesibilidad, una prueba en todos los navegadores ni una revisión en dispositivos físicos. Las capturas y herramientas de prueba son temporales y no se incluyen como dependencias ni archivos del sitio.

## Organización de los tres commits

La entrega se registra en los tres commits siguientes. Los comandos documentan su agrupación de archivos y se ejecutan **desde `Parcial_Practico`**. No repitas los commits si ya aparecen en `git log`. Git utiliza automáticamente el repositorio de la carpeta superior; no hace falta inicializarlo.

Primero comprueba el estado y que la rama siga siendo `main`:

```powershell
git status
git branch --show-current
git remote -v
```

1. Estructura HTML, navegación y recursos locales:

```powershell
git add -- index.html acerca.html proyectos.html contacto.html assets/img/escritorio-web.svg assets/img/marca.svg
git diff --cached --stat
git commit -m "feat: crear estructura HTML y navegacion del portafolio"
```

2. Diseño responsive y estilos compartidos:

```powershell
git add -- style.css
git diff --cached --stat
git commit -m "style: implementar diseno responsive y estilos compartidos"
```

3. Interacción del formulario y documentación:

```powershell
git add -- formulario.js README.md
git diff --cached --stat
git commit -m "feat: completar formulario validado y documentacion"
```

Las primeras dos etapas agrupan los archivos por responsabilidad. La confirmación del formulario queda habilitada al incorporar el JavaScript en la tercera etapa. Revisa el sitio con las tres etapas completas antes de subirlo.

La subida a `origin/main` fue autorizada. Para consultar el historial y sincronizar cambios nuevos:

```powershell
git status
git log -4 --oneline
git push -u origin main
```

No uses `--force`, `git reset --hard`, otro `git init` ni cambios del remoto. Estos comandos agregan tres commits sobre el historial existente.

## Publicación manual en GitHub Pages

1. Confirma que los tres commits estén en `origin/main`; la subida del código ya está autorizada. Habilita Pages cuando se decida publicar el sitio.
2. Abre el repositorio en GitHub y entra en **Settings → Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. Selecciona **main** y **/(root)**, y guarda la configuración.
5. Espera a que termine correctamente el despliegue en **Actions**.
6. Abre la dirección indicada por GitHub Pages. Dado que el sitio permanece en la subcarpeta elegida, accede a **`Parcial_Practico/`** dentro de esa dirección, respetando mayúsculas. Esa ruta contiene `index.html`.
7. Comprueba las cuatro páginas, las imágenes, los estilos, la tabla y el formulario también desde móvil. Solo después incorpora la URL pública verificada a este README.

GitHub Pages permite elegir la raíz o `/docs` como carpeta de publicación desde una rama; no permite elegir directamente cualquier subcarpeta. Por eso se indica `/(root)` y se accede después a `Parcial_Practico/`. La dirección base del repositorio no tiene el `index.html` de este portafolio. Si más adelante se requiere el portafolio en esa dirección base, habrá que acordar un traslado a la raíz real o una configuración de despliegue que publique esta carpeta.

Referencia: [configurar la fuente de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

**URL de GitHub Pages:** pendiente; no se registra una dirección pública hasta habilitarla y verificarla.

## Información y recursos pendientes

- **Imagen actual:** se sustituyó el marcador por una fotografía ilustrativa de internet, por solicitud expresa del usuario. Fuente: [Christopher Gower en Unsplash](https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo), bajo la [licencia de Unsplash](https://unsplash.com/license). URL utilizada: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=960&h=960&q=80`. La imagen necesita acceso a internet y depende de la disponibilidad del proveedor.
- **Fotografía personal del PDF:** la imagen ilustrativa no retrata a Rodrigo ni se presenta como propia. Para cumplir literalmente este punto, incorporar una fotografía personal autorizada en `assets/img/` y actualizar imagen, texto alternativo y crédito. Si vuelve a ser local, se puede retirar el permiso de Unsplash de la CSP de `acerca.html`.
- **Proyectos reales:** los ejemplos están permitidos por el PDF y no requieren reemplazo para satisfacer la tabla. Si se incorporan trabajos reales, confirmar nombres, tecnologías, fechas y estados antes de presentarlos como propios.
- **README exterior:** su conversión y actualización quedan fuera de la carpeta elegida. El README del sitio ya está en UTF-8.
- **Despliegue:** confirmar la sincronización con `origin/main`, habilitar Pages cuando se autorice y verificar la publicación en dispositivos reales.

El formulario es deliberadamente una demostración estática. Convertirlo en un canal real de contacto requeriría otro alcance y un servicio con validación del lado del servidor.
