<template>
  <form @submit.prevent="submitForm">

    <base-card>
  <h1>{{switchModeHeaderCaption}}</h1>

      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsValid">Password must be longer than 6!</p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">
        {{ switchModeButtonCaption }}</base-button
      >
    </base-card>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        console.log("failed to log in");
        return;
      }

      const actionPayload = {
          email: this.email,
          password: this.password,
      };

      try {
        if (this.mode === "login") {
          await this.$store.dispatch('login', actionPayload);
          console.log("login"+" "+actionPayload.email+" "+actionPayload.password);
        } else {
          await this.$store.dispatch("signup", actionPayload);
          console.log("signup"+" "+actionPayload.email+" "+actionPayload.password);

        }

        console.log("not error");
      } catch (err) {
        this.error = err.message || "failed to authenticate";
        console.log("Error");
      }

        //fix here
            return this.$router.push("services")
     

    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup instead";
      } else {
        return "Login instead";
      }
    },
    switchModeHeaderCaption() {
      if (this.mode === "login") {
        return "Welcome and login!";
      } else {
        return "Creat new account!";
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}
.from-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  transition: all 0.3s;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #3d008d;
  outline: none;
  transition: all 0.3s;

}
button{
  margin-top: 20px;
  width: 220px;
  font-weight: 700;
  transition: all 0.3s;

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
</style>
