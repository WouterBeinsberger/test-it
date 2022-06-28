<template>
  <header>
    <nav :style="justifyContect()">
      <ul class="nav-list__left" v-if="!isBugsClicked">
        <li class="nav-list-left__item">
          <a href="#aboutUsSection">About Us</a>
        </li>
        <li class="nav-list-left__item">
          <a href="#servicesSection">Services</a>
        </li>
        <li class="nav-list-left__item">
          <a href="#contactSection">Contact</a>
        </li>
      </ul>
      <ul class="nav-list__right">
        <base-button link :to="bugsButtonRoute" @click="bugsClicked()">
          <li class="nav-list-right__item">{{ bugsButtonValue }}</li>
        </base-button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isBugsClicked() {
      return this.$store.getters["header/isBugsClicked"];
    },
    bugsButtonValue() {
      return this.$store.getters["header/bugsButtonValue"];
    },
    bugsButtonRoute() {
      if (!this.isBugsClicked) {
        return "/bugs";
      }
      return "/";
    },
  },
  methods: {
    bugsClicked() {
      this.$store.dispatch("header/bugsClicked", {
        isClicked: !this.isBugsClicked,
      });
    },
    justifyContect() {
      if (this.isBugsClicked) {
        return "justify-content: flex-end";
      }
    },
  },
};
</script>

<style scoped>
header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
}

nav {
  width: 100%;
  padding: var(--padding-normal);
  font-family: var(--font-fira-code);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list__right {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-list__left {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-list-left__item {
  padding: 1rem 3rem;
}

.nav-list-right__item {
  padding: 1rem 3rem;
  border: 1px solid var(--gray-lightest);
}

.nav-list-right__item:hover {
  border: 1px solid var(--gray-light);
}

a {
  text-decoration: none;
  color: var(--gray-lightest);
}

a:hover {
  color: var(--gray-light);
}
</style>