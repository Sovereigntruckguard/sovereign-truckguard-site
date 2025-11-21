# Sovereign TruckGuard Landing (Next.js)

Landing page de lujo para **Sovereign TruckGuard LLC** lista para correr en local y desplegar en Vercel.

## 1. Requisitos

- Node.js 18+ (recomendado 18 LTS)
- npm o pnpm

## 2. Instalación

```bash
npm install
```

## 3. Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre en tu navegador:

```text
http://localhost:3000
```

## 4. Build de producción

```bash
npm run build
npm start
```

## 5. Deploy en Vercel

1. Sube esta carpeta a un repositorio (GitHub / GitLab / Bitbucket).
2. Entra a Vercel, crea un **New Project** e importa el repo.
3. Framework: `Next.js` (lo detecta solo).
4. Build command: `npm run build`
5. Output: `.next`
6. Asigna el dominio `sovereigntruckguard.com` desde **Settings → Domains**.

El diseño usa **estilos inline**, no Tailwind ni CSS externo, por lo que el deploy es directo.
