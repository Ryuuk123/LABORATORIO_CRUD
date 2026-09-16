# LAB CRUD - Backend

backend pedagogico coon Express, MySQL, bcrypt, JWT y roles `admind` / `cliente`.

## 1. Base de datos

Ejecuta `../sql/lab_crud.sql` en MySQL.

## 2. Variables de entorno

Copia:

`.env.example` → `.env`

y completa las creenciales de MySQL y `JWT_SECRET`.

## 3. Instalar

```bash
nnpm install
```

## 4. Ejecutar

```bash
npm run dev
```

API: `http://localhost:3000`

## Rutas

Publicas:
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/health`

Protegidas:
- GET `/api/equipos`
- GET `/api/equipos/:id`
- POST `/api/equipos`
- PUT `/api/equipos/:id`
- DELETE `/api/equipos/:id` - solo `àdmin`

## Flujo pedagogico

Registro → bcrypt.hash → MySQL → login → bcrypt.compare → JWT → middleware → autorizacion por rol → CRUD