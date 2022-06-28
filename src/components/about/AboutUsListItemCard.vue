<template>
  <div class="about-us-list__item--card">
    <font-awesome-icon
      class="about-us-list-item__card--icon"
      :icon="iconName"
    ></font-awesome-icon>
    <h2 class="about-us-list-item__card--title">
      {{ aboutUsItemValue.itemTitle }}
    </h2>
  </div>
</template>

<script>
import icons from "@/assets/icons";

export default {
  props: ["aboutUsItem"],
  computed: {
    aboutUsItemValue() {
      return this.aboutUsItem;
    },
    iconName() {
      return icons[this.aboutUsItemValue.icon];
    },
  },
};
</script>

<style scoped>
.about-us-list__item--card {
  background-color: var(--gray-darker);
  padding: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.about-us-list__item--card:not(:first-child):not(:last-child) {
  margin: 0px 5px;
}

.about-us-list__item--card:first-child {
  margin-right: 5px;
}

.about-us-list__item--card:last-child {
  margin-left: 5px;
}

.about-us-list-item__card--icon {
  color: var(--blue);
  font-size: var(--font-heading-large);
  padding: 1.5rem;
}

.about-us-list-item__card--title {
  color: var(--gray-light);
  font-size: var(--font-sub-heading-normal);
  padding-top: 1.5rem;
}
</style>