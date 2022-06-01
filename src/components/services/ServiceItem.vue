<template>
    <li>
        <h1>{{serviceTitle}}</h1>
        <h3>{{fullName}}</h3>
        <h4>Price: {{rate}}DKK</h4>
        <hr>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div class="actions">
            <base-button mode="outLine" link :to="serviceContactLink">Show details</base-button>
            <!-- <base-button link :to="serviceDetailsLink">View Details</base-button> -->
        </div>
    </li>
</template>


<script>
export default {
    props: ['id','serviceTitle', 'firstName', 'lastName', 'rate', 'areas'],
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
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}

h1{
  font-size: 1.8rem;
}

h3 {
  font-size: 1.2rem;
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