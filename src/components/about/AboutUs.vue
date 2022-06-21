<template>
  <section v-if="aboutUs"></section>
</template>

<script>
export default {
  created() {
    this.loadAboutUs();
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