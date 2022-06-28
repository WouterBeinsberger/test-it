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
button,
a {
  cursor: pointer;
  font-size: var(--font-body-normal);
  border: none;
}

.button {
  font-family: var(--font-montserrat);
}

.on {
  padding: 0.35rem 1rem;
  background-color: var(--gray-lightest);
  color: var(--gray-darkest);
}

.off {
  padding: 0.35rem 1rem;
  background-color: var(--gray);
  color: var(--gray-darkest);
}

.default-padding {
  padding: 0.75rem 1rem;
}

.green {
  background-color: var(--green);
}

.green:hover {
  background-color: var(--green-dark);
}

.blue {
  background-color: var(--blue);
}

.blue:hover {
  background-color: var(--blue-dark);
}

.white-text {
  color: var(--gray-lightest);
}
</style>