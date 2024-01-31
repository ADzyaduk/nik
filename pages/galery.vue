<template>
  <div>
    <Galery />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Галерея',
})
useSeoMeta({
  title: 'Профессиональная покраска в городе Казань',
  description: 'Покраска любых поверхностей, Механизированая покраска, ',
  og: {
    title: 'Мой удивительный сайт',
    description: 'Это мой удивительный сайт, дайте мне рассказать вам о нем.',
    image: 'https://pokraska-kazan.ru/_nuxt/logo2.46bfc876.png',
  },
  canonical: 'https://pokraska-kazan.ru/galery',
})
</script>

<style lang="scss" scoped>
</style>
