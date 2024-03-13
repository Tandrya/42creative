import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  css: ['~/assets/scss/main.scss'],
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  vite: {
    plugins: [glsl()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/utils" as *;'
        }
      }
    }
  },
  devServer: {
    port: 8000
  },
  build: {
		transpile: ['three', 'gsap'],
	},
  image: {
    domains: ['back.mickaellaval.com']
  }
})