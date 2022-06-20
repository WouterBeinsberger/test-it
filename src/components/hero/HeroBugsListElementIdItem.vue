<template>
  <li class="hero-element-id__list--item">
    <p class="hero-element-id-list__item--name">{{ content.name }}:</p>
    <input
      class="hero-element-id-list__item--input"
      type="text"
      v-model="content.elementId"
    />
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
.hero-element-id__list--item {
  padding: 0.375rem 0rem;
  display: flex;
  align-items: center;
}

.hero-element-id-list__item--name {
  margin-right: 0.75rem;
  color: var(--gray-lightest);
}

.hero-element-id-list__item--input {
  font-size: var(--font-body-normal);
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--gray-lightest);
  color: var(--gray-lightest);
}
</style>