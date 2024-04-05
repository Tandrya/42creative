## Nuxt / Three.js Basic Template 
- (In Progress)

- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).
- [Three.js documentation](https://threejs.org/docs/).

This template is a foundational starting point for creative development. It leverages canvas fixed positioning and scroll-jacking to provide a unique web experience. Ideal for developers looking to create immersive and interactive web applications.

## Disclaimer

This template combines Three.js classes with global state management via Nuxt's useState. This approach makes it easier to share state across different components in my opinion, feel free to use another approach.

## Stack

### Nuxt 3
The Intuitive Vue Framework for building server-side rendered applications with Vue.js.

----

### Three.js
A powerful JavaScript library and API for creating and displaying animated 3D computer graphics in a web browser using WebGL.

----

### GSAP
The GreenSock Animation Platform, a robust tool for creating animations and managing timelines in web projects.

----

### SASS
A preprocessor scripting language that is interpreted or compiled into CSS.
vite-plugin-glsl: A Vite plugin for importing GLSL shaders.

----

### Lenis
A minimalistic library for creating smooth scroll experiences.
normalized CSS: Ensures consistent styling across different browsers.

----

### dat.GUI
A lightweight graphical user interface for changing variables in JavaScript.

---

### Nuxt Image
An optimization module for handling images within a Nuxt application, providing automatic image resizing, lazy loading, and improved performance.

## Features
### Three.js Integration
Utilizes Three.js for 3D rendering directly in the web browser, with a canvas in a fixed position to merge seamlessly with the DOM.

----

### Scroll-Jacking
Implements scroll-jacking using Lenis, providing a smooth and controlled scrolling experience.

----


### Custom Shaders Support
Includes vite-plugin-glsl for easy inclusion of custom shaders in your project, enhancing the visual capabilities.

----

### Debugging Tools
Comes with dat.GUI for an on-the-fly debug UI, making it easier to tweak and adjust parameters in development.

----

### Style Preprocessing
SASS for advanced styling capabilities, alongside normalized CSS for consistent browser compatibility.

----

### Ready for Static Build
Seamlessly fetch assets from any headless CMS. These assets are automatically added to the public folder of your project, streamlining the build process. 
Just deploy your static app on any hosting service.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:8000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
