<template>
  <div id="container" ref="container">
    <section id="layout" ref="layout">
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
const container = ref(null);
const layout = ref(null);

await callOnce(async () => {
  // data.value = await $fetch('https://tandrya.space/wp-json/wp/v2/pages')
})

onMounted(async () => {
  try { useGL.value = new GL(canvas.value, container.value, layout.value); }
  catch (error) { console.error(error); }
});
</script>

<style lang="scss">
</style>