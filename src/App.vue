<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Montserrat&display=swap");

* {
  margin: 0;
}

html {
  font-family: var(--font-montserrat);
}

body {
  background-color: var(--gray-darkest);
}

:root {
  --gray-lightest: #f8f8f8;
  --gray-lighter: #dbe1e8;
  --gray-light: #b2becd;
  --gray: #6c7983;
  --gray-dark: #454e56;
  --gray-darker: #2a2e35;
  --gray-darkest: #12181b;
  --red: #ff3860;
  --red-dark: #ff1443;
  --red-light: #ff5c7c;
  --blue: #498afb;
  --blue-dark: #2674fa;
  --blue-light: #6ca0fc;
  --orange: #fa8142;
  --orange-dark: #f96a1f;
  --orange-light: #fb9865;
  --yellow: #fade42;
  --yellow-dark: #f9d11f;
  --yellow-light: #fbf865;
  --green: #09c372;
  --green-dark: #07a15e;
  --green-light: #0be586;
  --purple: #9166cc;
  --purple-dark: #7d4bc3;
  --purple-light: #a481d5;
  --font-montserrat: "Montserrat", sans-serif;
  --font-fira-code: "Fira Code", monospace;
  --padding-normal: 0rem 15rem 0rem 15rem;
  --font-body-normal: 1rem;
  --font-sub-heading-normal: 1.875rem;
  --font-heading-normal: 2.25rem;
  --font-sub-heading-small: 1.313rem;
  --font-heading-small: 1.875rem;
}
</style>