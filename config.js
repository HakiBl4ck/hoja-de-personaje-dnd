// Configuración para JSONBin.io (almacenamiento gratuito en la nube)
// Instrucciones:
// 1. Crea cuenta gratis en https://jsonbin.io
// 2. Ve a "API Keys" y copia tu clave
// 3. Reemplaza la clave abajo
// 4. Crea un "Bin" y copia el ID, o deja vacío para crear uno nuevo

const JSONBIN_API_KEY = "$2a$10$qQxqe1.V1cF05fl6Jwk71eM3lv7i36nrYNWldY9bWdscThiKfZa9y";  // Tu API key de jsonbin.io
const JSONBIN_API_URL = "https://api.jsonbin.io/v3";

// Si no hay API key, usa localStorage como fallback
function useServer() {
    return JSONBIN_API_KEY.length > 10;
}
