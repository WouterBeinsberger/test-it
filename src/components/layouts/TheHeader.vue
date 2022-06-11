<template>
  <header>
    <nav>
      <ul class="nav-list">
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
          <router-link to="/bugs">Bugs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

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
  border: 1px #ccc solid;
  margin: 0;
  padding: 0;
  list-style: none;
  
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