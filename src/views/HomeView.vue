<template>
  <the-hero></the-hero>
  <about-us></about-us>
  <the-services></the-services>
</template>

<script>
import TheHero from "@/components/hero/TheHero.vue";
import AboutUs from "@/components/about/AboutUs.vue";
import TheServices from "@/components/services/TheServices.vue";

export default {
  components: {
    TheHero,
    AboutUs,
    TheServices,
  },
};
</script>
