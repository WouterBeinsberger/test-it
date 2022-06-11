<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html {
  font-family: 'Montserrat', sans-serif;
}
</style>