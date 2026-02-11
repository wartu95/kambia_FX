# Kambia FX

Aplicación web para convertir monedas en tiempo real usando la API pública de Frankfurter.  
Incluye validación de inputs, manejo de estados y diseño responsive optimizado.

## ✅ Funcionalidades
- ✨ Conversión de monedas en tiempo real 
- 🔄 Botón para invertir monedas (swap)
- 📊 Visualización de tasas de cambio actualizadas
- ⚡ Validación de inputs en tiempo real
- 🎨 UI moderna y responsive con Tailwind CSS
- 🚀 CSS optimizado.
- 📱 Totalmente responsive (mobile-first)

## 🧱 Tecnologías
- HTML5 semántico
- Tailwind CSS (CLI - optimizado)
- JavaScript (ES Modules)
- Frankfurter API
- NPM para gestión de dependencias

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/wartu95/kambia_FX.git
cd kambia_FX

# Instalar dependencias
npm install
```

## 🚀 Desarrollo

```bash
# Modo desarrollo (watch CSS)
npm run dev

# Compilar CSS para producción
npm run build:css
```

Luego abre `index.html` en el navegador o usa Live Server (VSCode) para evitar problemas con módulos ES6.

## 📁 Estructura del proyecto

```
├── index.html              # Página principal
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
├── assets/
│   ├── css/
│   │   └── style.css      # CSS compilado (generado)
│   └── img/               # Imágenes y logos
└── src/
    ├── api.js             # Consumo de API Frankfurter
    ├── app.js             # Lógica principal
    ├── ui.js              # Renderizado de UI
    ├── utils.js           # Utilidades y validaciones
    └── input.css          # CSS de entrada Tailwind
```

## 🎯 Scripts disponibles

- `npm run dev` - Modo desarrollo con auto-recarga de CSS
- `npm run build:css` - Compilar CSS optimizado para producción
- `npm run watch:css` - Vigilar cambios en archivos CSS

## ⚠️ Nota sobre las tasas
Las tasas son referenciales proporcionadas por el Banco Central Europeo (vía Frankfurter). Útil para consultas informativas y práctica de consumo de APIs.

## 📌 Demo
🌐 [Ver demo en vivo](https://wartu95.github.io/kambia_FX/)


## 📄 Licencia
Este proyecto está bajo la Licencia MIT.

## 👤 Autor
**Junior (WartuDev)**
- GitHub: [@wartu95](https://github.com/wartu95)

---

⭐ Si te gustó este proyecto, considera darle una estrella en GitHub
