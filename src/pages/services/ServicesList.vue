<template>
  <section>
    <service-filter @change-filter="setFilters"></service-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        
        <!-- <base-button v-if="!isLoggedIn" link to="/auth">Login</base-button> -->
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
          :picture-link="service.pictureLink"
        ></service-item>
      </ul>
      <h3 v-else>No services found.</h3>
    </base-card>
  </section>
</template>

<script>
import ServiceItem from "../../components/services/ServiceItem.vue";
import ServiceFilter from "../../components/services/ServiceFilter.vue";
import refreshIcon from "../../icons/refresh.png";

export default {
  components: { ServiceItem, ServiceFilter },
  data() {
    return {
      activeFilters: {
        business: true,
        development: true,
        teaching: true,
        design: true,
        fitness: true,
        other: true,
        refreshIcon: refreshIcon,
      },
    };
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    filteredServices() {
      // the first one is the namesapce name and second one it the name of the getter
      const services = this.$store.getters["services/services"];
      //Gives back the services with attached categories
      return services.filter(service =>{
        if (this.activeFilters.business && service.areas.includes('business')) {
          return true;
        }
        if (this.activeFilters.development && service.areas.includes('development')) {
          return true;
        }
        if (this.activeFilters.teaching && service.areas.includes('teaching')) {
          return true;
        }
        if (this.activeFilters.design && service.areas.includes('design')) {
          return true;
        }
        if (this.activeFilters.fitness && service.areas.includes('fitness')) {
          return true;
        }
        if (this.activeFilters.other && service.areas.includes('other')) {
          return true;
        }
        return false;
      })
    },
    isService(){
      return this.$store.getters['services/isService'];
    },
    hasServices() {
      return this.$store.getters["services/hasServices"];
    },
  },
  created() {
    this.loadServices();
  },
  methods: {
    loadServices(){
      this.$store.dispatch('services/loadServices');
    },
    refreshClient(){
      this.$router.go();
    },
     setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>
<style scoped>
.img-wrapper{
  background-color: rgba(89,6,150,1);
  border-radius: 50%;
  height: 48px;
  width: 48px;
  cursor: pointer;
  transition: all 0.5s;
}
.img-wrapper:hover{
  background-color: rgba(89,6,150,0.7);
  transform: rotateZ(360deg);
}
img{
}
h1{
  
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
}
/* reload button */

body{
  -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.reloadSingle div{
  display: inline-block;
  position: relative;
  -webkit-animation: rotate 1.5s linear infinite;
  animation: rotate 1.5s linear infinite;
}


</style>
