<template>
  <base-bugs-card v-if="hero" class="hero" :color="heroCardClasses">
    <template #title>
      {{ hero.content.section.name }}
    </template>
    <template #default>
      <h2 class="hero__sub-heading">UI</h2>
      <ul class="hero-ui__list">
        <hero-bugs-list-ui-item
          v-for="(value, key) in hero.content"
          :key="key"
          :contentItem="value"
        ></hero-bugs-list-ui-item>
      </ul>
      <h2 class="hero__sub-heading element-id">Element ID's</h2>
      <ul class="hero-element-id__list">
        <hero-bugs-list-element-id-item
          v-for="(value, key) in hero.content"
          :key="key"
          :contentItem="value"
        ></hero-bugs-list-element-id-item>
      </ul>
    </template>
    <template #button>
      <base-button
        class="hero_button"
        @click="updateHero()"
        :classes="heroButtonClasses"
      >
        <strong>SAVE</strong>
      </base-button>
    </template>
  </base-bugs-card>
</template>

<script>
import HeroBugsListUiItem from "./HeroBugsListUiItem.vue";
import HeroBugsListElementIdItem from "./HeroBugsListElementIdItem.vue";

export default {
  created() {
    this.loadHero();
    console.log("created");
  },
  components: {
    HeroBugsListUiItem,
    HeroBugsListElementIdItem,
  },
  computed: {
    hero() {
      return this.$store.getters["hero/hero"];
    },
    color() {
      return this.$store.getters["hero/color"];
    },
    heroCardClasses() {
      return this.color;
    },
    heroButtonClasses() {
      return `${this.color} white-text default-padding`;
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
    async updateHero() {
      try {
        await this.$store.dispatch("hero/updateHero", this.hero);
      } catch (error) {
        alert("something went wrong while updating data: " + error.message);
      }
      alert("Hero bugs saved.");
    },
  },
};
</script>

<style scoped>
.hero__sub-heading {
  color: var(--gray-lightest);
  font-size: var(--font-sub-heading-small);
  margin: 0;
  padding-bottom: 0.75rem;
}

.element-id {
  padding-top: 0.75rem;
}

.hero-ui__list {
  list-style: none;
  padding: 0;
}

.hero-element-id__list {
  list-style: none;
  padding: 0;
}
</style>