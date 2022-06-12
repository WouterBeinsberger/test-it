<template>
  <header>
    <nav :style="justifyContect()">
      <ul class="nav-list" v-if="!isBugsClicked">
        <li class="nav-list__item">
          <a href="#aboutUsSection">About Us</a>
        </li>
        <li class="nav-list__item">
          <a href="#servicesSection">Services</a>
        </li>
        <li class="nav-list__item">
          <a href="#contactSection">Contact</a>
        </li>
      </ul>
      <ul class="nav-list">
        <li class="nav-list__item">
          <router-link :to="bugsButtonRoute" @click="bugsClicked()">{{ bugsButtonValue }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isBugsClicked() {
      return this.$store.getters['header/isBugsClicked'];
    },
    bugsButtonValue() {
      return this.$store.getters['header/bugsButtonValue'];
    },
    bugsButtonRoute() {
      if (!this.isBugsClicked) {
        return { name: 'bugs' };
      }
      return { name: 'home' };
    }
  },
  methods: {
    bugsClicked() {
      this.$store.dispatch('header/bugsClicked', {isClicked: !this.isBugsClicked});
    },
    justifyContect() {
      if (this.isBugsClicked) {
        return 'justify-content: flex-end'
      }
    }
  }
}
</script>

<style scoped>
header {
  height: 100px;
  padding: 0rem 20rem 0rem 20rem;
  display: flex;
  align-items: center;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-list__item {
  background: #ccc;
  padding: 1rem 3rem;
}

.nav-list__item:hover{
  background: rgb(129, 129, 129);
}

a {
  text-decoration: none;
  color: white;
}
</style>