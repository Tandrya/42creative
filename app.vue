<template>
  <div id="container">
      <section id="layout">
          <main>
              <NuxtPage />
          </main>
      </section>

      <section id="gl">
          <canvas ref="canvas"></canvas>
      </section>
  </div>
</template>

<script setup>
const data = useState('data');
const useGL = useState('gl');
const canvas = ref(null);

await callOnce(async () => {
  // data.value = await $fetch('https://tandrya.space/wp-json/wp/v2/pages')
})

onMounted(async () => {
  try { useGL.value = new GL(canvas.value); }
  catch (error) { console.error(error); }
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>  