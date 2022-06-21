<template>
  <header>
    <nav>
      <h1><router-link to="/">Service App!</router-link></h1>
      <ul>
        <li>
          <base-button v-if="isLoggedIn" link to="/register"
            >Register service</base-button
          >
        </li>
        <li><router-link to="/services">Services!</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Mailbox</router-link>
        </li>
        <li v-else><router-link  class="logout-button" to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn">
          <base-button class="logout-button" @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import BaseButton from "./ui/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #590596;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

}

header a {
  text-decoration: none;
  color: whitesmoke;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;

}

a:active,
a:hover,
a.router-link-active {
  background-color: #6d05b8;
  border:none;
  transition: all 0.3s;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
.logout-button{
  border: white solid 1px;
}
.logout-button:hover,
.logout-button:active,
{
  border: white solid 1px;
}
</style>
