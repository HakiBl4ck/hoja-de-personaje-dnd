# Cómo subir el Creador de Personajes a GitHub Pages

## Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `dnd5e-character-creator`
3. Público (para que otros puedan ver los personajes)
4. Clic "Create repository"

## Paso 2: Subir archivos

```bash
cd C:\Users\vscha\OneDrive\Documentos\AiProjects\Dungeons&DragonsV\dnd_bot\character_creator

git init
git add index.html viewer.html config.js README.md
git commit -m "D&D 5e Character Creator"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dnd5e-character-creator.git
git push -u origin main
```

## Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`, carpeta: `/ (root)`
5. Clic "Save"
6. Espera 1-2 minutos
7. Tu sitio estará en: `https://TU_USUARIO.github.io/dnd5e-character-creator/`

## Paso 4: Configurar JSONBin.io (opcional, para compartir en la nube)

1. Crea cuenta gratis en https://jsonbin.io
2. Ve a "API Keys" → copia tu clave
3. Abre `config.js` y pega tu clave:
```javascript
const JSONBIN_API_KEY = "tu-clave-aquí";
```
4. Sube el cambio:
```bash
git add config.js
git commit -m "Add JSONBin API key"
git push
```

## Sin JSONBin.io

Si no configuras JSONBin.io, el creador funciona igual pero:
- Los enlaces se guardan en localStorage (solo en tu navegador)
- No puedes compartir enlaces con otros
- Puedes descargar el JSON e importarlo al bot con `/import_sheet`

## Archivos subidos

| Archivo | Descripción |
|---|---|
| `index.html` | Creador de personajes (página principal) |
| `viewer.html` | Visor de hojas de personaje |
| `config.js` | Configuración de JSONBin.io |

## Uso

1. Abre `https://TU_USUARIO.github.io/dnd5e-character-creator/`
2. Crea tu personaje con los 8 pasos
3. Paso 8 → "Generar Enlace" → copia el enlace
4. Comparte el enlace con quien quieras
5. El receptor abre el enlace y ve tu hoja formateada
6. Para importar al bot: copia el JSON y usa `/import_sheet`
