<template>
  <div class="page">
    <div class="wrapper">
      <div class="display">
        <span v-if="$store.state.operatorSign">
          {{ $store.state.secondArgument }}
        </span>
        <span v-else-if="$store.state.firstArgument.length > 0">
          {{ $store.state.firstArgument }}
        </span>
        <span v-else> 0 </span>
      </div>
      <div @click="$store.commit('clear')" class="btn">Clr</div>
      <div @click="$store.commit('changeSign')" class="btn">+/-</div>
      <div @click="$store.commit('percent')" class="btn">%</div>
      <div @click="operator('/')" class="btn operator">/</div>
      <div @click="numberHandler(7)" class="btn">7</div>
      <div @click="numberHandler(8)" class="btn">8</div>
      <div @click="numberHandler(9)" class="btn">9</div>
      <div @click="operator('*')" class="btn operator">X</div>
      <div @click="numberHandler(4)" class="btn">4</div>
      <div @click="numberHandler(5)" class="btn">5</div>
      <div @click="numberHandler(6)" class="btn">6</div>
      <div @click="operator('-')" class="btn operator">-</div>
      <div @click="numberHandler(1)" class="btn">1</div>
      <div @click="numberHandler(2)" class="btn">2</div>
      <div @click="numberHandler(3)" class="btn">3</div>
      <div @click="operator('+')" class="btn operator">+</div>
      <div @click="numberHandler(0)" class="btn zero">0</div>
      <div @click="numberHandler('.')" class="btn">.</div>
      <div @click="$store.commit('equal')" class="btn operator">=</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    numberHandler(number) {
      this.$store.commit("numberHandler", { number: number });
    },
    operator(operatorChar) {
      this.$store.commit("operator", { operatorChar });
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
.page {
  font-family: "Montserrat";
  padding: 20px;
  background-color: darkcyan;
}
.wrapper {
  padding: 10px;
  background-color: #5a7bbe;
  margin: 0 auto;
  width: 600px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, 100px);
  grid-gap: 10px;
  font-size: 30px;
}

.wrapper::after {
  background-color: black;
}

.zero {
  grid-column: 1/3;
}

.btn {
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  transition: all 0.5s;
}

.btn:hover {
  color: #fff;
  background-color: darkgrey;
}

.operator {
  background-color: orange;
}

.operator:hover {
  background-color: orangered;
}

.display {
  border-radius: 10px;
  padding: 10px;
  grid-column: 1 / 5;
  background-color: #2f518e;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
