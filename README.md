<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Academia Myker – Web Oficial

Sitio web oficial de Myker Academy.

Proyecto desarrollado con:

- Vite
- React
- TailwindCSS
- GitHub Pages (entorno de pruebas)
- Hosting principal en Hostinger (producción)

---

# 📦 Requisitos

- Node.js >= 20
- npm >= 9

Comprobar versión:

```bash
node -v
```

Si no estás en Node 20:

```bash
nvm install 20
nvm use 20
nvm alias default 20
```

---

# 🚀 Desarrollo local

1️⃣ Instalar dependencias:

```bash
npm install
```

2️⃣ Ejecutar servidor local:

```bash
npm run dev
```

La app se abrirá en:

```
http://localhost:3000
```

---

# 🏗 Build de producción

Generar versión optimizada:

```bash
npm run build
```

Se generará la carpeta:

```
dist/
```

Esta carpeta contiene los archivos finales listos para producción.

---

# 🌍 Deploy en GitHub Pages (entorno de pruebas)

⚠ Importante: En `vite.config.ts` debe existir:

```ts
base: '/Academia-Myker/',
```

## Scripts necesarios en package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

Instalar gh-pages (si no está):

```bash
npm install --save-dev gh-pages
```

## Comandos para desplegar

```bash
git add .
git commit -m "deploy update"
git push origin main
npm run build
npm run deploy
```

Después:

GitHub → Settings → Pages  
Branch: `gh-pages`  
Folder: `/ (root)`

---

# 🌐 Producción real (Dominio propio)

Dominio activo:

https://mykeracademy.com/

El hosting principal está en Hostinger.

⚠ GitHub Pages solo se usa como entorno secundario/pruebas.

Para producción en Hostinger:

1. Ejecutar:

```bash
npm run build
```

2. Subir el contenido de `dist/` a:

```
/public_html
```

No subir:
- src/
- node_modules/
- package.json

Solo el contenido interno de `dist`.

---

# 🔒 Buenas prácticas

- No modificar `base` sin revisar entorno.
- Siempre usar Node 20.
- Antes de hacer merge revisar cambios en:
  - package.json
  - vite.config.ts
- No subir node_modules.
- No trabajar directamente en producción.

---

# 📁 Estructura del proyecto

```
Academia-Myker/
│
├── src/
├── public/
├── dist/ (generado)
├── vite.config.ts
├── package.json
└── README.md
```

---

# 🛠 Mantenimiento

Si algo se rompe:

1. Verificar versión de Node.
2. Borrar dependencias:

```bash
rm -rf node_modules package-lock.json
npm install
```

3. Revisar `base` en vite.config.
4. Rehacer build y deploy.

---

Proyecto mantenido por MallenK.