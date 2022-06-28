<template>
  <base-bugs-card v-if="aboutUs" class="about-us" :color="aboutUsCardClasses">
    <template #title>
      {{ aboutUs.content.section.name }}
    </template>
    <template #default>
      <h2 class="about-us__sub-heading">UI</h2>
      <ul class="about-us-ui__list">
        <about-us-bugs-list-ui-item
          v-for="(value, key) in aboutUs.content"
          :key="key"
          :contentItem="value"
        ></about-us-bugs-list-ui-item>
      </ul>
      <ul class="about-us-ui__list">
        <about-us-bugs-list-ui-item
          v-for="aboutUsListItem in aboutUs.content.aboutUsItemList.values"
          :key="aboutUsListItem.id"
          :contentItem="aboutUsListItem"
        ></about-us-bugs-list-ui-item>
      </ul>
      <h2 class="about-us__sub-heading element-id">Element ID's</h2>
      <ul class="about-us-element-id__list">
        <about-us-bugs-list-element-id-item
          v-for="(value, key) in aboutUs.content"
          :key="key"
          :contentItem="value"
        ></about-us-bugs-list-element-id-item>
      </ul>
      <ul class="about-us-element-id__list">
        <about-us-bugs-list-element-id-item
          v-for="aboutUsListItem in aboutUs.content.aboutUsItemList.values"
          :key="aboutUsListItem.id"
          :contentItem="aboutUsListItem"
        ></about-us-bugs-list-element-id-item>
      </ul>
    </template>
    <template #button>
      <base-button @click="updateAboutUs()" :classes="aboutUsButtonClasses">
        <strong>SAVE</strong>
      </base-button>
    </template>
  </base-bugs-card>
</template>

<script>
import AboutUsBugsListUiItem from "./AboutUsBugsListUiItem.vue";
import AboutUsBugsListElementIdItem from "./AboutUsBugsListElementIdItem.vue";

export default {
  created() {
    this.loadAboutUs();
  },
  components: {
    AboutUsBugsListUiItem,
    AboutUsBugsListElementIdItem,
  },
  computed: {
    aboutUs() {
      return this.$store.getters["about/aboutUs"];
    },
    color() {
      return this.$store.getters["about/color"];
    },
    aboutUsCardClasses() {
      return this.color;
    },
    aboutUsButtonClasses() {
      return `${this.color} white-text default-padding`;
    },
  },
  methods: {
    async loadAboutUs() {
      try {
        await this.$store.dispatch("about/loadAboutUs");
      } catch (error) {
        alert(
          "something went wrong while fetching about us data: " + error.message
        );
      }
    },
    async updateAboutUs() {
      try {
        await this.$store.dispatch("about/updateAboutUs", this.aboutUs);
      } catch (error) {
        alert(
          "something went wrong while updating about us data: " + error.message
        );
      }
      alert("About us bugs saved.");
    },
  },
};
</script>

<style scoped>
.about-us__sub-heading {
  color: var(--gray-lightest);
  font-size: var(--font-sub-heading-small);
  margin: 0;
  padding-bottom: 0.75rem;
}

.element-id {
  padding-top: 0.75rem;
}

.about-us-ui__list {
  list-style: none;
  padding: 0;
}

.about-us-element-id__list {
  list-style: none;
  padding: 0;
}
</style>