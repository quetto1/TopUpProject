<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode:{
            type: String,
            required: false,
            default: null
        },
        link:{
            type: Boolean,
            required: false,
            default: false
        }, 
        to: {
            type: String,
            required: false,
            default: '/'

        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #590596;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #590596;
  border-color: white;
}

.flat {
  background-color: transparent;
  color: black;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: black;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #590596;
  color: white;

}
</style>