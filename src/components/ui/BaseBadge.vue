<template>
    <span class="badge" :class="type">
        {{text}}
    </span>
</template>

<script>
//responsible for catgories, based on the catgory the color will be different 

export default {
    props: ['type', 'title'],
    computed: {
        text() {
            return this.title.toUpperCase();
        }
    },
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: black;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.business {
  background-color: #3d008d;
  color: white;
}

.development {
  background-color: #71008d;
  color: white;
}
.design {
  background-color: #a70202;
  color: white;
}
.teaching {
  background-color: #cabd05;
  color: white;
}
.fitness {
  background-color: #137c1b;
  color: white;
}

.other {
  background-color: #8d006e;
  color: white;
}
</style>