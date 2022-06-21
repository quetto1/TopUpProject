<template>
<section>
    <base-card>
    <h2>Register new service!</h2>
    <service-form @save-data="storeData"></service-form>
    </base-card>
</section>

</template>

<script>
import ServiceForm from "../../components/services/ServiceForm.vue";
export default {
    components: {ServiceForm},
    methods: {
        storeData(data){
            //function responsible for stroing the data 
            this.$store.dispatch('services/addService',data)
            console.log(data);
            // push back to home
            this.$router.replace('/services');
        }
    },
    
}
</script>