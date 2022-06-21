<template>
  <section>
    <base-card class="first-card">
    <div class="fisrt-column">
      <img :src="photoLink" alt="">
    </div>
    <div class="second-column">
  <div class="second-column"> 
        <div class="first-row">
        <h1>{{serviceName}}</h1>
        <h1 class="rate">{{price}} DKK</h1>
        </div>
        <p class="desc-p">{{description}}</p>
        <div class="second-row">
        <h3>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
          {{fullName}}</h3>
        <div class="third-row">
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        </div>
      </div>
    </div>
   
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Contact person now!</h2>
        <!-- <base-button link :to="contactLink">Contact Person</base-button> -->
      </header>
      <router-view></router-view>
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
    photoLink(){
      return this.selectedService.pictureLink;
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

<style scoped>
.first-card{
  display: flex;
  
}
.row-row{
  display: flex;
}
.desc-p{
  padding-right: 20px;
}
img{
  height: 180px;
  width: 220px;
      object-fit: cover;
}
.first-column{
  display: flex;
  flex-direction: column;
}
.second-column{
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 10px;
  width: 100%;
  justify-content: space-between;
}

.first-row{
  display: flex;
  padding-top: 4px;
  flex-direction: row;
  justify-content: space-between;
}
.second-row{
display: flex;
flex-direction: column;
margin-top: 10px;
align-items: flex-start;
}
.third-row{
display: flex;
  flex-direction: row;
}

h1{
  font-size: 1.5rem;
  margin: 0;
}

h3 {
  font-size: 14px;
  font-weight: 400;
  display:flex;
  align-items: center;
}

h3 > svg {
  margin-right: 4px;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

</style>