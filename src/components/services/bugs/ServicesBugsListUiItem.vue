<template>
  <li class="services-ui__list--item">
    <base-button
      :classes="content.isDisplayed ? 'on' : 'off'"
      @click="content.isDisplayed = !content.isDisplayed"
      >{{ content.isDisplayed ? "ON" : "OFF" }}</base-button
    >
    <p class="services-ui-list__item--bug-name">{{ content.name }} displayed</p>
  </li>
</template>

<script>
export default {
  props: ["contentItem"],
  computed: {
    content() {
      return this.contentItem;
    },
  },
};
</script>

<style scoped>
.services-ui__list--item {
  display: flex;
  align-items: center;
  color: var(--gray-lightest);
  padding: 0.375rem 0rem;
}

.services-ui-list__item--bug-name {
  font-size: var(--font-body-normal);
  flex: 1;
  padding: 0rem 0.75rem;
}
</style>