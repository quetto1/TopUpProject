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
        <div class="form-control">
            <label for="picture">Photo Link</label>
            <input type="text" id="picture" v-model.trim="pictureLink.val">
            <p v-if="!rate.isValid">This field has to be greater than 0 PICTURE</p>
        </div>

        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Select a category</h3>

             <div id="ck-button">
                <label for="business">  <input type="checkbox" value="business"  id="business" v-model="areas.val" /><span>Business</span> </label>
             </div>
    <div id="ck-button">
      <label for="development"> <input type="checkbox" value="development"  id="development" v-model="areas.val" /><span>Development</span> </label>
    </div>
    <div id="ck-button">
      <label for="teaching"> <input type="checkbox" value="teaching"  id="teaching" v-model="areas.val" /><span>Teaching</span> </label>
    </div>
    <div id="ck-button">
      <label for="design"> <input type="checkbox" value="design"  id="design" v-model="areas.val" /><span>Design</span> </label>
    </div>
    <div id="ck-button">
      <label for="fitness"> <input type="checkbox" value="fitness"  id="fitness" v-model="areas.val" /><span>Fitness</span> </label>
    </div>
    <div id="ck-button">
      <label for="other"> <input type="checkbox" value="other"  id="other" v-model="areas.val" /><span>Other</span> </label>
    </div>

            <p v-if="!areas.isValid">U need to select at least one checkbox</p>

        </div>
        <p v-if="!formIsValid">Plese fill the form corectly</p>
                <base-button class="send-me">Create new Service!</base-button>


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
            pictureLink: {
                val: '',
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
                pictureLink: this.pictureLink,
                areas: this.areas
            };
            this.$emit('save-data', formData);
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}
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
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s;
}

input:focus,
textarea:focus {
  background-color: #f4ebff;
  outline: none;
  border-color: #590696;
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

#ck-button {
  margin: 5px;
  background-color: white;
  border-radius: 2px;
  /* border: 1px solid grey; */
  overflow: auto;
  float: left;
  color: gray;
  transition: all 0.3s;
  font-size: 18px;
  cursor: pointer;

}

#ck-button:hover input:checked + span {
  border: 1px solid #590696;
  color: #590696;
  transition: all 0.3s;
  cursor: pointer;

}

#ck-button label {
  float: left;
  width: 120px;
  color: #3a3f41;

}

#ck-button label span {
  text-align: center;
  padding: 3px 0px;
  display: block;
}

#ck-button label input {
  position: absolute;
  top: -20px;
  cursor: pointer;

}

#ck-button input + span {
  border: 1px solid grey;
  border-radius: 2px;
  transition: all 0.3s;
  cursor: pointer;

} 

#ck-button input:checked + span {
  border: 1px solid #590696;
  color: #590696;
  background-color: rgba(89,6,150,0.1);
  border-radius: 2px;
  transition: all 0.3s;
  cursor: pointer;

}
.send-me{
    width: 240px;
    margin-left: 5px;
}
</style>