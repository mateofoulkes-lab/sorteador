# Gran rifa mundialista - Firebase + PWA

Versión: 2.0.0-firebase-pwa

## Archivos

- `index.html`: webapp principal.
- `firebase-config.js`: configuración de Firebase.
- `manifest.webmanifest`: configuración para instalar como app.
- `sw.js`: service worker para PWA/cache.
- `assets/rifa-bg.png`: fondo visual.
- `assets/icon-192.png` y `assets/icon-512.png`: íconos de instalación.
- `firestore.rules`: reglas de prueba para Firestore.

## Paso a paso Firebase

1. Entrá a Firebase Console y creá un proyecto nuevo.
2. En el proyecto, tocá el ícono Web `</>` para crear una Web App.
3. Firebase te va a dar un objeto `firebaseConfig`. Copiá esos valores.
4. Abrí `firebase-config.js` y reemplazá:
   - `PEGAR_API_KEY`
   - `PEGAR_PROJECT_ID`
   - `PEGAR_MESSAGING_SENDER_ID`
   - `PEGAR_APP_ID`
5. En Firebase Console, andá a **Firestore Database**.
6. Tocá **Crear base de datos**.
7. Elegí modo de prueba para empezar o pegá las reglas de `firestore.rules`.
8. Publicá las reglas.
9. Subí todos los archivos a GitHub Pages.
10. Abrí la web desde `https://TU_USUARIO.github.io/TU_REPO/`.

## Cómo se guardan los datos

La colección por defecto es:

`rifa_mundialista_2026_numeros`

Cada número es un documento:

- Documento `1`
- Documento `2`
- ...
- Documento `100`

Cada documento guarda:

```json
{
  "name": "Nombre del comprador",
  "phone": "3364...",
  "paid": true,
  "updatedAt": "2026-06-16T..."
}
```

## Importante sobre seguridad

Las reglas incluidas son abiertas para que funcione rápido. Eso significa que cualquiera que tenga el link podría modificar la rifa desde consola o desde la web. Para usarlo más seriamente, conviene agregar Firebase Authentication y permitir escritura solo a tu cuenta.
