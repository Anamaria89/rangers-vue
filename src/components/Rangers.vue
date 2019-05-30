<template>
  <div>
    <h3>Rangers</h3>
    
       
           
                
                <div
                
                    v-for="ranger in allRangers"
                    :key="ranger.id"
                    v-bind:class="{ 'redRanger': redRanger(ranger), 'whiteRanger': whiteRanger(ranger), 'pinkRanger': pinkRanger(ranger), 'blueRanger': blueRanger(ranger), 'yellowRanger': yellowRanger(ranger) }"
                   
                   
                >
                    {{ ranger.name }} - {{ ranger.color }}
                
                </div>
            
           
   
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Rangers",
  methods: {
    ...mapActions(["fetchRangers"]),
    redRanger : function(ranger){
return ranger.color == 'red'
},
 whiteRanger : function(ranger){
return ranger.color == 'white'
},
 pinkRanger : function(ranger){
return ranger.color == 'pink'
},
 blueRanger : function(ranger){
return ranger.color == 'blue'
},
 yellowRanger : function(ranger){
return ranger.color == 'yellow'
}
  },
  computed: mapGetters(["allRangers"]),
  created() {
    this.fetchRangers();
  }
};
</script>

<style scoped>
.rangers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  
}
.redRanger {
  border: 1px solid #ccc;
  background:red;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width:300px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}

.whiteRanger {
  border: 1px solid #ccc;
  background:lightgray;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width:300px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}

.pinkRanger {
  border: 1px solid #ccc;
  background:pink;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width:300px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}

.blueRanger {
  border: 1px solid #ccc;
  background:blue;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width:300px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}

.yellowRanger {
  border: 1px solid #ccc;
  background:yellow;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width:300px;
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .rangers {
    grid-template-columns: 1fr;
  }
}
</style>