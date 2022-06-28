<template>
  <section>
    <h1 class="title" :class="color">
      <slot name="title"></slot>
    </h1>
    <div class="content">
      <div class="bugs">
        <slot></slot>
      </div>
      <slot name="button"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ["color"],
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: var(--font-heading-small);
  color: var(--gray-lightest);
  padding: 0.75rem 1rem;
}

.content {
  background-color: var(--gray-darker);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.bugs {
  padding-bottom: 1rem;
}

.green {
  background-color: var(--green);
}

.blue {
  background-color: var(--blue);
}
</style>