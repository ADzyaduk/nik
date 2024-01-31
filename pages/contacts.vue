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
  title: 'Контакты',
  description: 'Покраска любых поверхностей, Механизированая покраска,',
  og: {
    title: 'Мой удивительный сайт',
    description: 'Это мой удивительный сайт, дайте мне рассказать вам о нем.',
    image: '/public/og-image.png',
  },
  canonical: 'https://pokraska-kazan.ru/contacts',
})
</script>

<style lang="scss" scoped>
</style>
