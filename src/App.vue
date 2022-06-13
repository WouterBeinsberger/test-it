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
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Montserrat&display=swap');

* {
  margin: 0;
}

html {
  font-family: var(--font-montserrat);
  
}

body {
  background-color: var(--oxford-blue);
}

:root {
  --oxford-blue: #112240ff;
  --bdazzled-blue: #465a7bff;
  --periwinkle-crayola: #bfcde0ff;
  --white: #fefcfdff;
  --spring-green: #37ff8bff;
  --font-montserrat: 'Montserrat', sans-serif;
  --font-fira-code: 'Fira Code', monospace;
  --padding-normal: 0rem 15rem 0rem 15rem;
}
</style>