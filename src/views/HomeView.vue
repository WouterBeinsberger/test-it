<template>
  <the-hero></the-hero>
  <about-us></about-us>
</template>

<script>
import TheHero from "@/components/hero/TheHero.vue";
import AboutUs from "@/components/about/AboutUs.vue";

export default {
  components: {
    TheHero,
    AboutUs,
  },
};
</script>
