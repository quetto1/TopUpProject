<template>
    <form @submit.prevent="formHandler">
        <div class="form-control" :class="{invalid: !serviceTitle.isValid}">
            <label for="servicetitle">Name of Service</label>
            <input type="text" id="servicetitle" v-model.trim="serviceTitle.val">
            <p v-if="!serviceTitle.isValid">This field cannot be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstname">First name</label>
            <input type="text" id="firstname" v-model.trim="firstName.val">
            <p v-if="!firstName.isValid">This field cannot be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" v-model.trim="lastName.val">
            <p v-if="!lastName.isValid">This field cannot be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea type="text" id="description" v-model="description.val"></textarea>
            <p v-if="!description.isValid">This field cannot be empty</p>
        </div>
        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Price</label>
            <input type="number" id="rate" v-model.number="rate.val">
            <p v-if="!rate.isValid">This field has to be greater than 0</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Select a category</h3>
            <div>
                <input type="checkbox" id="business" value="business" v-model="areas.val">
                <label for="business">Business service</label>
            </div>
            <div>
                <input type="checkbox" id="development" value="development" v-model="areas.val">
                <label for="development">Development/IT service</label>
            </div>
            <div>
                <input type="checkbox" id="teaching" value="teaching" v-model="areas.val">
                <label for="teaching">Are you a teacher?</label>
            </div>
            <div>
                <input type="checkbox" id="design" value="design" v-model="areas.val">
                <label for="design">Design</label>
            </div>
            <div>
                <input type="checkbox" id="fitness" value="fitness" v-model="areas.val">
                <label for="fitness">Fitness/sport service?</label>
            </div>
            <div>
                <input type="checkbox" id="other" value="other" v-model="areas.val">
                <label for="other">Other service</label>
            </div>
            <p v-if="!areas.isValid">U need to select at least one checkbox</p>

        </div>
        <p v-if="!formIsValid">Plese fill the form corectly</p>
        <base-button>Create new Service!</base-button>
    </form>
</template>
<script>
export default {
    emits: ['save-data'],
    data () {
        return{
            serviceTitle: {
                val: '',
                isValid: true
            },
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            rate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true
        };
    },
    methods: {
        formValidation(){
            this.formIsValid = true;
            if (this.serviceTitle.val === '') {
                this.serviceTitle.isValid = false;
                this.formIsValid = false;
            }
            if (this.firstName.val === '') {
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if (this.lastName.val === '') {
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.val === '') {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (!this.rate.val || this.rate.val < 0) {
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if (this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        formHandler(){
            this.formValidation();

            if (!this.formIsValid) {
                return;
            }

            const formData = {
                title: this.serviceTitle,
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };
            this.$emit('save-data', formData);
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}
.invalid p {
  color: red;
  font-weight: bold;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>