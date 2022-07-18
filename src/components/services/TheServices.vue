<template>
  <section
    class="services"
    v-if="services && services.content.section.isDisplayed"
    :id="services.content.section.elementId"
  >
    <h1
      class="services__title"
      v-if="services.content.title.isDisplayed"
      :id="services.content.title.elementId"
    >
      {{ services.content.title.value }}
    </h1>
    <div class="wrapper">
      <div class="column left">
        <div
          class="services__list"
          v-if="services.content.servicesList.isDisplayed"
          :id="services.content.servicesList.elementId"
        >
          <template
            v-for="(servicesListItem, index) in services.content.servicesList
              .values"
            :key="servicesListItem.id"
          >
            <services-list-item-card
              :servicesItem="servicesListItem"
              v-if="servicesListItem.isDisplayed && !(index % 2)"
              :id="servicesListItem.elementId"
            ></services-list-item-card>
          </template>
        </div>
      </div>
      <div class="column right">
        <div
          class="services__list"
          v-if="services.content.servicesList.isDisplayed"
          :id="services.content.servicesList.elementId"
        >
          <template
            v-for="(servicesListItem, index) in services.content.servicesList
              .values"
            :key="servicesListItem.id"
          >
            <services-list-item-card
              :servicesItem="servicesListItem"
              v-if="servicesListItem.isDisplayed && index % 2"
              :id="servicesListItem.elementId"
            ></services-list-item-card>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServicesListItemCard from "./ServicesListItemCard.vue";

export default {
  created() {
    this.loadServices();
  },
  components: {
    ServicesListItemCard,
  },
  computed: {
    services() {
      return this.$store.getters["services/services"];
    },
  },
  methods: {
    async loadServices() {
      try {
        await this.$store.dispatch("services/loadServices");
      } catch (error) {
        alert(
          "something went wrong while fetching services us data: " +
            error.message
        );
      }
    },
  },
};
</script>

<style scoped>
.services {
  padding: var(--padding-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services__title {
  color: var(--gray-lightest);
  font-size: var(--font-heading-normal);
}

.services__list {
  padding: 75px 0px;
}

.wrapper {
  width: 100%;
  display: flex;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.left {
  margin-right: 0.5rem;
}

.right {
  margin-left: 0.5rem;
}
</style>