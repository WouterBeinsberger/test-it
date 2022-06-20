<template>
  <section
    v-if="hero && hero.content.section.isDisplayed"
    :id="hero.content.section.elementId"
    class="hero"
  >
    <h1
      v-if="hero.content.title.isDisplayed"
      :id="hero.content.title.elementId"
      class="hero__title"
    >
      {{ hero.content.title.value }}
    </h1>
    <h3
      v-if="hero.content.subDescription.isDisplayed"
      :id="hero.content.subDescription.elementId"
      class="hero__sub-description"
    >
      {{ hero.content.subDescription.value }}
    </h3>
  </section>
</template>

<script>
export default {
  created() {
    this.loadHero();
    console.log("created");
  },
  computed: {
    hero() {
      return this.$store.getters["hero/hero"];
    },
  },
  methods: {
    async loadHero() {
      try {
        await this.$store.dispatch("hero/loadHero");
      } catch (error) {
        alert("something went wrong while fetching data: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.hero {
  height: 500px;
  padding: var(--padding-normal);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__title {
  color: var(--gray-lightest);
  font-size: 80px;
  padding: 20px 0px;
}

.hero__sub-description {
  color: var(--gray-light);
  font-size: 60px;
}
</style>