<template>
  <section>
    <base-card>
      <header>
        <h2>Messages</h2>
      </header>
      <ul v-if="!hasRequest">
        <!-- in actions of requests its userEmail -->
        <message-item
          v-for="message in getAllRequests"
          :key="message.id"
          :email="message.userEmail"
          :message="message.message"
        ></message-item>
      </ul>
      <h3 v-else>Your mailbox is empty</h3>
    </base-card>
  </section>
</template>

<script>
import MessageItem from "../../components/messages/MessageItem.vue";

export default {
  components: { MessageItem },
  // get access to the requests that are managed in vuex
  computed: {
    // function that reaches to the store and finds all the requests in there
    getAllRequests() {
      // getter funtion gets all the requests form the vuex 1st namespacename 2nd getter name

      return this.$store.getters["requests/getAllRequests"];
    },
    // checks if thers any elements in requests store through getter function
    hasRequest() {
      return this.$store.getters["requests/hasRequest"];
    },
  },
  created() {
    this.loadMessages();
  },
  methods: {
    loadMessages() {
      this.$store.dispatch("requests/fetchRequests");
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
