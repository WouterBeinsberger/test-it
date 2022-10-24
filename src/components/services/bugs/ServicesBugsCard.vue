<template>
  <base-bugs-card v-if="services" class="services" :color="servicesCardClasses">
    <template #title>
      {{ services.content.section.name }}
    </template>
    <template #default>
      <h2 class="services__sub-heading">UI</h2>
      <ul class="services-ui__list">
        <services-bugs-list-ui-item
          v-for="(value, key) in services.content"
          :key="key"
          :contentItem="value"
        >
        </services-bugs-list-ui-item>
      </ul>
      <ul class="services-ui__list">
        <services-bugs-list-ui-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem"
        ></services-bugs-list-ui-item>
      </ul>
      <ul class="services-ui__list">
        <services-bugs-list-ui-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem.title"
        >
        </services-bugs-list-ui-item>
      </ul>
      <ul class="services-ui__list">
        <services-bugs-list-ui-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem.description"
        >
        </services-bugs-list-ui-item>
      </ul>
      <h2 class="services__sub-heading element-id">Element ID's</h2>
      <ul class="services-element-id__list">
        <services-bugs-list-element-id-item
          v-for="(value, key) in services.content"
          :key="key"
          :contentItem="value"
        ></services-bugs-list-element-id-item>
      </ul>
      <ul class="services-element-id__list">
        <services-bugs-list-element-id-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem"
        ></services-bugs-list-element-id-item>
      </ul>
      <ul class="services-element-id__list">
        <services-bugs-list-element-id-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem.title"
        ></services-bugs-list-element-id-item>
      </ul>
      <ul class="services-element-id__list">
        <services-bugs-list-element-id-item
          v-for="servicesListItem in services.content.servicesList.values"
          :key="servicesListItem.id"
          :contentItem="servicesListItem.description"
        ></services-bugs-list-element-id-item>
      </ul>
    </template>
    <template #button>
      <base-button @click="updateServices()" :classes="servicesButtonClasses">
        <strong>SAVE</strong>
      </base-button>
    </template>
  </base-bugs-card>
</template>

<script>
import ServicesBugsListUiItem from "./ServicesBugsListUiItem.vue";
import ServicesBugsListElementIdItem from "./ServicesBugsListElementIdItem.vue";

export default {
  created() {
    this.loadServices();
  },
  components: {
    ServicesBugsListUiItem,
    ServicesBugsListElementIdItem,
  },
  computed: {
    services() {
      return this.$store.getters["services/services"];
    },
    color() {
      return this.$store.getters["services/color"];
    },
    servicesCardClasses() {
      return this.color;
    },
    servicesButtonClasses() {
      return `${this.color} white-text default-padding`;
    },
  },
  methods: {
    async loadServices() {
      try {
        await this.$store.dispatch("services/loadServices");
      } catch (error) {
        alert(
          "something went wrong while fetching services data: " + error.message
        );
      }
    },
    async updateServices() {
      try {
        await this.$store.dispatch("services/updateServices", this.services);
      } catch (error) {
        alert(
          "something went wrong while updating services data: " + error.message
        );
      }
      alert("Services bugs saved.");
    },
  },
};
</script>

<style scoped>
.services__sub-heading {
  color: var(--gray-lightest);
  font-size: var(--font-sub-heading-small);
  margin: 0;
  padding-bottom: 0.75rem;
}

.element-id {
  padding-top: 0.75rem;
}

.services-ui__list {
  list-style: none;
  padding: 0;
}

.services-element-id__list {
  list-style: none;
  padding: 0;
}
</style>