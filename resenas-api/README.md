# resenas-api

API REST de reseñas para la web de Aquilino Crescencio.
Java 21 · Spring Boot 3.3 · Spring Data JPA · PostgreSQL · Flyway · Spring Security (JWT).

## Endpoints

| Método | Ruta                   | Acceso        | Descripción                              |
|--------|------------------------|---------------|------------------------------------------|
| POST   | `/api/auth/login`      | público       | Devuelve un JWT para el administrador    |
| GET    | `/api/resenas`         | público       | Lista (más recientes antes)              |
| GET    | `/api/resenas?obra=ID` | público       | Filtra por obra                          |
| POST   | `/api/resenas`         | público       | Crea una reseña → `201`                  |
| DELETE | `/api/resenas/{id}`    | **ADMIN/JWT** | Borra una reseña (moderación)            |

### Crear reseña (público)

```bash
curl -X POST $API/api/resenas -H "Content-Type: application/json" \
  -d '{"obraId":"pastora","nombre":"María","puntuacion":5,"texto":"Impresionante."}'
```

Validación: `nombre` ≤ 60, `puntuacion` 1–5, `texto` 4–600, `obraId` ≤ 40.
Errores → `400` con `{ "campos": { "texto": "La reseña debe..." } }`.

## Autenticación (JWT)

Login y obtención del token:

```bash
curl -X POST $API/api/auth/login -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin1234"}'
# -> { "token":"eyJ...", "tipo":"Bearer", "expiraEn":3600 }
```

Usar el token para moderar (borrar):

```bash
curl -X DELETE $API/api/resenas/<UUID> -H "Authorization: Bearer eyJ..."
```

Sin token o con rol incorrecto, el `DELETE` responde `401`/`403`.
Es un JWT HS256 (clave simétrica) con `sub` = usuario y claim `roles`.

### Credenciales y secretos

- Usuario por defecto: `admin` / `admin1234` (**solo desarrollo, cámbialo**).
- La contraseña se guarda como **hash BCrypt** en `ADMIN_PASSWORD_HASH`.
  Genera uno nuevo, por ejemplo:
  ```bash
  htpasswd -bnBC 10 "" 'TU_PASSWORD' | tr -d ':\n' | sed 's/$2y/$2a/'
  ```
  (o con cualquier utilidad BCrypt; Spring acepta `$2a`/`$2b`/`$2y`).
- Genera un secreto JWT fuerte (≥ 32 bytes): `openssl rand -base64 48` → `JWT_SECRET`.

## Variables de entorno

| Variable                     | Por defecto                                  |
|------------------------------|----------------------------------------------|
| `PORT`                       | `8080`                                        |
| `SPRING_DATASOURCE_URL`      | `jdbc:postgresql://localhost:5432/resenas`    |
| `SPRING_DATASOURCE_USERNAME` | `postgres`                                    |
| `SPRING_DATASOURCE_PASSWORD` | `postgres`                                    |
| `CORS_ALLOWED_ORIGINS`       | localhost… , `https://*.vercel.app`           |
| `ADMIN_USERNAME`             | `admin`                                       |
| `ADMIN_PASSWORD_HASH`        | hash BCrypt de `admin1234`                    |
| `JWT_SECRET`                 | (secreto de desarrollo — cámbialo)            |
| `JWT_TTL_SECONDS`            | `3600`                                        |

## Ejecutar en local

```bash
docker run --name pg-resenas -e POSTGRES_DB=resenas \
  -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16
mvn spring-boot:run
```

Flyway crea la tabla `resenas` al arrancar.

## Desplegar en Railway

1. Añade un servicio **PostgreSQL** al proyecto.
2. Despliega este repo: Railway detecta el `Dockerfile`.
3. Variables del servicio de la API:
   - `SPRING_DATASOURCE_URL` → `jdbc:postgresql://${{Postgres.PGHOST}}:${{Postgres.PGPORT}}/${{Postgres.PGDATABASE}}`
   - `SPRING_DATASOURCE_USERNAME` → `${{Postgres.PGUSER}}`
   - `SPRING_DATASOURCE_PASSWORD` → `${{Postgres.PGPASSWORD}}`
   - `CORS_ALLOWED_ORIGINS` → `https://TU-PROYECTO.vercel.app,https://*.vercel.app,https://aquilinocrescencio.es`
   - `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH`, `JWT_SECRET`
4. `PORT` lo inyecta Railway.

## Conectar el front (Vercel)

En `web/js/app.js` apunta a la URL pública de Railway:

```js
const API = { base: "https://resenas-api-production.up.railway.app" };
```

CORS ya admite los dominios de Vercel (incluidos los *previews* `*.vercel.app`)
si los incluyes en `CORS_ALLOWED_ORIGINS`.

## Notas

- `ddl-auto=validate`: el esquema lo gobierna Flyway. Si la validación se quejara
  del tipo de la columna `fecha`, cambia a `none`.
- Para moderar desde el front puedes añadir una pequeña pantalla de admin que
  haga el `login` y guarde el token; o usar los `curl` de arriba.
