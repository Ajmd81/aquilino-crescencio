# Exposición — Aquilino Crescencio

Sitio web estático de un pintor: recorrido en vídeo, carrusel de obras (una
imagen por cuadro, reseñable), semblanza del artista y un blog de reseñas.

## Estructura

```
web/
├── index.html          # marcado de las secciones
├── css/
│   └── style.css       # paleta ocre en variables CSS (:root)
├── js/
│   └── app.js          # contenido editable + carrusel + vídeo + reseñas
└── assets/
    └── obras/          # una imagen por cuadro (recortes)
```

## Qué editar (todo en js/app.js → objeto CONTENIDO)

- `marca`: nombre del pintor.
- `hero`: titular y entradilla de portada.
- `bio.lead`: frase destacada de la semblanza. Los dos párrafos largos de la
  biografía están en `index.html` (`data-bind="bio1"` y `"bio2"`).
- `obras[]`: cada cuadro con `id`, `titulo`, `tecnica`, `anio`, `imagen`
  (ruta en `assets/obras/`) y `desc`. Para añadir un cuadro: copia un bloque,
  pon su imagen en `assets/obras/` y rellena los datos; el carrusel y el
  desplegable de reseñas se actualizan solos. Algunos títulos son provisionales
  (marcados en la `desc`); cámbialos si conoces el real.
- `video`: ver más abajo.

## Vídeo del recorrido

Rellena una opción en `CONTENIDO.video` y el reproductor aparece solo:

```js
video: { tipo:"mp4",     fuente:"assets/recorrido.mp4" }  // archivo propio
video: { tipo:"youtube", fuente:"ID_DEL_VIDEO" }          // tras v= en la URL
video: { tipo:"vimeo",   fuente:"ID_DEL_VIDEO" }
```

El navegador no reproduce `.mov` de forma fiable. Convierte a MP4/H.264:

```bash
ffmpeg -i recorrido.mov -vcodec libx264 -crf 23 -movflags +faststart recorrido.mp4
```

## Reseñas (conectadas a la API)

El front llama a la API de Spring Boot (`../resenas-api`). Configura la URL en
`js/app.js`:

```js
const API = { base: "" };  // "" = mismo origen; o "https://...railway.app"
```

```
GET  {base}/api/resenas[?obra=ID]  -> [{id, obraId, nombre, puntuacion, texto, fecha}]
POST {base}/api/resenas  (JSON)    -> { obraId, nombre, puntuacion, texto }
```

Si la API no responde, las reseñas caen automáticamente a `localStorage` (modo
local) y se avisa al usuario. Detalles de despliegue de la API en
`../resenas-api/README.md`.

## Desplegar

Es estático: sirve la carpeta tal cual.

- Local: abre `index.html` en el navegador (los assets están al lado).
- Cualquier estático (Netlify, Vercel, Pages, IONOS) o un contenedor:

```dockerfile
FROM nginx:alpine
COPY aquilino-crescencio/ /usr/share/nginx/html/
```
