<template>
  <div class="wrapper">
    <div class="column left">
      <hero-bugs-card class="spacer"></hero-bugs-card>
      <services-bugs-card class="spacer"></services-bugs-card>
    </div>
    <div class="column right">
      <about-us-bugs-card class="spacer"></about-us-bugs-card>
    </div>
  </div>
</template>

<script>
import HeroBugsCard from "@/components/hero/bugs/HeroBugsCard.vue";
import AboutUsBugsCard from "@/components/about/bugs/AboutUsBugsCard.vue";
import ServicesBugsCard from "@/components/services/bugs/ServicesBugsCard.vue";

export default {
  components: {
    HeroBugsCard,
    AboutUsBugsCard,
    ServicesBugsCard,
  },
};
</script>

<style scoped>
.wrapper {
  padding: var(--padding-normal);
  display: flex;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.left {
  margin-right: 0.5rem;
}

.right {
  margin-left: 0.5rem;
}

.spacer {
  margin-bottom: 1rem;
}
</style>