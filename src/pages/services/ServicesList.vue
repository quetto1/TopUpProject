<template>
  <section>Filter</section>
  <section>
      <base-card>
    <div class="controls">
      <base-button mode="outline">Reload</base-button>
      <base-button link to="/register">Register</base-button>
    </div>
    <ul v-if="hasServices">
      <service-item
        v-for="service in filteredServices"
        :key="service.id"
        :id="service.id"
        :service-title="service.serviceTitle"
        :first-name="service.firstName"
        :last-name="service.lastName"
        :rate="service.hourlyRate"
        :areas="service.areas"
      ></service-item>
    </ul>
    <h3 v-else>No services found.</h3>
    </base-card>
  </section>
</template>

<script>
import ServiceItem from "../../components/services/ServiceItem.vue";

export default {
  components: { ServiceItem },
  computed: {
    filteredServices() {
      // the first one is the namesapce name and second one it the name of the getter
      return this.$store.getters["services/services"];
    },
    hasServices() {
      return this.$store.getters["services/hasServices"];
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>