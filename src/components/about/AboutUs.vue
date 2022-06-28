<template>
  <section
    class="about-us"
    v-if="aboutUs && aboutUs.content.section.isDisplayed"
    :id="aboutUs.content.section.elementId"
  >
    <h1
      class="about-us__title"
      v-if="aboutUs.content.title.isDisplayed"
      :id="aboutUs.content.title.elementId"
    >
      {{ aboutUs.content.title.value }}
    </h1>
    <div
      class="about-us__list"
      v-if="aboutUs.content.aboutUsItemList.isDisplayed"
      :id="aboutUs.content.aboutUsItemList.elementId"
    >
      <template
        v-for="aboutUsListItem in aboutUs.content.aboutUsItemList.values"
        :key="aboutUsListItem.id"
      >
        <about-us-list-item-card
          :aboutUsItem="aboutUsListItem"
          v-if="aboutUsListItem.isDisplayed"
          :id="aboutUsListItem.elementId"
        ></about-us-list-item-card>
      </template>
    </div>
  </section>
</template>

<script>
import AboutUsListItemCard from "./AboutUsListItemCard.vue";

export default {
  created() {
    this.loadAboutUs();
  },
  components: {
    AboutUsListItemCard,
  },
  computed: {
    aboutUs() {
      return this.$store.getters["about/aboutUs"];
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
  },
};
</script>

<style scoped>
.about-us {
  padding: var(--padding-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-us__title {
  color: var(--gray-lightest);
  font-size: var(--font-heading-normal);
}

.about-us__list {
  width: 100%;
  padding: 75px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
