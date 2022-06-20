<template>
  <base-card>
    <h2>Find Service</h2>
    <span class="filter-option">
      <input type="checkbox" id="business" checked @change="filterHandler" />
      <label for="business">Business</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="development" checked @change="filterHandler" />
      <label for="development">Development</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="teaching" checked @change="filterHandler" />
      <label for="teaching">Teaching</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="design" checked @change="filterHandler" />
      <label for="design">Design</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="fitness" checked @change="filterHandler" />
      <label for="fitness">Fitness</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="other" checked @change="filterHandler" />
      <label for="other">Other</label>
    </span>
  </base-card>
</template>
<script>
export default {
    emits: ['change-filter'],
    data(){
        return{
            filters: {
                business: true,
                development: true,
                teaching: true,
                design: true,
                fitness: true,
                other: true
            }
        };
    },
    methods: {
        filterHandler(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

</style>
