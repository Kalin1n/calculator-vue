import { createStore } from "vuex";

export default createStore({
  state: {
    firstArgument: '',
    secondArgument: '',
    operatorSign: '',
    signClicked: false,
    lastExpression: ''
  },
  mutations: {
    clear(state) {
      state.firstArgument = '';
      state.secondArgument = '';
      state.operatorSign = '';
      state.signClicked = false;
      state.lastExpression = ''
    },
    clearLast(state) {
      if (state.signClicked) {
        state.secondArgument = state.secondArgument.slice(0, -1);
      }
      else {
        state.firstArgument = state.firstArgument.slice(0, -1);
      }
    },
    numberHandler(state, payload) {
      const { number } = payload;
      this.state.signClicked
        ? state.secondArgument += number
        : state.firstArgument += number;
    },
    percent(state) {
      state.firstArgument = `${parseFloat(state.firstArgument) / 100}`
    },
    operator(state, payload) {
      const { operatorChar } = payload;
      switch (operatorChar) {
        case "/":
          state.operatorSign = "/";
          break;
        case "+":
          state.operatorSign = "+";
          break;
        case "-":
          state.operatorSign = "-";
          break;
        case "*":
          state.operatorSign = "*";
          break;
      }
      this.state.signClicked = true;
      console.log(this.state)
    },
    equal(state) {
      if (state.secondArgument.trim()) {
        state.lastExpression = state.firstArgument + state.operatorSign + state.secondArgument;
        switch (state.operatorSign) {
          case "+":
            state.firstArgument = `${Number(state.firstArgument) + Number(state.secondArgument)
              }`;
            break;
          case "-":
            state.firstArgument = `${Number(state.firstArgument) - Number(state.secondArgument)
              }`;
            break;
          case "*":
            state.firstArgument = `${Number(state.firstArgument) * Number(state.secondArgument)
              }`;
            break;
          case "/":
            state.firstArgument = `${Number(state.firstArgument) / Number(state.secondArgument)
              }`;
            break;
        }

        state.secondArgument = "";
        state.operatorSign = "";
        state.signClicked = false;
        console.log(this.state)
      } else {
        alert("Please input second argument");
      }
    },
    changeSign() {
      if (this.state.signClicked) {
        if (this.state.secondArgument.charAt(0) === "-") {
          this.state.secondArgument = this.state.secondArgument.slice(1);
        } else {
          this.state.secondArgument = `-${this.state.secondArgument}`;
        }
      } else {
        if (this.state.firstArgument.charAt(0) === "-") {
          this.state.firstArgument = this.state.firstArgument.slice(1);
        } else {
          this.state.firstArgument = `-${this.state.firstArgument}`;
        }
      }
    }
  },
  actions: {},
  modules: {}
});
