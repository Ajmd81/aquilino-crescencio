# Aquilino Crescencio — web + API

Proyecto de la exposición del pintor Aquilino Crescencio, en dos partes:

```
.
├── web/           Front estático (tour interactivo, vídeo, semblanza, reseñas)  → Vercel
└── resenas-api/   API REST de reseñas (Spring Boot 3 · JPA · PostgreSQL · JWT)  → Railway
```

## Arquitectura

- **Front (Vercel):** sitio estático. Consume la API por `fetch`; si no responde,
  cae a `localStorage`. La URL de la API se fija en `web/js/app.js` (`API.base`).
- **API (Railway):** reseñas públicas (`GET`/`POST`) y moderación protegida con
  **JWT** (`DELETE`, previo `POST /api/auth/login`). Postgres gestionado por Flyway.

## Local

```bash
# 1) Base de datos + API
cd resenas-api
docker run --name pg-resenas -e POSTGRES_DB=resenas -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16
mvn spring-boot:run

# 2) Front (en otra terminal); pon API.base = "http://localhost:8080" en web/js/app.js
cd web && python3 -m http.server 5500   # http://localhost:5500
```

## Despliegue

- **Front → Vercel:** importa el repo, *root directory* = `web/`, framework
  preset *Other* (sin build). Pon `API.base` con la URL de Railway.
- **API → Railway:** servicio PostgreSQL + este `resenas-api/` (build por
  Dockerfile). Define las variables (datasource, `CORS_ALLOWED_ORIGINS` con tu
  dominio de Vercel, `JWT_SECRET`, `ADMIN_*`). Detalle en `resenas-api/README.md`.

Credenciales de desarrollo del panel de moderación: `admin` / `admin1234`
(cámbialas en producción vía `ADMIN_PASSWORD_HASH`).
