<template>
  <div>
    <Contacts />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Контакты',
})
useSeoMeta({
  title: 'Профессиональная покраска в городе Казань',
  description: 'Покраска любых поверхностей, Механизированая покраска, ',
  og: {
    title: 'Мой удивительный сайт',
    description: 'Это мой удивительный сайт, дайте мне рассказать вам о нем.',
    image: 'https://example.com/image.png',
  },
  canonical: 'https://example.com/canonical-url',
})
</script>

<style lang="scss" scoped>
</style>
