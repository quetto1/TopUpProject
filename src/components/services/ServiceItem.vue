<template>
    <extra-card class="main-wrapper" mode="outLine" link :to="serviceContactLink">
     

      <div class="first-column">
        <img :src="pictureLink" alt="">

      </div>

      <div class="second-column"> 
        <div class="first-row">
        <h1>{{serviceTitle}}</h1>
        <h1 class="rate">{{rate}} DKK</h1>
        </div>
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



       
    </extra-card>
</template>


<script>
import ExtraCard from '../ui/ExtraCard.vue';

export default {
  components: { ExtraCard },
    props: ['id','serviceTitle', 'firstName', 'lastName', 'rate', 'areas','pictureLink'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        serviceContactLink(){
            return this.$route.path + '/' +this.id + '/contact' 
        },
        serviceDetailsLink(){
            return this.$route.path + '/' +this.id

        }
    }        
}
</script>

<style scoped>
img{
  height: 100%;
  width:220px;
  object-fit: cover;
  border-radius: 4px;
}
li {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}
.main-wrapper{
  display: flex;
  flex-direction: row;
  text-decoration: none;
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.15);
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 0.75rem;
  height: 200px;
  box-sizing: border-box;
  color: #3A4F41;
  transition: box-shadow 0.3s;
}

.main-wrapper:hover {
  box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.20);
}

.rate {
  color: #590696
}

.second-column{
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 10px;
  width: 100%;
  justify-content: space-between;
}

.second-column div{
  margin-bottom: 0;
  margin-top: 0;
}

.first-column {
  margin-bottom: 0;
  margin-top: 0;
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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>