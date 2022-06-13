<template>
  <header :style="changePosition()">
    <nav :style="justifyContect()">
      <ul class="nav-list--left" v-if="!isBugsClicked">
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
      <ul class="nav-list--right">
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
    },
    changePosition() {
      if (!this.isBugsClicked) {
        return 'position: absolute'
      }
    }
  }
}
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
  display: flex;
  justify-content: space-between;
}

.nav-list--right {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--spring-green);
}

.nav-list--left {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-list__item {
  font-family: var(--font-fira-code);  
  padding: 1rem 3rem;
}

a {
  text-decoration: none;
  color: var(--white);
}

a:hover {
  color: var(--spring-green);
}
</style>