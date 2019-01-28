import { make } from "vuex-pathify";


const state = {
  name: "account",
  items: [],
  cached: [],
  currentItem: {},
  loggedIn: false,
  filter: {
    search: "",
    sort: "",
  },
  token: {
    secret: "daniel",
    simpleToken: "",
    netlifyToken: "",
    firebaseToken: "",
  },
};

const mutations: any = {
  ...make.mutations(state),
};

const AccountActions = {
};

const actions: any = {
  ...make.actions(state),
  ...AccountActions,
};

const getters: any = { ...make.getters(state) };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
