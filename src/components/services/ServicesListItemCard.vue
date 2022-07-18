<template>
  <div class="services-list__item--card" v-if="servicesItemValue">
    <div
      class="services-list-item-card__title--wrapper"
      @click="showDescription()"
    >
      <h1
        class="services-list-item__card--title"
        :id="servicesItemValue.title.elementId"
        v-if="servicesItemValue.title.isDisplayed"
      >
        {{ servicesItemValue.title.value }}
      </h1>
      <font-awesome-icon
        class="services-list-item__card--icon"
        :icon="icon.plus"
        v-if="!isDescriptionShown"
      ></font-awesome-icon>
      <font-awesome-icon
        class="services-list-item__card--icon"
        :icon="icon.minus"
        v-else
      ></font-awesome-icon>
    </div>
    <div
      class="services-list-item-card__description--wrapper"
      v-if="isDescriptionShown"
    >
      <p
        class="services-list-item__card--description"
        :id="servicesItemValue.description.elementId"
        v-if="servicesItemValue.description.isDisplayed"
      >
        {{ servicesItemValue.description.value }}
      </p>
    </div>
  </div>
</template>

<script>
import icons from "@/assets/icons";

export default {
  props: ["servicesItem"],
  data() {
    return {
      isDescriptionShown: false,
    };
  },
  computed: {
    servicesItemValue() {
      return this.servicesItem;
    },
    icon() {
      return icons;
    },
  },
  methods: {
    showDescription() {
      this.isDescriptionShown = !this.isDescriptionShown;
    },
  },
};
</script>

<style scoped>
.services-list__item--card {
  margin: 1rem 0rem;
}
.services-list-item-card__title--wrapper {
  background-color: var(--yellow);
  color: var(--gray-darker);

  cursor: pointer;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.services-list-item__card--title {
  font-size: var(--font-body-large);
}

.services-list-item__card--icon {
  font-size: var(--font-body-large);
}

.services-list-item-card__description--wrapper {
  background-color: var(--gray-darker);
  padding: 0.75rem 1rem;
}

.services-list-item__card--description {
  color: var(--gray-lightest);
  font-size: var(--font-body-normal);
}
</style>