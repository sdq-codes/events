import Vue from "vue";
const state = {
  cart: {}
};

// getters
const getters = {
  currentCart: state => {
    return state.cart;
  }
};

// actions
const actions = {
  editCart({ commit }, cartItem) {
    commit("setCart", { item: cartItem });
  },
  emptyCart({ commit }) {
    commit("clearCart");
  }
};

// mutations
const mutations = {
  setCart(state, { item }) {
    if (item.value === 0 && item.ticketKey in state.cart) {
      Vue.delete(state.cart, item.ticketKey);
    } else {
      Vue.set(state.cart, item.ticketKey, item.value);
      // state.cart[item.ticketKey] = item.value;
    }
  },
  clearCart(state) {
    state.cart = {};
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
