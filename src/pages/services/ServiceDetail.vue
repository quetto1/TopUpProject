<template>
  <section>
    <base-card>
      <h1>{{ serviceName }}</h1>
      <h2>{{ fullName }}</h2>
      <h3>${{ price }}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Contact person now!</h2>
        <base-button link :to="contactLink">Contact Person</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
    <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    <p>{{description}}</p>
    </base-card>

  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedService: null,
    };
  },
  computed: {
    serviceName(){
      return this.selectedService.serviceTitle;
    },
    fullName(){
      return this.selectedService.firstName + ' ' + this.selectedService.lastName;
    },
    description(){
      return this.selectedService.description;
    },
    areas(){
      return this.selectedService.areas;
    },
    price(){
      return this.selectedService.hourlyRate;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
  created(){
    //finding a certain service in the service list
    this.selectedService = this.$store.getters['services/services'].find(
      (service) => service.id ===this.id
    );
  },
}
</script>