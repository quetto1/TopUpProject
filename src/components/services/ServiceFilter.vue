<template>
  <base-card>
  <div class="filter-wraper">
    <div class="first-row">
<h2>Available Services!</h2>
     <div @click="refreshClient" class="img-wrapper">
        <img src="../../icons/refresh.png" alt="">
        </div>
    </div>
    
    <h4 class="extra-label" for="business">Categories:</h4>



    <div id="ck-button">
      <label for="business">  <input type="checkbox" value="1"  id="business" checked @change="filterHandler"/><span>Business</span> </label>
    </div>
    <div id="ck-button">
      <label for="development"> <input type="checkbox" value="1"  id="development" checked @change="filterHandler"/><span>Development</span> </label>
    </div>
    <div id="ck-button">
      <label for="teaching"> <input type="checkbox" value="1"  id="teaching" checked @change="filterHandler"/><span>Teaching</span> </label>
    </div>
    <div id="ck-button">
      <label for="design"> <input type="checkbox" value="1"  id="design" checked @change="filterHandler"/><span>Design</span> </label>
    </div>
    <div id="ck-button">
      <label for="fitness"> <input type="checkbox" value="1"  id="fitness" checked @change="filterHandler"/><span>Fitness</span> </label>
    </div>
    <div id="ck-button">
      <label for="other"> <input type="checkbox" value="1"  id="other" checked @change="filterHandler"/><span>Other</span> </label>
    </div>




    <!-- <span class="filter-option">
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
    </span> -->
    </div>
  </base-card>
</template>
<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        business: true,
        development: true,
        teaching: true,
        design: true,
        fitness: true,
        other: true,
      },
    };
  },
  methods: {
    filterHandler(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
      refreshClient(){
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.first-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h2 {
  margin: 0.5rem 0;
  font-size: 34px;
  color: #3a3f41;
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

.extra-label {
  padding: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-weight: 400;
  margin-left: 5px;
}


.filter-wraper{
  min-height: 110px;
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

.img-wrapper{
  background-color: rgba(89,6,150,1);
  border-radius: 50%;
  height: 48px;
  width: 48px;
  cursor: pointer;
  transition: all 0.5s;
}
.img-wrapper:hover{
  background-color: rgba(89,6,150,0.7);
  transform: rotateZ(360deg);
}
</style>
