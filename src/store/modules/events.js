import { getEvents, getEventsTicketTypes } from "../../utils/api/Events/events";

const state = {
  events: [],
  page: 1
};

// getters
const getters = {
  currentEvents: state => {
    return state.events;
  },
  currentPageInfo: state => {
    return state.page;
  }
};

// actions
const actions = {
  addToEvents({ commit }) {
    return new Promise((resolve, reject) => {
      getEvents()
        .then(response => {
          commit("setPageInfo", { items: 1 });
          Promise.all(
            response.data.data.events.map(event => {
              this.dispatch("events/addToEventTicketTypes", event);
            })
          ).then(() => {
            resolve(response);
          });
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  addToEventTicketTypes({ commit }, event) {
    return new Promise((resolve, reject) => {
      getEventsTicketTypes(event.id)
        .then(response => {
          event.ticket = response.data.data;
          commit("setEvents", { items: event });
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  editPageInfo({ commit }) {
    //  Load More Api not working
    commit("setPageInfo", { items: 2 });
  }
};

// mutations
const mutations = {
  setEvents(state, { items }) {
    state.events = [...state.events, items];
  },
  setEventTicketTypes(state, { item, event }) {
    state.events[state.events.indexOf(event)].createdAt = { ...item };
  },
  setPageInfo(state, { items }) {
    state.page = items;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
