<template>
  <button v-if="!link" class="button" :class="getClasses">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="getClasses">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
  computed: {
    getClasses() {
      return this.classes;
    },
  },
};
</script>

<style scoped>
.button,
a {
  cursor: pointer;
  font-size: var(--font-body-normal);
  border: none;
}

.on {
  padding: 0.35rem 1rem;
  background-color: var(--periwinkle-crayola);
}

.off {
  padding: 0.35rem 1rem;
  background-color: var(--bdazzled-blue);
  color: var(--periwinkle-crayola);
}
</style>