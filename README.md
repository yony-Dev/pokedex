<div align="center">

# 🔴 Pokédex

**Una Pokédex interactiva construida con React y la PokéAPI**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![PokéAPI](https://img.shields.io/badge/PokéAPI-REST-EF5350?style=for-the-badge)

</div>

---

## ✨ Características

- 🔍 **Búsqueda en tiempo real** por nombre de Pokémon
- 🎨 **Filtro por tipo** con 18 tipos disponibles y colores únicos por tipo
- 📋 **Modal de detalles** con stats, tipos y artwork oficial al hacer clic en cada card
- 🃏 **150 Pokémon** cargados desde la PokéAPI
- 💅 **UI oscura y animada** con gradientes por tipo en cada card
- ⚡ **Hover effects** y transiciones suaves

---

## 📸 Preview

![Pokédex Screenshot](./preview.png)

---

## 🚀 Instalación y uso

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/pokedex.git

# 2. Entra a la carpeta
cd pokedex

# 3. Instala las dependencias
npm install

# 4. Levanta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🗂️ Estructura del proyecto

```
pokedex/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx     # Card individual de cada Pokémon
│   │   ├── PokemonModal.jsx    # Modal con información detallada
│   │   ├── SearchBar.jsx       # Barra de búsqueda
│   │   └── TypeFilter.jsx      # Filtro de tipos con pills
│   ├── hooks/
│   │   └── usePokemon.js       # Custom hook para consumir la PokéAPI
│   ├── App.jsx                 # Componente raíz
│   ├── App.css                 # Estilos globales
│   └── main.jsx
├── README.md
└── package.json
```

---

## 🧩 Componentes

| Componente | Descripción |
|---|---|
| `App.jsx` | Maneja el estado global: búsqueda, filtro activo y Pokémon seleccionado |
| `PokemonCard` | Muestra sprite, nombre, tipos y stats básicos. Dispara el modal al hacer clic |
| `PokemonModal` | Overlay con artwork oficial, todos los stats en barras animadas |
| `SearchBar` | Input controlado que filtra en tiempo real |
| `TypeFilter` | Pills scrollables con color único por tipo |
| `usePokemon` | Custom hook que fetcha y normaliza datos de la PokéAPI |

---

## 🌐 API utilizada

Este proyecto consume la **[PokéAPI](https://pokeapi.co/)** — una API REST pública y gratuita con datos de todos los Pokémon.

```
GET https://pokeapi.co/api/v2/pokemon?limit=150
GET https://pokeapi.co/api/v2/pokemon/{id}
```

---

## 🛠️ Tecnologías

- **React 18** — UI con hooks y componentes funcionales
- **Vite** — Bundler ultrarrápido para desarrollo
- **CSS3** — Animaciones, gradientes, variables CSS y backdrop-filter
- **PokéAPI** — Datos y sprites oficiales

---

## 📄 Licencia

MIT © 2024 — Libre para usar y modificar.

---

<div align="center">

Hecho con ❤️ y mucho café

</div>