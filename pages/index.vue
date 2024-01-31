<template>
  <div>
    <Hero />
    <FeaturedSection />
    <Featured />
    <Price />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Профессиональная покраска в городе Казань',
}),

  useSeoMeta({
    title: 'Профессиональная покраска в городе Казань',
    description: 'Покраска любых поверхностей, Механизированая покраска, ',
    og: {
      title: 'Покраска в Казани',
      description: 'Покраска Казань',
      image: '/og-image.png',
    },
    canonical: 'https://pokraska-kazan.ru/',
  })

</script>

<style lang="scss" scoped>
</style>
